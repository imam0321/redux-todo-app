import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between px-5">
      <div>
        <span className="font-bold ml-2">Task</span> <span>Master</span>
      </div>
      <div className="flex items-center gap-3">
        <Link to="/user">User</Link>
        <Link to="/tasks">Task</Link>
        <ModeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
