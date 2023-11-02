// import Reg from "@pages/Reg/Reg";
import Reg from "@pages/Reg/Reg";
import "./App.css";
// import Reg from "../Pages/Reg/Reg";
import CookiesBlock from "@components/Cookies/Cookies";
// import CookiesBlock from "../Components/Cookies/Cookies";

function App() {
  return (
    <>
      <Reg />
      <div className="flex">
        <CookiesBlock />
      </div>
    </>
  );
}

export default App;
