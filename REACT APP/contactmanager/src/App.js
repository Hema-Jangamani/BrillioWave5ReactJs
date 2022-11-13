
import './App.css';
import { BrowserRouter as Router,Redirect,Route, Switch } from "react-router-dom";
import Header from './Component/Header/Header';
import ContactList from './Component/ContactList/ContactList'
import Footer from './Component/Footer/Footer';
import AddContact from './Component/AddContact/AddContact';
import About from './Component/About/About';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import NotFound from './Component/Not Found/NotFound';
import EditContact from './Component/EditContact/EditContact';
import News from './Component/News/News';

function App() {
  return (
    <div>
      <Router>
          <Header/>
            <Switch>
              <Route exact path="/" component={()=>localStorage.getItem('token')?<ContactList/>:<Redirect to="/login"/>}/>
              <Route exact path="/addcontact" component={()=>localStorage.getItem('token')?<AddContact/>:<Redirect to="/login"/>}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/edit/:id" component={()=>localStorage.getItem('token')?<EditContact/>:<Redirect to="/login"/>}/>
              <Route exact path="/news" component={News}/>
              <Route exact path="*" component={NotFound}/>
              
            </Switch>
          <Footer/>
       </Router>
    </div>
  );
}

export default App;
