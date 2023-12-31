"use client"
import React, { useState } from "react";
import Link from "next/link";
import Logo from '../../../public/logo.png'
import Image from "next/image";
import { motion } from 'framer-motion'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2 }}
      className="md:w-11/12 md:top-10 top-5 rounded-[8rem] text-white text-xs border-2 border-white tracking-widest items-center flex px-8 md:px-0 justify-between headerClass fixed left-0 right-0 mx-auto z-50 py-2"
    >

      <div className="flex items-center gap-8 w-full md:px-5 justify-between">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.6 }}
        >
          <Link href="/">
            <Image
              priority="true"
              src={Logo}
              widht={50}
              height={50}
              alt="logo"
              className="object-cover bg-center rounded-full "
            />
          </Link>
        </motion.div>
        <nav className=" hidden w-full md:flex items-center justify-end gap-10 text-base">
          <Link className="link" href="#sobre" >
            <p className="hover:text-[#00303F] cursor-pointer transition ease-in delay-75 ">
              Sobre
            </p>
          </Link>
          <Link className="link" href="#ajude">
            <p className="hover:text-[#00303F] cursor-pointer transition ease-in delay-75 ">
              Ajude
            </p>
          </Link>

        </nav>
      </div>

      <section className="flex text-right md:hidden transition-all delay-100">
        <div
          className="space-y-2 "
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {!isNavOpen ?
            <>
              <p className="block h-0.5 w-8 animate-pulse bg-white"></p>
              <p className="block h-0.5 w-8 animate-pulse bg-white"></p>
              <p className="block h-0.5 w-8 animate-pulse bg-white"></p>
            </>
            :
            <div
              onClick={() => setIsNavOpen((prev) => prev)}
              className="flex items-center justify-center"
            >
              <svg
                className="h-8 w-10  text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="10" x2="10" y2="22" />
                <line x1="10" y1="10" x2="22" y2="22" />
              </svg>
            </div>
          }
        </div>

        {isNavOpen && (
          <div className="showMenuNav">
            <div className="MENU-LINK-MOBILE-OPEN flex flex-col font-extrabold items-center justify-around min-h-[100px]">
              <Link href="#sobre">
                Sobre
              </Link>
              <Link href="#ajude">
                Ajude
              </Link>
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
.hideMenuNav {
  display: none;
}

.showMenuNav {
  display: flex;
  align-items: center;
  position: absolute;
  top: 4rem;
  right: 0.3rem;
  color: white;
  background: rgba(117, 117, 117, 0.9);
  z-index: 99;
  padding: 1.5rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  animation: fadeInDown 0.5s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-50px) rotateX(-90deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

      `}</style>

    </motion.header>
  );
}
