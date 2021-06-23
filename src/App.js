import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
 
import './App.css';

import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Checkout from "./Checkout/Checkout";
import Logout from "./Logout/Logout";
import Order from "./Order/Order";
import Addressform from "./Addressform/Addressform";


const App=()=> {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/checkout" component={Checkout}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/logout" component={Logout}></Route>
    <Route path="/order" component={Order}></Route>
    <Route path="/address" component={Addressform}></Route>
    <Route path="/" ><Home/> </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
