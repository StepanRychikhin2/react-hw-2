import Testve from "../components/TestVe";
import stule from "./Stats.module.css"
import { nanoid } from "nanoid";

const randomId = nanoid();

const List = ({ data }) => {
  let it = 0;
  return (
    <ul className={stule.list}>
      {data?.map((data) => {
        it++;
        return <Testve data={data} key={data.id} />;
      })}
    </ul>
  );
};
export default List;

