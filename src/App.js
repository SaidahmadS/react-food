import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { useState } from 'react';

import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage'
import SettingsPage from './pages/SettingsPage'

import SideBar from './containers/SideBar';

import './assets/styles/main.scss';

const App = () => {

  const [ activePage, setActivePage ] = useState('')

  return(
    <Router>
      <div className="App container">
        <SideBar acrivePage={activePage} setActivePage={setActivePage}/>

        <div className="content">
          <Switch>
            <Route exact path="/homepage" component={HomePage} />
            <Route path="/orderpage" component={OrderPage} />
            <Route path="/settingspage" component={SettingsPage} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
