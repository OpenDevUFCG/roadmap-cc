import React from "react";
import styles from "./styles.module.css";
import logo from "~/assets/logo/logo-roadmap-full.svg";
import openDevLogo from "~/assets/logo/logo-opendev.svg";
import Link from "next/link";
import MobileMenu from "~/components/HamburguerMenu";
import Image from "next/image";

function scrollTop() {
  typeof window !== "undefined" && window.scrollTo(500, 0);
}

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.container}>
          <Image
            src={logo}
            onClick={scrollTop()}
            alt="Logo Roadmap-cc"
            className={styles.logoRoadmap}
            layout="fill"
          />
        </a>
      </Link>
      <ul className={styles.linksWrapper}>
        <li>
          <Link href="/" onClick={scrollTop()}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/AboutUs">Sobre</Link>
        </li>
        <li>
          <Link href="/#trails">Trilhas</Link>
        </li>
        <a href="https://opendevufcg.org/" target="_blank">
          <img src={openDevLogo} alt="" className={styles.logoOpenDev} />
        </a>
      </ul>
      <div className={styles.menuMobile}>
        <MobileMenu />
      </div>
    </nav>
  );
}
