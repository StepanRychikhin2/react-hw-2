const Frend = ({ data ,itherator }) => {
    return (
        
      <li key={data.id}>
        
        
        <img
          src={data.avatar}
          alt="User avatar"
          className="avatar"
        /> 
         {data.name}
         {data.isOnline}
         
      </li>
    );
  };
  export default Frend;












