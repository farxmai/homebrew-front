import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CheckboxInput from "components/inputs/CheckboxInput";
import FormControlInput from "components/inputs/FormControlInput";
import FormControlSelect from "components/inputs/FormControlSelect";
import FormControlInputStartSelect from "components/inputs/FormControlInputStartSelect";
import NumberInput from "components/inputs/NumberInput";
import React from "react";
import { useForm } from "react-hook-form";
import WindowScreen from "components/windows/WindowScreen";

export interface DemoProps {}

const Demo: React.FC<DemoProps> = ({}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 96px)",
        position: "relative",
        overflow: "hidden",
        background: "#f0f0f01A",
      }}
    >
      <WindowScreen />
    </Box>
  );
};

const Demo1: React.FC<DemoProps> = ({}) => {
  const [numericValue, setNumericValue] = React.useState<string>("0");
  const [booleanValue, setBooleanValue] = React.useState<boolean>(false);

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const { control } = useForm();

  return (
    <Stack spacing={5} direction="column">
      <Card>
        <Typography variant="h1">(h1) Demo Page</Typography>
        <Typography variant="h2">(h2) Welcome to the Demo Page</Typography>
        <Typography variant="h3">(h3) Explore the Features</Typography>
        <Typography variant="h4">(h4) Learn and Experiment</Typography>
        <Typography variant="h5">(h5) Get Started with the Demo</Typography>
        <Typography variant="h6">(h6) Enjoy the Experience</Typography>
        <Typography variant="body1">
          (body1) This page is designed to demonstrate various components and
          features of the application.
        </Typography>
        <Typography variant="body2">
          (body2) Explore the components below to see how they work and interact
          with each other.
        </Typography>
        <Typography variant="caption">
          (caption) This is a caption text for additional information.
        </Typography>
      </Card>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Color</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {colors.map((color) => (
              <TableRow key={color}>
                <TableCell>{color}</TableCell>
                <TableCell>This is a description for {color} color.</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Card>
        <Grid container spacing={5}>
          <Grid size={4}>
            <Stack spacing={2} direction="column">
              <Button disabled>disabled</Button>
              {colors.map((color) => (
                <Button color={color}>{color}</Button>
              ))}
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack spacing={2} direction="column">
              <Button disabled variant="contained">
                disabled
              </Button>
              {colors.map((color) => (
                <Button color={color} variant="contained">
                  {color}
                </Button>
              ))}
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack spacing={2} direction="column">
              <Button disabled variant="outlined">
                disabled
              </Button>
              {colors.map((color) => (
                <Button color={color} variant="outlined">
                  {color}
                </Button>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Card>

      <Card>
        <Stack spacing={5} direction="column">
          <FormControlInput
            label="FormControlInput"
            control={control}
            name="demoInput"
          />
          <FormControlSelect
            label="FormControlSelect"
            control={control}
            name="demoSelect"
            options={options}
          />
          <FormControlInputStartSelect
            label="FormControlInputStartSelect"
            inputName="demoInputStartSelect"
            selectName="demoSelectStartSelect"
            control={control}
            options={options}
          />
          <Grid container spacing={5}>
            <Grid size={4}>
              <NumberInput
                label="NumberInput (standard)"
                value={numericValue}
                onChange={setNumericValue}
              />
              <NumberInput
                label="NumberInput (standard)"
                value={numericValue}
                onChange={setNumericValue}
              />
              <NumberInput
                label="NumberInput (standard)"
                value={numericValue}
                onChange={setNumericValue}
              />
              <NumberInput
                label="NumberInput (standard)"
                value={numericValue}
                onChange={setNumericValue}
              />
            </Grid>
            <Grid size={4}>
              <CheckboxInput
                label={"CheckboxInput (standard)"}
                value={booleanValue}
                onChange={setBooleanValue}
              />
              <CheckboxInput
                label={"CheckboxInput (standard)"}
                value={booleanValue}
                onChange={setBooleanValue}
              />
              <CheckboxInput
                label={"CheckboxInput (standard)"}
                value={booleanValue}
                onChange={setBooleanValue}
              />
              <CheckboxInput
                label={"CheckboxInput (standard)"}
                value={booleanValue}
                onChange={setBooleanValue}
              />
            </Grid>
          </Grid>
        </Stack>
      </Card>

      <Card>
        <Stack spacing={5} direction="column">
          {colors.map((color) => (
            <Alert key={color} color={color as any}>
              <AlertTitle>{color}</AlertTitle>
              This is an alert with color: <strong>{color}</strong>
            </Alert>
          ))}
          {colors.map((color) => (
            <Alert key={color} color={color as any} variant="outlined">
              <AlertTitle>{color}</AlertTitle>
              This is an alert with color: <strong>{color}</strong>
            </Alert>
          ))}
          {colors.map((color) => (
            <Alert key={color} color={color as any} variant="filled">
              <AlertTitle>{color}</AlertTitle>
              This is an alert with color: <strong>{color}</strong>
            </Alert>
          ))}
        </Stack>
      </Card>
    </Stack>
  );
};

export default Demo;

const colors = [
  "primary",
  "secondary",
  "success",
  "error",
  "warning",
  "info",
] as const;
