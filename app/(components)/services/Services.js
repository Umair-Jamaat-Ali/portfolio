import Image from 'next/image'
import React from 'react'
import icon1 from '../../../public/assets/icon1.jpg'
import icon2 from '../../../public/assets/icon2.webp'
import icon3 from '../../../public/assets/icon3.jpg'

export default function Services() {
  return (
    <>
    <section id="services">
        <div class="secText">
            <h2>What I Am Great At</h2>
            <p>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Repellendus, fuga eaque 
            libero ad praesentium minus provident quam 
            voluptate modi ab blanditiis vero aliquid, 
            qui vitae.</p>
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
            <a href="https://github.com/MuzaffarGujjar" class="btn">Hire Me</a>
        </div>
    </section>
    </>
  )
}
