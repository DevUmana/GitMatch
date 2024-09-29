import { Link, useLocation } from "react-router-dom";

// The Nav component is a child component that renders the Link component.
// The Link component is used to navigate between pages.
const Nav = () => {
  const currentPage = useLocation().pathname;

  // Render the navigation bar with links to the home page and the saved candidates page
  return (
    <ul className="nav nav-tabs nav-style">
      <li className="nav-item">
        <Link
          to="/"
          className={
            currentPage === "/"
              ? "nav-link-style active-link"
              : "nav-link-style"
          }
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/SavedCandidates"
          className={
            currentPage === "/SavedCandidates"
              ? "nav-link-style active-link"
              : "nav-link-style"
          }
        >
          Match
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
