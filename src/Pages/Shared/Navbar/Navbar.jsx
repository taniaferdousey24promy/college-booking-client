import { Link } from "react-router-dom";

const Navbar = () => {
  
  const navOptions = (
    <>
      <li className="text-[16px] mt-2">
        <Link to="/">Home</Link>
      </li>

      <li className="text-[16px] mt-2">
        <Link to="/colleges">Colleges</Link>
      </li>
      <li className="text-[16px] mt-2">
        <Link to="/allclasses">Admission</Link>
      </li>

      <li className="text-[16px] mt-2">
        <Link to="/dashboard/mycart">
        <p>My College</p>
          
        </Link>
      </li>

      
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-300 rounded bg-transparent pt-12 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <img
            className="rounded-full h-[50px] w-[50px]"
            src="https://i.ibb.co/PxtG6B0/ac886a84b6ae93ab9fcc3a21ec468d7f.jpg"
            alt=""
          />

          <a className=" font  normal-case text-2xl font-bold">
            College Guide
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn ">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;