import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoLogoGameControllerA } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span>
          <IoLogoGameControllerA size={50} />
        </span>
        <Link to={"/"}>Blogames</Link>
      </div>
      <div className="basis-1/2 flex gap-20">
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        <Link
          to={"/articles"}
          className="nav-link"
        >
          Browse articles
        </Link>
        <Link
          to={"/articles/new"}
          className="nav-link"
        >
          Write an Article
        </Link>
      </div>
      <div className="relative">
        <span className="absolute mt-[6px]">
          <IoMdSearch size={25} />
        </span>
        <input
          className="basis-1/4 px-7 py-2 rounded-lg"
          type="text"
          placeholder="Search"
        />
      </div>
    </nav>
  );
}
