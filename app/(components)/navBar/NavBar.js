// // import './style.css'
// import Link from "next/link"

// export default function NavBar() {
//   return (
//     <>
//     <nav>
//     <header>
//         <Link href="#" className="logo">UmairJamaat</Link>
//         <div className="menutoggle"></div>
//         <ul className="nav">
//             <li className="active"><Link href="#home">Home</Link></li>
//             <li><Link href="#services">Services</Link></li>
//             {/* <li><Link href="https://vercel.com/umair-jamaat-ali/portfolio">Portfolio</Link></li> */}
//             <li><Link href="#contact">Contact</Link></li>
//         </ul>
//     </header>
//     </nav>
//     </>
//   )
// }
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.pathname);

  const handleClick = (href) => {
    setActiveLink(href);
  };

  return (
    <header>
      <ul>
        <li className={activeLink === '/' ? 'active' : ''}>
          <Link href="/"
             onClick={() => handleClick('/')}>Home
          </Link>
        </li>
        <li className={activeLink === '/services' ? 'active' : ''}>
          <Link href="#services"
            onClick={() => handleClick('/services')}>Services
          </Link>
        </li>
        <li className={activeLink === '/contact' ? 'active' : ''}>
          <Link href="#contact"
         onClick={() => handleClick('/contact')}>Contact
          </Link>
        </li>
      </ul>

      <style jsx>{`
        header ul {
          list-style-type: none;
        }

        header ul li {
          display: inline-block;
          margin-right: 20px;
        }

        header ul li a {
          text-decoration: none;
          color: #000; /* Default color */
        }

        header ul li.active a {
          color: #f3f723; /* Yellow for active link */
        }

        header ul li:hover a {
          color: #30fe6c; /* Neon green on hover */
        }
      `}</style>
    </header>
  );
};

export default Navbar;
