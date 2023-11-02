// import "./Reg.css"
import styles from './Reg.module.css'
// import { RightSide } from "../../Components/Reg/RightSide/RightSide";
import { RightSide } from '@components/Reg/RightSide/RightSide';
import LeftSide from '@components/Reg/Sponsors/Sponsors';

function Reg() {
  return (
    <div>
      <img src="/images/logo.svg" alt="Logo" className={styles.logo} />
      <div className={styles.regPage}>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}
export default Reg;
// "c:/myProjects/ReactProjects/tenderly2/src/UI/Components/Reg/Sponsors/Sponsors"
// "c:/myProjects/ReactProjects/tenderly2/src/UI/Components/Reg/Sponsors/Sponsors"
// "c:/myProjects/ReactProjects/tenderly2/src/UI/Components/Reg/RightSide/RightSide"
