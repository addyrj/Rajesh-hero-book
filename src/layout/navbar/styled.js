import { MenuItem , styled } from "@mui/material";

export const StyledMenuItem = styled(MenuItem)({
  "&.MuiMenuItem-root": {
    color: "black",
    padding: ".25rem 1rem",
    fontSize:"15px",
    "&.Mui-selected": {
    //   backgroundColor: "red"
    },
    "&:hover": {
    textDecoration:"underline",
    //   backgroundColor: "green"
    }
  }
});