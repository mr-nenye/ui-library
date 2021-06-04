import React, {useState} from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Layout, Header, Text} from './components/';
import TablePage from './pages/tables'
import ButtonPage from './pages/buttons'
import TypographyPage from './pages/typography'
import { NavLink } from "react-router-dom"
import './assets/fonts/fontello/css/ezy.css'
import appLogo from './assets/ezy-logo.svg'

function App() {
  const [collapsemenu, setCollapsemenu] = useState(false);

  const menuCollapse = () => {
    return (
      setCollapsemenu(!collapsemenu)
    )
  }
  
  console.log(collapsemenu)
  const menuItems = [
    {
      name: "dashboard",
      label: "dashboard",
      link: "/dashboard",
      icon: "icon-fi-rr-settings-sliders"
    },
    {
      name: "tables",
      label: "Tables",
      link: "/Tables",
      icon: "icon-fi-rr-settings-sliders",
    },
    {
      name: "button",
      label: "Buttons",
      link: "/Buttons",
      icon: "icon-fi-rr-settings-sliders"
    },
    {
      name: "typography",
      label: "Typography",
      link: "/Typography",
      icon: "icon-fi-rr-settings-sliders"
    },
  ];

  return (
    <Router>
      <Switch>
        <Layout
        menuItems={menuItems}
        contentBgcolor='#f0edf0'
        collapse={collapsemenu}
        closeWidth="75px"
        appLogo={
          <img src={appLogo} alt="app logo"/>
        }
        bottomSection={
          <>
            <ul className="sidemenu">
            <li
              className='menuItem'
            >
              <NavLink to='/settings'>
                <i className="icon-fi-rr-settings" />
                <span className="menuText">
                  Settings
                </span>
              </NavLink>
            </li>
            <li
              className='menuItem'
            >
              <NavLink to='/notifications'>
                <i className="icon-fi-rr-bell-ring" />
                <span className="menuText">
                  Notifications
                </span>
              </NavLink>
            </li>
            </ul>
            <div className="user-section">
              <img src="https://picsum.photos/32" alt="user-img"/>
              <div>
                <Text block weight="600" size="0.7rem">Final Space Jim</Text>
                <Text weight="500" size="0.6rem">finalspace@nasa.com</Text>
              </div>
            </div>
          </>
        }
        >
          <Header topBarPosition="relative" >
            <div>
              <span style={{ cursor: "pointer" }} onClick={menuCollapse}>Menu</span>
            </div>
            <div style={{ float: 'right', marginRight: '20px', textAlign: 'right', width: '100%' }}>
              <p> username </p>
            </div>
          </Header>
          <Route
            exact
            path="/Tables"
            component={() => <TablePage />}
          />
          <Route
            exact
            path="/Buttons"
            component={() => <ButtonPage />}
          />
          <Route
            exact
            path="/Typography"
            component={() => <TypographyPage />}
          />
        </Layout>
      </Switch>
    </Router>
  )
}

export default App;
