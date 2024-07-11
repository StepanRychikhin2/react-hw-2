import Cart from './components/Cart';
import user from './user.json'; 
import data from './data.json'; 
import frend from './isFrend.json'; 
import List from './components/list';
import Title from './components/Title';
import Frendlist from './components/FrendList';

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
      <Title/>
<List data={data} />
<Frendlist frend={frend} />

    </div>
  );
};

export default App;
