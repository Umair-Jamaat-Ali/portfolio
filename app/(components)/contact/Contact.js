import Link from "next/link"

import React from 'react'

export default function Contact() {
  return (
    <>
    <section id="contact">
        <div class="secText">
            <h3>Ways To Contact Me</h3>
           
        </div>
        <div class="content">
            <Link href="#">
                <ion-icon name="mail-outline"></ion-icon>
                umairansari758@gmail.com
            </Link>
            <Link href="#">
                <ion-icon name="call-outline"></ion-icon>
                +92 345 071 2423
            </Link>
            <Link href="#">
                <ion-icon name="logo-whatsapp"></ion-icon>
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
