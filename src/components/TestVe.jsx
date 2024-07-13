import stule from "./Stats.module.css"
const Testve = ({ data }) => {
  return (
    <li style={{background:data.color}} className={stule.item} key={data.id}>
      <p className={stule.text}>{data.label}</p>
      <p className={stule.vithoc}>{data.percentage}%</p>
    </li>
  );
};
export default Testve;
