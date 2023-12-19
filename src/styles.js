import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  gridCenterBox: {
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    // placeContent: "center",
  },

  flexCenterBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // placeContent: "center",
  },
});
