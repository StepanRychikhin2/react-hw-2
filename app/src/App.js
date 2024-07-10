import Cart from './components/Cart';
import user from './user.json'; 

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
    </div>
  );
};

export default App;
