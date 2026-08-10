import { useEffect } from "react";
import Principal from "./pages/principal.jsx";
import './App.css'

function App() {

  useEffect(() => {

    function reveal(){
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((element)=>{
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
          element.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };

  }, []);

  return <Principal/>;
}

export default App;