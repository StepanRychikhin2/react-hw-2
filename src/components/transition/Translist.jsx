import TransLi from "./transLi";
import { nanoid } from "nanoid";

const randomId = nanoid();

const TransList = ({ data }) => {
  let it = 32;
  return (
    <ul>
      {data?.map((data) => {
        it++;

        return <TransLi data={data} key={data.id} />;
      })}
    </ul>
  );
};
export default TransList;
