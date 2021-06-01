import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Layout, Header} from './components/';
import TablePage from './pages/tables'
import ButtonPage from './pages/buttons'
import TypographyPage from './pages/typography'

function App() {

  const menuItems = [
    {
      name: "dashboard",
      label: "dashboard",
      link: "/dashboard",
    },
    {
      name: "tables",
      label: "Tables",
      link: "/Tables",
    },
    {
      name: "button",
      label: "Buttons",
      link: "/Buttons",
    },
    {
      name: "typography",
      label: "Typography",
      link: "/Typography",
    },
  ];

  return (
    <Router>
      <Switch>
        <Layout
        menuItems={menuItems}
        contentBgcolor='#f0edf0'
        // collapse={collapsemenu}
        >
          <Header topBarPosition="relative" >
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
