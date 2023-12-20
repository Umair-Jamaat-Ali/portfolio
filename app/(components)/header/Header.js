import Image from 'next/image'
import NavBar from '../navBar/NavBar'
import mainImage from '../../../public/assets/1.png'
import './style.css'

export default function Header() {
  
  return (
    <>
    
        <NavBar/>
    <section id="home">
        <div className="content" >
            <h2> Hi, I am Umair Jamaat Ali</h2>
            <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Itaque voluptatibus 
            amet exercitationem. Eos quam eum beatae 
            et quia incidunt sequi sapiente provident. 
            Consequuntur, dolorum eos.</p>
            <a href="#contact" className="btn">Contact Me</a>
        </div>
        <Image src={mainImage}
         width={500}
      height={500}
      alt="Picture of the author"  />
    </section>
    
    </>
  )
}
