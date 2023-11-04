import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#162a5a";
      showAlert("Dark Mode has been Enabled", "success ");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success ");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <Main>
        <Navbar
          logoName="Mayur"
          about="About Us"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={<TextForm mode={mode} showAlert={showAlert} />}
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
