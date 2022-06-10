import React, { useState } from "react";
import {
  Grid,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  menuPaper: {
    backgroundColor: "#fff",
    boxShadow: "0px 7px 24px rgba(129, 131, 141, 0.1)",
    borderRadius: "12px",
    padding: "2px 16px",
  },
  listItem: {
    ...theme.typography.label,
    fontSize: "13px",
    fontWeight: 400,
    color: "#121111",
  },
}));
export default function Header() {
  const classes = useStyles();
  const [settingMenu, setSettingMenu] = useState(null);

  const settingMenuID = "setting-menu";
  const renderSettingMenu = (
    <Menu
      anchorEl={settingMenu}
      id={settingMenuID}
      keepMounted
      open={Boolean(settingMenu)}
      onClose={() => setSettingMenu(null)}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      classes={{
        paper: classes.menuPaper,
      }}
    >
      <MenuItem
        style={{ background: "transparent" }}
        divider
        onClick={() => setSettingMenu(null)}
      >
        <Typography className={classes.listItem}>Camera & Audio</Typography>
      </MenuItem>

      <MenuItem
        style={{ background: "transparent" }}
        divider
        onClick={() => setSettingMenu(null)}
      >
        <Typography className={classes.listItem}>Account Setting</Typography>
      </MenuItem>
      <MenuItem
        style={{ background: "transparent" }}
        divider
        onClick={() => setSettingMenu(null)}
      >
        <Typography className={classes.listItem}>Give us feedback</Typography>
      </MenuItem>
    </Menu>
  );
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      style={{ gap: "10px" }}
    >
      {renderSettingMenu}
      {/* for logo */}
      <Grid item>
        <img
          src="/logo.svg"
          alt="logo"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      {/* setting and profile icon */}
      <Grid item>
        <Grid container spacing={1} alignItems="center">
          {/* setting menu */}
          <Grid item>
            <IconButton
              onClick={(e) => setSettingMenu(e.currentTarget)}
              aria-label="setting menu"
              aria-controls={settingMenuID}
              aria-haspopup="true"
            >
              <SettingsIcon />
            </IconButton>
          </Grid>
          {/* profile Icon */}
          <Grid item>
            <Avatar
              style={{
                borderRadius: "6px",
                boxShadow: "0px 2px 3px 0px #0000000A",
                background: "#7F7F7F",
              }}
            >
              JD
            </Avatar>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
