import Link from "next/link";

const Nav = ({ active }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/">
        <a className="navbar-brand">Navbar</a>
      </Link>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          {active === "home" ? (
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          ) : (
            <li className="nav-item ">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
          )}

          {active === "feature" ? (
            <li className="nav-item active">
              <Link href="/features">
                <a className="nav-link">
                  Features <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link href="/features">
                <a className="nav-link">Features</a>
              </Link>
            </li>
          )}

          {active === "pricing" ? (
            <li className="nav-item active">
              <Link href="/pricing">
                <a className="nav-link">
                  Pricing <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link href="/pricing">
                <a className="nav-link">Pricing</a>
              </Link>
            </li>
          )}

          {active === "about" ? (
            <li className="nav-item active">
              <Link href="/about">
                <a className="nav-link">
                  About <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
