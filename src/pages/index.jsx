import React, { useEffect } from 'react';
import Home from '../components/Home/Home.js'
import logo from '~/assets/logo/logo-roadmap-simple.svg';
import Trilhas from '../components/Trilhas/Trilhas-home'
import Router from "next/router";
import styles from './index.module.css';
import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();

  useEffect(() => {
    if (Router.pathname === "/home") {
      Router.push("/");
    }
  }, []);

  return (
    <main>
      <Home />
      <section className={styles.about} id="about">
        <h2 className={styles.title}>{t("about.title")}</h2>
        <p className={styles.text}>{t("about.text")}</p>
        <img src={logo} alt="" className={styles.logoRoadmap} />
      </section>
      <Trilhas />
    </main>
  );
}
