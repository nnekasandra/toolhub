import { NavLink, Link } from "react-router-dom";

export const Header = () => {
    return (
      <NavLink className="flex justify-between p-5">
        <h1 className="text-2xl font-bold">
          <a href="/">ToolEdit</a>
        </h1>
        <div className="flex gap-4 text-sm">
          <Link
            to="/"
            className="hover:font-bold hover:border-b-2 hover:border-trusty-blue transition"
          >
            Home
          </Link>
          <Link
            to="/leaderboard"
            className="hover:font-bold hover:border-b-2 hover:border-trusty-blue transition"
          >
            Leaderboard
          </Link>
          <Link
            to="/dashboard"
            className="hover:font-bold hover:border-b-2 hover:border-trusty-blue transition"
          >
            Dashboard
          </Link>
        </div>
      </NavLink>
    );
}