import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between px-5 bg-slate-200">
      <div>
        <span className="font-bold ml-2">Task</span> <span>Master</span>
      </div>
      <div className="flex gap-3">
        <Link to="/user">User</Link>
        <Link to="/tasks">Task</Link>
      </div>
    </nav>
  );
};

export default Navbar;
