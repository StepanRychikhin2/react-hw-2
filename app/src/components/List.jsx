import Userava from "./Cart";


const List = ({ user }) => {
  let num = 0;
  return (
    <ul>
      {user?.map((user) => {
        num++;
        return (
          <Userava data={user} itherator={num} />
          // <li key={recipe.id}>
          //   Name: {recipe.name}
          //   Year: {recipe.year}
          //   Ingdients:
          // </li>
        );
      })}
    </ul>
  );
};
export default List;