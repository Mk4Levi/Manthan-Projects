//
function Navbar() {
  return (
    <header className="navbar-mk">
      <nav className="navigation container">
        <div className="nav-brand">
          <a href="/">Manthan Kumar</a>
        </div>
        <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <a className="link link-active" href="/">
              <b>Home</b>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://manthan-mk.vercel.app/#main-wrapper"
              target="_blank"
              rel="noreferrer"
            >
              <b>My Projects</b>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://github.com/stars/Mk4Levi/lists/my-imp-projects"
              target="_blank"
              rel="noreferrer"
            >
              <b>SourceCode</b>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://manthan-mk.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <b>My Website</b>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
