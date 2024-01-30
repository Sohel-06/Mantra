import { makeStyles } from "@mui/styles";

export const style = {
    sideMenu: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      left: "0px",
      width: "320px",
      height: "100%",
      backgroundColor: "#253053",
    },
  };
  const useStyles=makeStyles({
    paperStyles:{ textAlign: "center", padding: "12px", marginTop: "30px" },
    headerStyles:{ color: "#000000" },
    boxStyles:{
        width: "100%",
        display: "flex",
        alignItems: "end",
        justifyContent: "end",
      },
      dialogTitle: {
        paddingRight: "0px",
      },
      topScrollPaper: {
        alignItems: "flex-start",
      },
      topPaperScrollBody: {
        verticalAlign: "top",
      },
      errorStyles:{
        color: "#d32f2f",
        marginTop: "3px",
        marginRight: "14px",
        marginBottom: 0,
        marginLeft: "14px",
      }
  })

  export default useStyles;