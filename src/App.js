import React,{ Component } from 'react';
import './App.css';
import Userlogin from './components/userLogin'
import Adminlogin from './components/adminlogin'
import Login from './components/login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Orderlist from "./components/orderlist";
import Menu from "./components/menu"
import AddMenu from "./components/addmenu"

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Restaurant 5 star</h1>
          <Switch>
            <Route path="/user" component={Userlogin} />
            <Route path="/admin" component={Adminlogin} />
            <Route path="/menu" component={Menu} />
            <Route path="/addmenu" component={AddMenu} />
            <Route path="/" exact component={Login} />
            <Route path="/order" component={Orderlist} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
