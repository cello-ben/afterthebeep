// import { Router } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import MessageList from "./components/MessageList";
import EntryForm from "./components/EntryForm";

function App() {
  return (
    // <Router>
      
    // </Router>
    <GlobalProvider>
      <EntryForm />
      <MessageList />
    </GlobalProvider>
  );
}

export default App;
