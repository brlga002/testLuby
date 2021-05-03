import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import PagesRoute from "./pages/Routes";
import "../css/styles.css";
import "../css/global.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <PagesRoute />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
