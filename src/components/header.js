import { NavLink, Link } from "react-router-dom";

export const Header = () => {
    return (
      <NavLink className="flex justify-between p-8">
        <h1 className="text-xl">
          <a href="/">Toolhub Edit</a>
        </h1>
        <div className="flex gap-4 text-sm">
          <Link to="/" className="hover:font-bold">
            Home
          </Link>
          <Link to="/leaderboard" className="hover:font-bold">
            Leaderboard
          </Link>
          <Link to="/dashboard" className="hover:font-bold">
            Dashboard
          </Link>
        </div>
      </NavLink>
    );
}