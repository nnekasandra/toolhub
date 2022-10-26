import { NavLink, Link } from "react-router-dom";

export const Header = () => {
    return (
      <NavLink className="flex space-between">
        <h1>Toolhub Edit</h1>
        <div className="flex gap-4">
          <Link to="/" className="text-xl hover:font-bold">
            Home
          </Link>
          <Link to="/leaderboard">leaderboard</Link>
          <Link to="/dashboard">dashboard</Link>
        </div>
      </NavLink>
    );
}