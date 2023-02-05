import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

import Header from './components/Header';
import MessageList from "./components/MessageList";
import EntryForm from "./components/EntryForm";

import './App.css'

function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <Header />
      <EntryForm />
      <MessageList />
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
