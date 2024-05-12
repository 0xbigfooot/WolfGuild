import { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/common/Loader";
import AppRoutes from "./AppRoutes";

function App() {
  // INITIALIZE AOS
  AOS.init({ once: true });

  const [preloading, setLoading] = useState(true);
  // FOR FULL SCREEN LOADING
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);
  return <>{preloading ? <Loader /> : <AppRoutes />}</>;
}

export default App;
