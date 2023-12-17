// import './style.css'
import Link from "next/link"

export default function NavBar() {
  return (
    <>
    <nav>
    <header>
        <Link href="#" className="logo">Portfolio</Link>
        <div className="menutoggle"></div>
        <ul className="nav">
            <li className="active"><a href="#home">Home</a></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#portfolio">Portfolio</Link></li>
            <li><Link href="#contact">Contact</Link></li>
        </ul>
    </header>
    </nav>
    </>
  )
}
