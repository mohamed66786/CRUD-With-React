import "./App.css";
import Allproducts from "./components/Allproducts";
import { Route,Routes } from "react-router-dom";
import Details from "./components/Details";
import Edit from "./components/Edit";
// import TheData from "./Data";
function App() {
  
  return (
    <div >

    <Routes>
        <Route path="/" element={<Allproducts/>} />
        <Route path= "/details/:productId"  element={<Details/>} />
        <Route path= "/editPage/:idd"  element={<Edit/>} />
    </Routes>
    </div>
  );
}

export default App;