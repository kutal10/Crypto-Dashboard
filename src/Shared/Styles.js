const theme = "light";
//const theme = 'light';
export const lightTheme = theme === "light";

export const color = lightTheme ? "white" : "#172d59";
export const color2 = lightTheme ? "white" : "#010e2c";
export const color3 = lightTheme ? "#09f010" : "#42ff3a";
export const TileItem = lightTheme ? "white" : "#8090b0";

if (lightTheme) {
  document.body.style.background = "#061a44";
  document.body.style.color = "white";
}

export const lightBlueBackground = `background-color: ${color}`;
export const tileColour = `background-color: ${TileItem}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${color3};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 15px 10px ${
  lightTheme ? "black" : "#121d5b"
}`;
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #5fff17`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

export const orangeBoxShadow = `box-shadow: 0px 0px 4px 2px  #e3a829`;

export const fontSizeBig = "font-size: 2em";
export const fontSize1 = "font-size: 1.5em;";
export const fontSize2 = "font-size: 1.0em";
export const fontSize3 = "font-size: .75em";

export const textAlignCenter = "text-align: center;";

export const smoothShadow = `box-shadow: 
  0 1px 2px rgba(0,0,0,0.15), 
                0 2px 4px rgba(0,0,0,0.15), 
                0 4px 8px rgba(0,0,0,0.15), 
                0 8px 16px rgba(0,0,0,0.15),
                0 16px 32px rgba(0,0,0,0.15), 
                0 32px 64px rgba(0,0,0,0.15);
`;
