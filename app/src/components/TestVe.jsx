

  const Testve = ({ data, itherator }) => {
    return (
        
      <li key={itherator}>
        
         {data.label}
         {data.percentage}
      </li>
    );
  };
  export default Testve;