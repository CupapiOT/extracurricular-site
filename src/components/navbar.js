import Link from "next/link"
import "@/styles/globals.css";

export default function Navbar() {
  return (
    <>
    <header className="bg-slate-400/10 backdrop-blur-sm" id="top-nav">
      <nav id="top-nav__links">
        <Link href="#home">Marvel</Link>
        <ul data-link-format="inline">
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#about">About</Link></li>
        </ul>

        <label className="hamburger-menu" id="top-nav__hamburger-menu">
          <span className="sr-only">Hamburger Menu</span>
          <input type="checkbox" id="hamburger-menu__toggle" />
        </label>
        <ul
          className="dropdown glass"
          id="hamburger-menu__dropdown"
          data-link-format="dropdown"
        >
          <li><Link className="dropdown__link" href="#skills">Skills</Link></li>
          <li><Link className="dropdown__link" href="#projects">Projects</Link></li>
          <li><Link className="dropdown__link" href="#about">About</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
}