/**
 * This page contains color variables for consistent styling. Colors are stored as strings in an object; access the colors using dot notation:

(example using styled components)

const HeaderDiv = styled.div`
        background-color: ${colors.primary.dark};
    `
 * 
 */



export const Colors = {
    primary: {
        dark: "rgba(4, 45, 80, 1)",
        midDark: "rgba(18, 117, 168, 1)",
        mid: "rgba(74, 165, 217, 1)",
        midLight: "rgba(174, 207, 224, 1)",
        light: "rgba(230, 243, 250, 1)",
    },
    secondary: {
        persimmon: "rgba(255, 99, 71, 1)",
        persimmonLight: "rgba(255, 145, 50, 1)",
        yellow: "rgba(249, 224, 53, 1)",
        green: "rgba(124, 197, 118, 1)",
        blue: "rgba(109, 207, 246, 1)"
    },
    icon: {
        orange: "rgba(255, 196, 138, 1)",
        yellow: "rgba(255, 246, 140, 1)",
        green: "rgba(160, 235, 160, 1)",
        blue: "rgba(158, 236, 255, 1)",
    }
  };