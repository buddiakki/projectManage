import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BarChartIcon from "@material-ui/icons/BarChart";
import PeopleIcon from "@material-ui/icons/People";
import TeamDashboard from "./Teamdashboard";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
    color: "#000",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.mixins.toolbar.minHeight + theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  listItem: {
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  selectedItem: {
    backgroundColor: theme.palette.action.selected,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  listItemText: {
    fontSize: "1rem",
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemClick = (event, item) => {
    setSelectedItem(item);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Admin Dashboard
          </Typography>
          <div>
            <Typography variant="subtitle1" style={{ marginRight: 10 }}>
              john
            </Typography>
            <IconButton color="inherit">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCIoKxXZss5sCIP3jHf-fWgBE9y5M3wKLRg&usqp"
                alt="avatar"
                style={{ width: 32, height: 32 }}
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Link>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem
            button
            classes={{ root: classes.listItem, selected: classes.selectedItem }}
            selected={selectedItem === "Dashboard"}
            onClick={(event) => handleListItemClick(event, "Dashboard")}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" className={classes.listItemText} />
            </ListItem>
            <ListItem
              button
              classes={{ root: classes.listItem, selected: classes.selectedItem }}
              selected={selectedItem === "Projects"}
              onClick={(event) => handleListItemClick(event, "Projects") 
             }
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" className={classes.listItemText} />
            </ListItem>
            <ListItem
              button
              classes={{ root: classes.listItem, selected: classes.selectedItem }}
              selected={selectedItem === "Tasks"}
              onClick={(event) => handleListItemClick(event, "Tasks")}
            >
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Tasks" className={classes.listItemText} />
            </ListItem>
            <ListItem
              button
              classes={{ root: classes.listItem, selected: classes.selectedItem }}
              selected={selectedItem === "Reports"}
              onClick={(event) => handleListItemClick(event, "Reports")}
            >
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" className={classes.listItemText} />
            </ListItem>
            <ListItem
              button
              classes={{ root: classes.listItem, selected: classes.selectedItem }}
              selected={selectedItem === "Users"}
              onClick={(event) => handleListItemClick(event, "Users")}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" className={classes.listItemText} />
            </ListItem>
          </List>
        </Drawer>
        </Link>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <TeamDashboard/>
        </main>
      </div>
);
}

export default Dashboard;      
