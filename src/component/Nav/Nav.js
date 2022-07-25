import "./stylenav.css"
function Nav() {
  return (
    <header>
      
      <h1>Trevor Boyd</h1>
      
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/">About</a>
          </li>
          <li className="nav__item">
            <a href="/about">Projects</a>
          </li>
          <li className="nav__item">
            <a href="/contact">Contact</a>
          </li>
          <li className="nav__item">
            <a href="/about">Resume</a>
          </li>
          <li className="nav__item">
            <a href="/about">Resources</a>
          </li>
        </ul>

      </nav>
    </header>
  );
}
export default Nav;