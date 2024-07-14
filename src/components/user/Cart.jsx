import styless from "./user.module.css";
const Cart = ({ id ,username, tag, location, avatar, stats }) => {
  return (
    <div key={id} className={styless.profile}>
      <div className={styless.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styless.avatar}
        />
        <p className={styless.name}>{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={styless.stats}>
        <li className={styless.item}>
          <span className="label">Followers</span>
          <br/>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={styless.item}>
          <span className="label">Views</span>
          <br/>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={styless.item}>
          <span className="label">Likes</span>
          <br/>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
