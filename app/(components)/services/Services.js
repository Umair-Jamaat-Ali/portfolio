import Image from 'next/image'
import React from 'react'
import icon1 from '../../../public/assets/icon1.jpg'
import icon2 from '../../../public/assets/icon2.webp'
import icon3 from '../../../public/assets/icon3.jpg'
import TopArrowButton from '../topArrowButton/TopArrowbutton'


export default function Services() {

   

  return (
    <>
    <section id="services">
    <div className="secText">
        <TopArrowButton />
        <h3>What I Am Great At</h3>
        <p>HTML 5, CSS 3, Bootstrap, Tailwind CSS, Responsive Web Design, JavaScript Programming, React JS, Next JS, Firebase DB, Mongo DB</p>
      </div>
        <div class="content">
            <div class="servicesBx">
            <Image src={icon1} width={1000}
      height={900}
      alt="Picture web designing" />
                <h3>Website Designig</h3>
            </div>
            <div class="servicesBx">
            <Image src={icon2} width={1000}
      height={900}
      alt="Picture web deveploment" />
                <h3>Website Development</h3>
            </div>
            <div class="servicesBx">
                <Image  src={icon3} width={1000}
      height={900}
      alt="Picture app deveploment" />
                <h3>Android Development</h3>
            </div>
        </div>
        <div class="center">
            <a href="https://github.com/Umair-Jamaat-Ali" class="btn" style={{width:"500px", height:"90px"}}>Check My Work</a>
        </div>
    </section>
    
    </>
  )
}
