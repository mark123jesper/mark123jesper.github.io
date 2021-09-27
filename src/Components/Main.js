import React from 'react';
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Switch as Switcher, Route } from 'react-router-dom';
import { CenterLayout } from '../Styles/Layouts'
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';
import SkillPage from '../Pages/SkillPage';
import ProjectPage from '../Pages/ProjectPage';
import avatar from '../Assets/M.png';

const drawerWidth = 260;

function Main(props) {
  const [darkmode, setDarkmode] = props.functions;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div>
        <CenterLayout>
          <Toolbar>
            <Avatar
              alt="White Car Dev"
              src={avatar}
              sx={{ width: 130, height: 130, margin: '30px 0' }}
            />
          </Toolbar>
        </CenterLayout>
        <List>
          <ListItem button component={Link} sx={{fontSize: 25}} to="/">Home</ListItem>
          <ListItem button component={Link} sx={{fontSize: 25}} to="/about">About</ListItem>
          <ListItem button component={Link} sx={{fontSize: 25}} to="/skill">Skill</ListItem>
          <ListItem button component={Link} sx={{fontSize: 25}} to="/project">Project</ListItem>
        </List>
      </div>
      <CenterLayout>
        <Toolbar sx={{ marginBottom: 3 }}>
          <ToggleButtonGroup
            color="primary"
            onChange={() => setDarkmode(!darkmode)}
          >
            <ToggleButton value="toggleButton">{darkmode ? 'Light Mode' : 'Dark Mode'}</ToggleButton>
          </ToggleButtonGroup>
        </Toolbar>
      </CenterLayout>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' }, position: 'fixed', top: 15, left: 25, zIndex: 15 }}
      >
        <MenuIcon />
      </IconButton>

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth }, flexShrink: { sm: 0 }
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '.MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "center", },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: "5", background: "transparent" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>


      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Switcher>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/skill" component={SkillPage} />
          <Route path="/project" component={ProjectPage} />
          <Route path="/contact" component={ContactPage} />
        </Switcher>
      </Box>
    </Box >
  );
}

export default Main;
