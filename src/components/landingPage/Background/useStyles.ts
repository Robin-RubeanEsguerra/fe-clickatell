import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(({ breakpoints }) => ({
  backgoundContainer: {
    display: "flex",
    height: "auto",
    width: "100%",
  },
  childrenContainer: {
    display: "absolute",
    width: "100%",
  },
  blueGradient: {
    height: "573px",
    position: "absolute",
    width: "100%",
    zIndex: -1,
    background:
      "transparent linear-gradient(0deg, #009EE4 0%, #0071B9 10%, #00509A 20%, #003984 30%, #002A76 40%, #00216D 50%, #001C69 60%, #001966 70%, #001966 80%, #001966 90%, #001866 100%) 0% 0% no-repeat padding-box",
    clipPath: " ellipse(100vw 50vh at 30% 25%)",
    [breakpoints.up("xl")]: {
      clipPath: "ellipse(100% 60% at 23% 25%)",
    },
  },
}));

export default useStyles;
