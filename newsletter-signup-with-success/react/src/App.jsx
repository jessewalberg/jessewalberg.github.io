import "./App.css";
import { useState } from "react";
import Landing from "./components/Landing.jsx";
import Success from "./components/Success";

function App() {
  const [success, setSuccess] = useState(false);
  const [landing, setLanding] = useState(true);

  const handleSuccess = () => {
    setSuccess(true);
    setLanding(false);
  };

  const handleLanding = (e) => {
    e.preventDefault();
    setSuccess(false);
    setLanding(true);
  };

  return (
    <>
      {landing && <Landing setSuccess={handleSuccess} />}
      {success && <Success setLanding={handleLanding} />}
    </>
  );
}

export default App;
