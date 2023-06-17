import "./App.css";
import Allproducts from "./components/Allproducts";
import { Route,Routes } from "react-router-dom";
import Details from "./components/Details";
// import TheData from "./Data";
function App() {
  
  return (
    <div >

    <Routes>
        <Route path="/" element={<Allproducts/>} />
        <Route path= "/details/:productId"  element={<Details/>} />
    </Routes>
    </div>
  );
}

export default App;