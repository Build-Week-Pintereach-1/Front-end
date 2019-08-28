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
        dark: "rgba(23, 55, 66, 1)",
        midDark: "rgba(18, 117, 168, 1)",
        midLight: "rgba(174, 207, 224, 1)",
        light: "rgba(230, 243, 250, 1)",
    },
    secondary: {
        yellow: "rgba(249, 224, 53, 1)",
        green: "rgba(124, 197, 118, 1)",
        blue: "rgba(109, 207, 246, 1)"
    },
    icon: {
        yellow: "rgba(242, 238, 135, 1)",
        blue: "rgba(0, 166, 165, 1)",
        green: "rgba(163, 242, 135, 1)",
    }
  };