import theme from "@/themes/theme";
import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()(({ spacing, breakpoints }) => ({
  buttonDesign: {
    color: theme.palette.text.primary,
    border: `2px solid ${theme.palette.customBackground.header}`,
    width: "fit-content",
    padding: spacing(1.5),
    borderRadius: spacing(8),
    cursor: "pointer",
    fontWeight: 500,
    textWrap: "nowrap",
    [breakpoints.down("md")]: {
      padding: spacing(1),
    },
  },
}));

export default useStyles;
