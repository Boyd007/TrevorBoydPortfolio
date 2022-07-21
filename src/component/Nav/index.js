import "./stylenav.css"
function Nav() {
  return (
    <header>
      <h1>Title</h1>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/">Home</a>
          </li>
          <li className="nav__item">
            <a href="/about">About</a>
          </li>
          <li className="nav__item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;