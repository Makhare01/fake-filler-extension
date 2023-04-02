import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { sendMessageToTab } from "../chrome";

export const Root = () => {
  return (
    <Stack justifyContent="space-between" p={3} width={200} height={300}>
      <Typography
        variant="body2"
        color="text.primary"
        textAlign="center"
        fontWeight={600}
      >
        შეავსე ფორმა
      </Typography>

      <Button
        variant="outlined"
        color="success"
        onClick={() => {
          sendMessageToTab({ msg: { action: "fill" } });
        }}
      >
        შეავსე
      </Button>
    </Stack>
  );
};
