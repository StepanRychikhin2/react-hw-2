import Frend from "./Frend";
import { nanoid } from "nanoid";
import stylee from  "./frendss.module.css"
const randomId = nanoid();

const Frendlist = ({ data }) => {
  let it = 32;
  return (
    <ul>
      {data?.map((data) => {
        it++;
        
        return (
          <Frend data={data} key={data.id} />
          
        );
      })}
    </ul>
  );
};
export default Frendlist;