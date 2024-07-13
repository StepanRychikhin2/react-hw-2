import stylee from  "./frendss.module.css"
const Frend = ({ data }) => {
  return (
    <li className={stylee.item} key={data.id}>
       <span className="awd" >{data.isOnline ? "ONLINE" : "OFLINE"}</span>
      <img className={stylee.img} src={data.avatar} alt="User avatar" />
     <p className={stylee.text}>{data.name}</p> 
    </li>
  );
};
export default Frend;
