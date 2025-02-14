import './App.css';
import Main from "./Main/Main.jsx";
import {BrowserRouter} from "react-router-dom";

export default function App() {
  return (
      <BrowserRouter className="App">
          <Main/>
      </BrowserRouter>
  );
}