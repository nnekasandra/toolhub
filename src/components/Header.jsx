import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <header className="flex justify-between p-5">
        <h1 className="text-2xl font-bold">
          <a href="/">ToolEdit</a>
        </h1>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link
              to="/"
              className="hover:font-bold hover:border-b-2 hover:border-trusty-blue transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/leaderboard"
              className="hover:font-bold hover:border-b-2 hover:border-trusty-blue transition"
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="hover:font-bold hover:border-b-2 hover:border-trusty-blue transition"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </header>
    );
}