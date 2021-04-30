import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import PagesRoute from "./pages/Routes";
import "../css/styles.css";
import "../css/global.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <PagesRoute />
            </BrowserRouter>
        </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
