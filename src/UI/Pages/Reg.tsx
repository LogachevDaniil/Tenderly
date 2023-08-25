import "./RegStyles/Reg.css";
import "./RegStyles/RegMeida.css";
import { LeftSide } from "../Components/Blocks/Reg.Blocks/LeftSide/LeftSide";
import { RightSide } from "../Components/Blocks/Reg.Blocks/RightSide/RightSide";
function Reg() {
  return (
    <div>
      <img src={"/images/logo.svg"} alt="Logo" className="logo" />
      <div className="reg--page">
        <LeftSide />
        <div className="line" />
        <RightSide />
      </div>
    </div>
  );
}
export default Reg;
