import Image from 'next/image'
import NavBar from '../navBar/NavBar'
import mainImage from '../../../public/assets/1.png'
import './style.css'

export default function Header() {

  return (
    <>

      <NavBar />
      <section id="home">

        <div className="content" >
          <h2> Hi, I am Umair Jamat Ali !</h2>
          <p> Welcome to our digital domain, where innovation meets creativity.</p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
        <Image src={mainImage}
          width={500}
          height={500}
          alt="Picture of the author" />
      </section>

    </>
  )
}
