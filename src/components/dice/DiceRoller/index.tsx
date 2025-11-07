import React, { useMemo, useRef, useState } from "react";
import { Box, Divider } from "@mui/material";
import { rand, uid } from "utils/helpers";
import { DiceType } from "./diceTypes";
import DiceHeader from "./DiceHeader";
import DiceGrid from "./DiceGrid";
import DiceFooter from "./DiceFooter";

export default function DiceRollerWidget({
  defaultDice,
  baseTotal = 0,
  autoRoll = false,
}: {
  defaultDice?: DiceType[];
  baseTotal?: number;
  autoRoll?: boolean;
}) {
  const [dice, setDice] = useState<DiceType[]>(
    defaultDice ?? [{ id: uid(), sides: 20, value: null }]
  );
  const [rolling, setRolling] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  if (!audioRef.current && typeof Audio !== "undefined") {
    audioRef.current = new Audio("/dice-roll.mp3");
    audioRef.current.preload = "auto";
  }

  const total = useMemo(
    () => dice.reduce((sum, d) => sum + (d.value ?? 0), 0),
    [dice]
  );

  const addDie = (sides: DiceType["sides"]) =>
    setDice((ds) => [...ds, { id: uid(), sides, value: null }]);

  const removeDie = (id: string) =>
    setDice((ds) => ds.filter((d) => d.id !== id));

  const clearAll = () =>
    setDice((ds) => ds.map((d) => ({ ...d, value: null })));

  const removeAll = () => setDice([]);

  const rollAll = () => {
    if (rolling || dice.length === 0) return;
    setRolling(true);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    const scramble = () =>
      setDice((ds) => ds.map((d) => ({ ...d, value: rand(d.sides) })));

    let n = 0;
    const h = setInterval(() => {
      scramble();
      n += 1;
      if (n > 7) {
        clearInterval(h);
        setDice((ds) => ds.map((d) => ({ ...d, value: rand(d.sides) })));
        setTimeout(() => setRolling(false), 250);
      }
    }, 80);
  };

  React.useEffect(() => {
    if (autoRoll) rollAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <DiceHeader
        dice={dice}
        addDie={addDie}
        clearAll={clearAll}
        removeAll={removeAll}
      />

      <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }} />

      <DiceGrid dice={dice} rolling={rolling} removeDie={removeDie} />

      <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }} />

      <DiceFooter
        total={total}
        baseTotal={baseTotal}
        rolling={rolling}
        rollAll={rollAll}
        diceCount={dice.length}
      />
    </Box>
  );
}

export function AttackDiceRollerWidget({
  autoRoll = false,
  attackModifier,
  damageModifier,
  damageDices,
  criticalRange = 20,
  criticalModifier = 2,
  onClose,
}: {
  autoRoll?: boolean;
  attackModifier?: number;
  damageModifier?: number;
  criticalRange?: number; // e.g., 20 or 19 for 19-20
  criticalModifier?: number; // e.g., x2
  damageDices: DiceType[];
  onClose?: () => void;
}) {
  const [isHit, setIsHit] = useState<boolean | null>(null);
  const [isCritical, setIsCritical] = useState<boolean | null>(null);
  const baseTotal = (isHit ? damageModifier : attackModifier) ?? 0;
  const [dice, setDice] = useState<DiceType[]>([
    { id: uid(), sides: 20, value: null },
  ]);
  const [rolling, setRolling] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  if (!audioRef.current && typeof Audio !== "undefined") {
    audioRef.current = new Audio("/dice-roll.mp3");
    audioRef.current.preload = "auto";
  }

  const total = useMemo(
    () => dice.reduce((sum, d) => sum + (d.value ?? 0), 0),
    [dice]
  );

  const rollAll = () => {
    if (rolling || dice.length === 0) return;
    setRolling(true);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    const scramble = () =>
      setDice((ds) => ds.map((d) => ({ ...d, value: rand(d.sides) })));

    let n = 0;
    const h = setInterval(() => {
      scramble();
      n += 1;
      if (n > 7) {
        const finalValues = dice.map((d) => ({ ...d, value: rand(d.sides) }));
        if (finalValues[0].sides === 20) {
          const attackRoll = (finalValues[0].value ?? 0) + baseTotal;
          const criticalHit = attackRoll >= criticalRange;
          setIsCritical(criticalHit);
        }
        clearInterval(h);
        setDice(finalValues);
        setTimeout(() => setRolling(false), 250);
      }
    }, 80);
  };

  React.useEffect(() => {
    if (autoRoll) rollAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (isHit) {
      setDice(damageDices);
    }
  }, [isHit]);

  console.log({ isHit, isCritical });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }} />

      <DiceGrid dice={dice} rolling={rolling} criticalRange={criticalRange} />

      <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }} />

      <DiceFooter
        total={total}
        baseTotal={baseTotal}
        rolling={rolling}
        rollAll={rollAll}
        diceCount={dice.length}
        onApproveHit={() => setIsHit(true)}
        onClose={onClose}
        isCritical={!!(isHit && isCritical)}
        criticalModifier={criticalModifier}
      />
    </Box>
  );
}
