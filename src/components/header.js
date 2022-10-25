import { NavLink, Link } from "react-router-dom";

export const Header = () => {
    return (
      <NavLink>
        <h1>Toolhub Edit</h1>
        <Link to="/">Home</Link>
        <Link to="/leaderboard">leaderboard</Link>
        <Link to="/dashboard">dashboard</Link>
      </NavLink>
    );
}