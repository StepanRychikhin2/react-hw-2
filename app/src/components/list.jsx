import Testve from "../components/TestVe";
import { nanoid } from "nanoid";

const randomId = nanoid();

const List = ({ data }) => {
  let it = 0;
  return (
    <ul>
      {data?.map((data) => {
        it++;
        return (
          <Testve data={data} itherator={it} />
        );
      })}
    </ul>
  );
};
export default List;