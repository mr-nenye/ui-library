import React, {useState} from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Table, Button, Layout} from './components/';

function App() {

  const [collapsemenu, setCollapsemenu] = useState(false);

  const menuItems = [
    {
      name: "dashboard",
      label: "dashboard",
      link: "/dashboard",
    },
    {
      name: "page one",
      label: "Page One",
      link: "/path-one",
    },
    {
      name: "page two",
      label: "Page Two",
      link: "/page-two",
    },
  ];

  return (
    <Router>
      <Switch>
        <Layout
        menuItems={menuItems}
        collapse={collapsemenu}
        >
          <div style={{ width: "60%", margin: "3% auto" }}>
            <Table>
              <table>
                <tr>
                  <th>Header one</th>
                  <th>Header two</th>
                  <th>Header three</th>
                </tr>
                <tr>
                  <td>
                    Data one
                  </td>
                  <td>
                    Data two
                  </td>
                  <td>
                    Data three
                  </td>
                </tr>
              </table>
            </Table>
            <br />
            <Table strip>
              <table>
                <tr>
                  <th>Header one</th>
                  <th>Header two</th>
                  <th>Header three</th>
                </tr>
                <tr>
                  <td>
                    Data one
                  </td>
                  <td>
                    Data two
                  </td>
                  <td>
                    Data three
                  </td>
                </tr>
                <tr>
                  <td>
                    Data one
                  </td>
                  <td>
                    Data two
                  </td>
                  <td>
                    Data three
                  </td>
                </tr>
                <tr>
                  <td>
                    Data one
                  </td>
                  <td>
                    Data two
                  </td>
                  <td>
                    Data three
                  </td>
                </tr>
              </table>
            </Table>
            <br />
            <Table strip naked>
              <table>
                <tr>
                  <th>Header one</th>
                  <th>Header two</th>
                  <th>Header three</th>
                </tr>
                <tr>
                  <td>
                    Data one
                  </td>
                  <td>
                    Data two
                  </td>
                  <td>
                    Data three
                  </td>
                </tr>
                <tr>
                  <td>
                    Data one
                  </td>
                  <td>
                    Data two
                  </td>
                  <td>
                    Data three
                  </td>
                </tr>
                <tr>
                  <td>
                    Data one
                  </td>
                  <td>
                    Data two
                  </td>
                  <td>
                    Data three
                  </td>
                </tr>
              </table>
            </Table>
            <br />
            <Table naked>
              <table>
                <tr>
                  <th>Header one</th>
                  <th>Header two</th>
                  <th>Header three</th>
                </tr>
                <tr>
                  <td>
                    Data one
                  </td>
                  <td>
                    Data two
                  </td>
                  <td>
                    Data three
                  </td>
                </tr>
                <tr>
                  <td>
                    Data one
                  </td>
                  <td>
                    Data two
                  </td>
                  <td>
                    Data three
                  </td>
                </tr>
                <tr>
                  <td>
                    Data one
                  </td>
                  <td>
                    Data two
                  </td>
                  <td>
                    Data three
                  </td>
                </tr>
              </table>
            </Table>
            <br />
            <Button spacing="0 10px 0 0">Click me</Button>
            <Button round spacing="0 10px 0 0" bgColor="#35A7FF" fontColor="#fff">Click me</Button>
            <Button spacing="0 10px 0 0">1</Button>
            <Button outlined bgColor="#31B96E" spacing="0 10px 0 0">Outlined</Button>
            <Button naked fontColor="#660066" onClick={() => setCollapsemenu(!collapsemenu)}>Outlined</Button>
            <br/>
          </div>
        </Layout>
      </Switch>
    </Router>
  )
}

export default App;
