import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import MainComp from './Components/MainComp/MainComp';
import Home from './Components/Home/Home';
import ContactList from './Components/ContactList/ContactList';
function App() {
  return(
    <div>
      <Header title="StackRoute"/>
      {/* <Dashboard/> */}
      {/* <MainComp/> */}
      {/* <Home/> */}
      <ContactList/>
      <Footer/>
    </div>
  )
}

export default App;
