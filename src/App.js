import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import WelcomeMessage from "./components/WelcomeMessage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <WelcomeMessage />
      <Dashboard />
    </div>
  );
}

export default App;
