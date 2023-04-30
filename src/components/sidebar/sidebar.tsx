import { Box, Stack, SvgIconProps, Typography } from "@mui/material";
import { paths } from "app/routes";
import { IconDashboard } from "assets/icons";
import { RouteNavLink } from "ui/link";
import { useLocation } from "react-router-dom";
import { Switch } from "ui/shitch";
import { useState } from "react";

const navigation = [
  {
    title: "თავარი",
    to: paths.dashboard,
    Icon: IconDashboard,
  },
  {
    title: "მორგებული ველები",
    to: paths.customFields,
    Icon: IconDashboard,
  },
  {
    title: "კლავიატურის მალსახმობები",
    to: paths.shortcuts,
    Icon: IconDashboard,
  },
];

const NavItem = ({
  to,
  title,
  active,
  Icon,
}: {
  to: string;
  title: string;
  active: boolean;
  Icon: (props: SvgIconProps) => JSX.Element;
}) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2} pr={2}>
      <Box
        sx={{
          height: "50%",
          bgcolor: active ? "success.main" : "primary.light",
          width: 6,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: 3,
          p: 2,
          px: 2,
          width: "100%",
          ...(active && { bgcolor: "primary.main" }),
        }}
      >
        <Icon
          sx={{ mr: 2, fontSize: 18, color: active ? "#62b2a3" : "#b5bec2" }}
        />
        <RouteNavLink to={to} active={active}>
          <Typography
            variant="h3"
            sx={{
              color: active ? "text.primary" : "text.secondary",
            }}
          >
            {title}
          </Typography>
        </RouteNavLink>
      </Box>
    </Stack>
  );
};

export const Sidebar = () => {
  const location = useLocation();
  const [language, setLanguage] = useState(false);

  return (
    <Stack
      sx={{
        width: 370,
        py: 2,
        minHeight: "100%",
        bgcolor: "#f2f9f9",
        borderRight: 2,
        borderColor: "#e8ebee",
        justifyContent: "space-between",
      }}
    >
      <Stack spacing={3}>
        <Box
          height={70}
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={4}
        >
          <Typography
            sx={{
              fontFamily: "'Concert One', cursive",
              fontSize: 36,
              color: "text.primary",
            }}
          >
            SHEAVSE
          </Typography>
        </Box>
        {navigation.map((item) => {
          const isActive = location.pathname === item.to;

          return (
            <NavItem
              to={item.to}
              title={item.title}
              active={isActive}
              Icon={item.Icon}
            />
          );
        })}
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          borderTop: 1,
          borderColor: "#e8ebee",
          height: 80,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{ color: language === false ? "success.main" : "text.primary" }}
        >
          ქარ
        </Typography>
        <Switch
          checked={language}
          onChange={() => setLanguage((prev) => !prev)}
        />
        <Typography
          variant="h1"
          sx={{ color: language === true ? "success.main" : "text.primary" }}
        >
          Eng
        </Typography>
      </Stack>
    </Stack>
  );
};
