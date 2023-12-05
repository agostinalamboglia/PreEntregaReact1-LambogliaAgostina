
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./components/NavBar/NavBarComponent";
import ItemListContainer from './components/ItemListContainer';


const App = () => {


  return (
      <div style={{width: "100vw",height: "100vh"}}>
        <NavBarComponent/>
        <ItemListContainer greeting="Welcome!"/>
      </div>
  )
}

export default App;
