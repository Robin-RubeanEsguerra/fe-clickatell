import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customBackground: {
      header: string;
      footer: string;
    };
    customColor: {
      darkBlue: string;
    };
  }
  interface PaletteOptions {
    customBackground?: {
      header?: string;
      footer?: string;
    };
    customColor?: {
      darkBlue?: string;
    };
  }
}
