import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import './App.css';
function App() {
  

  return (
    <>
    <ToastContainer autoClose={3000} />
     <RoutesApp />
    </>
  )
}

export default App
