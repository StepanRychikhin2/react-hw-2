const userAva = ({ data, itherator }) => {
    let i = 0;
    return (
      <li key={itherator}>
        photo:{data.avatar}
        Name: {data.name}
        tag: {data.tag}
        location: {data.location}
        stats:
        <ul>
          {data.stats.map((stats) => {
            i++;
            console.log(`${itherator}${i}`);
            return <li key={`${itherator}${i}`}>{stats}</li>;
          })}
        </ul>
      </li>
    );
  };
  export default userAva;