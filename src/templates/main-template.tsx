import { Box } from "@mui/material";
import { Sidebar } from "components/sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainTemplate = ({ children }: Props) => {
  return (
    <Box width="100%" minHeight="100vh" height="100%" display="flex">
      <Sidebar />
      <Box
        sx={{
          flexGrow: "1",
          p: 2,
          minHeight: "100%",
          bgcolor: "white",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
