import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

import Header from './components/Header';
import Index from './components/Index';
import SingleMessage from './components/SingleMessage'

import './App.css'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <BrowserRouter>
      <Routes>
      <Route exact path = "/" element = { <Index /> } />
      <Route exact path = "/message/:id" element = { <SingleMessage />} />
      </Routes>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
