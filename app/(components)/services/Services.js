import Image from 'next/image'
import React from 'react'
import icon1 from '../../../public/assets/icon1.png'

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
            <Image src={icon1} width={500}
      height={500}
      alt="Picture web deveploment" />
                <h3>Website Designig</h3>
            </div>
            <div class="servicesBx">
            <Image  />
                <h3>Website Development</h3>
            </div>
            <div class="servicesBx">
                <Image  />
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
