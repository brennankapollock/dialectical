import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex text-white justify-end items-center bg-blue-400 p-6 ">
      <div className="bg-green-300 space-x-10 p-2 flex">
        <Link to="/account">Account</Link>
        <Link to="/tracking">Tracking</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
}

export default Header;
