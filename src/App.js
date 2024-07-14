import Cart from "./components/user/Cart";
import user from "./user.json";
import data from "./data.json";
import frend from "./isFrend.json";
import List from "./components/list";
import Title from "./components/Title";
import Frendlist from "./components/frend/FrendList";
import TransList from "./components/transition/Translist";
import transJson from "./transotoion.json";
import stule from "./components/Stats.module.css"

const App = () => {
  return (
    <div className="App">
      <Cart
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Title />
      <List data={data} />
      <Frendlist data={frend} />
      <TransList data={transJson} />
    </div>
  );
};

export default App;
