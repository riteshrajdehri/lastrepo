import logo from "./logo.svg";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextFormm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//addded new line for testing
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils-light mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#062149";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils-dark mode ";
    }
  };

  return (
    // <>

    //  <Router>
    //   <Navbar
    //     title="TextUtils"
    //     aboutText="about"
    //     mode={mode}
    //     toggleMode={toggleMode}
    //   />
    //   <Alert alert={alert} />
    //   <div className="container">
    //     <Routes>
    //       <Route path="/about" element={<About />} />

    //       <Route
    //         path="/TextUtils"
    //         element={
    //           <TextForm
    //             showAlert={showAlert}
    //             heading="Enter the text analyze below"
    //             mode={mode}
    //           />
    //         }
    //       />
    //     </Routes>
    //   </div>
    // </Router>
    // </>
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="about"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />} /> */}

        {/* <Route
            path="/TextUtils"
            element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text analyze below"
          mode={mode}
        />
        {/* } */}
        {/* /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
