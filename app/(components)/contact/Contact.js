import Link from "next/link"
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMobileButton } from "react-icons/fa6";

import React from 'react'
import TopArrowButton from "../topArrowButton/TopArrowbutton"

export default function Contact() {
  return (
    <>
    <section id="contact">
        <div class="secText">
            <TopArrowButton/>
            <h3>Ways To Contact Me</h3>
           
        </div>
        <div class="content">
            <Link href="#">
                <ion-icon name="mail-outline"></ion-icon>
                umairansari758@gmail.com
            </Link>
            <Link href="#">
                <FaMobileButton/>
                 +92 345 071 2423
            </Link>
            <Link href="#">
                <IoLogoWhatsapp/>
                Whatsapp
            </Link>
        </div>
        <div class="center">
            <p class="copyright">Copyright © 2023 <a href="#">Umair Jamaat Ali</a>. All Right Reserved</p>
        </div>
    </section>
    </>
  )
}
