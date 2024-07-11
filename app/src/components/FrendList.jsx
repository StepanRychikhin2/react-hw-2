import Frend from "../components/Frend";
import { nanoid } from "nanoid";

const randomId = nanoid();

const Frendlist = ({ isFrend }) => {
  let it = 32;
  return (
    <ul>
      {isFrend?.map((isFrend) => {
        it++;
        
        return (
          <Frend isFrend={isFrend} />
          
        );
      })}
    </ul>
  );
};
export default Frendlist;