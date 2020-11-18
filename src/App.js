
import AddStock from "./components/Authentication/AddStock"
import './App.css'
import { BrowserRouter, Route } from "react-router-dom"
import HomeScreen from "./components/Authentication/HomeScreen"
import Store from "./components/Authentication/Store"

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/store" component={Store} />


        <Route exact path="/add-stock" component={AddStock} />





      </BrowserRouter>
    </>
  )
}

export default App
