const Testve = ({ data, itherator }) => {
  return (
    <li key={data.id}>
      <p />
      {data.label}
      <p /> {data.percentage}%
    </li>
  );
};
export default Testve;
