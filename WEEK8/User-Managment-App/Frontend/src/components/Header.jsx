import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-between px-10 items-center bg-lime-200 py-4 shadow-md sticky top-0 z-50">
      <img
        className="rounded-full border-2 border-lime-500 shadow"
        width="70px"
        src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png"
        alt="logo"
      />
      <ul className="flex gap-4 text-xl font-semibold">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-lime-500 text-white rounded-xl px-4 py-2 shadow"
                : "hover:text-lime-700 px-4 py-2 transition-colors"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-user"
            className={({ isActive }) =>
              isActive
                ? "bg-lime-500 text-white rounded-xl px-4 py-2 shadow"
                : "hover:text-lime-700 px-4 py-2 transition-colors"
            }
          >
            AddUser
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users-list"
            className={({ isActive }) =>
              isActive
                ? "bg-lime-500 text-white rounded-xl px-4 py-2 shadow"
                : "hover:text-lime-700 px-4 py-2 transition-colors"
            }
          >
            UsersList
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;