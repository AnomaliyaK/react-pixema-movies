import { FormControlLabel } from "@mui/material";
import styled from "styled-components";
import { Switch } from "@mui/material";
import { COLOR } from "ui";

const StyledFormControlLabel = styled(FormControlLabel)({
  "& .MuiFormControlLabel-label": {
    marginRight: 0,
    color: COLOR.DARK,
  },
  "& .MuiFormControlLabel-root": {
    marginRight: 0,
  },
});

const CustomSwitch = styled(Switch)({
  "& .MuiSwitch-thumb": {
    marginTop: 3,
    marginLeft: 4,
    width: 16,
    height: 16,
    boxSizing: "border-box",
  },
  "& .MuiButtonBase.Mui-checked": {
    background: COLOR.SECONDARY,
  },
  "& .MuiSwitch-track": {
    marginTop: -2,
    width: 32,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLOR.SECONDARY,
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    transform: "translateX(14px)",
    color: COLOR.WHITE,
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: COLOR.PRIMARY,
    "&:hover": {
      backgroundColor: COLOR.PRIMARY,
    },
  },
});

export { StyledFormControlLabel, CustomSwitch };
