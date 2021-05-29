import logo from './logo.svg';
import './App.css';
import {Table, Button} from './components/';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
        <Button naked fontColor="#660066">Outlined</Button>
      </div>
    </div>
  );
}

export default App;
