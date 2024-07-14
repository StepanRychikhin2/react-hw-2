import sty from "./trans.module.css";
const Transli = ({ data }) => {
  return (
    <li key={data.id}>
      <div>
        <ul className={sty.list}>
  
            <li>{data.type}</li>
            <li>{data.amount}</li>
            <li>{data.currency}</li>
          
        </ul>
      </div>
    </li>
  );
};
export default Transli;
