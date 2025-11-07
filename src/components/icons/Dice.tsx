import React from "react";

export type DiceSides = 4 | 6 | 8 | 10 | 12 | 20;

const Dice = ({
  sides = 20,
  color,
  ...props
}: {
  sides?: DiceSides;
  color?: string;
} & React.SVGProps<SVGSVGElement>) => {
  const getDice = (sides: DiceSides) => {
    switch (sides) {
      case 4:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={200}
            height={200}
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            viewBox="0 0 17.41 17.41"
            {...props}
          >
            <path
              d="m8.71 2.88 6.72 11.66H1.98z"
              style={{
                fill: color || "#009846",
              }}
            />
            <path
              d="M0 0h17.41v17.41H0z"
              style={{
                fill: "none",
              }}
            />
            <path
              d="M1.98 14.54 8.71 2.88v4.38z"
              style={{
                fill: "#484848",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="m8.71 2.88 6.72 11.66-6.72-7.28z"
              style={{
                fill: "#000",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="M15.43 14.54H1.98l6.73-7.28z"
              style={{
                fill: "#252626",
                fillOpacity: 0.501961,
              }}
            />
          </svg>
        );
      case 6:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={200}
            height={200}
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            viewBox="0 0 14.55 14.55"
            {...props}
          >
            <path
              d="M3.94 2.4h6.68l.54 2.28v7.64H3.4V4.68z"
              style={{
                fill: color || "#00a0e3",
              }}
            />
            <path
              d="M0 0h14.55v14.55H0z"
              style={{
                fill: "none",
              }}
            />
            <path
              d="M3.4 4.68h7.76v7.64H3.4z"
              style={{
                fill: "#5f5f5f",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="M3.4 4.68h7.76l-.54-2.28H3.94z"
              style={{
                fill: "#232323",
                fillOpacity: 0.501961,
              }}
            />
          </svg>
        );
      case 8:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={200}
            height={200}
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            viewBox="0 0 12.5 12.5"
            {...props}
          >
            <path
              d="M6.25 1.72 8.2 2.84l1.94 1.12v4.53L8.2 9.63l-1.95 1.15-1.94-1.15-1.95-1.14V3.96l1.95-1.12z"
              style={{
                fill: color || "#393185",
              }}
            />
            <path
              d="M0 0h12.5v12.5H0z"
              style={{
                fill: "none",
              }}
            />
            <path
              d="M6.25 1.72 8.2 2.84l1.94 1.12v4.53L8.2 5.1 6.25 1.72zM2.36 8.49V3.96l1.95-1.12 1.94-1.12L4.31 5.1 2.36 8.49z"
              style={{
                fill: "#545454",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="M10.14 8.49H2.36L4.31 5.1l1.94-3.38L8.2 5.1z"
              style={{
                fill: "#737474",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="M6.25 10.78 8.2 9.63l1.94-1.14H2.36l1.95 1.14z"
              style={{
                fill: "#3c3d3dff",
                fillOpacity: 0.501961,
              }}
            />
          </svg>
        );

      case 10:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={200}
            height={200}
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            viewBox="0 0 12.49 12.49"
            {...props}
          >
            <path
              d="m6.24 1.74 4.19 3.17.01 2.5-4.2 3.34-4.19-3.34.01-2.5z"
              style={{
                fill: color || "#e5097f",
              }}
            />
            <path
              d="M0 0h12.49v12.49H0z"
              style={{
                fill: "none",
              }}
            />
            <path
              d="m6.24 1.75 1.32 2.99 1.32 2.98-1.32.76-1.32.76-1.32-.76-1.32-.76 1.32-2.98z"
              style={{
                fill: "#494949",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="m6.24 1.74 4.19 3.17.01 2.5-1.56.31z"
              style={{
                fill: "#202020",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="M6.24 1.74 2.06 4.91l-.01 2.5 1.55.31z"
              style={{
                fill: "#787879",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="M6.24 9.24v1.51L2.05 7.41l1.55.31z"
              style={{
                fill: "#252626",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="M6.24 9.24v1.51l4.2-3.34-1.56.31z"
              style={{
                fill: "#000",
                fillOpacity: 0.501961,
              }}
            />
          </svg>
        );
      case 12:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={200}
            height={200}
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            viewBox="0 0 14.53 14.53"
            {...props}
          >
            <path
              d="m10.47 3.03 2.03 2.39v3.69l-1.99 2.45-3.24 1.31-3.25-1.31-1.98-2.45V5.42l2.03-2.39 1.6-.68 1.6-.68 1.6.68z"
              style={{
                fill: color || "#e31e24",
              }}
            />
            <path
              d="M0 0h14.53v14.53H0z"
              style={{
                fill: "none",
              }}
            />
            <path
              d="m7.27 11.32 1.6-1.16L10.47 9l-.61-1.88-.62-1.88H5.29l-.61 1.88L4.07 9l1.6 1.16z"
              style={{
                fill: "#393839",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="m7.27 1.67 1.6.68 1.6.68-.61 1.11-.62 1.1H5.29l-.61-1.1-.61-1.11 1.6-.68z"
              style={{
                fill: "#888",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="m9.24 5.24 1.23-2.21 2.03 2.39v3.69L10.47 9z"
              style={{
                fill: "#000",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="M5.29 5.24 4.07 3.03 2.04 5.42v3.69L4.07 9z"
              style={{
                fill: "#6d6d6d",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="M2.04 9.11 4.07 9l3.2 2.32v1.55l-3.25-1.31z"
              style={{
                fill: "#494949",
                fillOpacity: 0.501961,
              }}
            />
            <path
              d="M12.5 9.11 10.47 9l-3.2 2.32v1.55l3.24-1.31z"
              style={{
                fill: "#000",
                fillOpacity: 0.501961,
              }}
            />
          </svg>
        );
      case 20:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={200}
            height={200}
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            viewBox="0 0 17.38 17.38"
            {...props}
          >
            <defs>
              <style>
                {
                  ".fil3,.fil5,.fil6{fill:#000;fill-opacity:.501961}.fil3,.fil5{fill:#494949}.fil3{fill:#6d6d6d}"
                }
              </style>
            </defs>
            <g id="Layer_x0020_1">
              <path
                d="m8.69 1.28 6.7 3.33-.04 7.99-6.66 3.5-6.66-3.5-.04-7.99z"
                style={{
                  fill: color || "#099978",
                }}
              />
              <path
                d="M0 0h17.38v17.38H0z"
                style={{
                  fill: "none",
                }}
              />
              <path
                d="m8.69 14.07 2.02-3.51 2.01-3.51H4.66l2.02 3.51z"
                style={{
                  fill: "#393839",
                  fillOpacity: 0.501961,
                }}
              />
              <path
                d="m8.69 1.28 2.02 2.89 2.01 2.88H4.66l2.02-2.88z"
                className="fil3"
              />
              <path
                d="M8.69 1.28 4.66 7.05 1.99 4.61z"
                style={{
                  fill: "#888",
                  fillOpacity: 0.501961,
                }}
              />
              <path d="M8.69 14.07 2.03 12.6l2.63-5.55z" className="fil5" />
              <path d="m2.03 12.6 2.63-5.55-2.67-2.44z" className="fil3" />
              <path d="m2.03 12.6 6.66 1.47v2.03z" className="fil6" />
              <path d="m8.69 1.28 4.03 5.77 2.67-2.44z" className="fil5" />
              <path
                d="m8.69 14.07 6.66-1.47-2.63-5.55z"
                style={{
                  fill: "#131313",
                  fillOpacity: 0.501961,
                }}
              />
              <path
                d="m15.35 12.6-2.63-5.55 2.67-2.44zM15.35 12.6l-6.66 1.47v2.03z"
                className="fil6"
              />
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

  return getDice(sides);
};

export default Dice;
