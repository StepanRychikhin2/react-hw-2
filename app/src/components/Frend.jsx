const Frends = ({ isFrend }) => {
    return (
        
      <li key={isFrend.id}>
        
         {isFrend.avatar}
         {isFrend.name}
         {isFrend.isOnline}
      </li>
    );
  };
  export default Frends;












