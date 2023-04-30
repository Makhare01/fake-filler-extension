import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const AbsolutelyCentered = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});
