import "./stylenav.css"
function Nav({setpagename}) {
  return (
    <header>
      
      <h1>Trevor Boyd</h1>
      
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item" onClick={()=>setpagename("about")}>
            <a href="/">About</a>
          </li>
          <li className="nav__item" onClick={()=>setpagename("projects")}>
            <a href="/about">Projects</a>
          </li>
          <li className="nav__item"onClick={()=>setpagename("contact")}>
            <a href="/contact">Contact</a>
          </li>
          <li className="nav__item"onClick={()=>setpagename("resume")}>
            <a href="/about">Resume</a>
          </li>
          <li className="nav__item"onClick={()=>setpagename("resources")}>
            <a href="/about">Resources</a>
          </li>
        </ul>

      </nav>
    </header>
  );
}
export default Nav;