import React, { useCallback, useEffect, useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { BsInstagram, BsGithub, BsDiscord } from "react-icons/bs";
import { SiOpencollective } from "react-icons/si";
import { Container, Navbar, AccessBar, CustomSelect } from "./styles";
import logo from "~/assets/img/RoadMapCCTypo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BurgerMenu } from "../BurgerMenu";

const buildOption = (lang) => {
  const namespace = i18n.options.defaultNS;
  const language = i18n.getDataByLanguage(lang)[namespace];
  return { value: lang, label: language.lang };
};

export const Header = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(buildOption(i18n.language));
  const [availableLangs] = useState(Object.keys(i18n.options.resources).map(buildOption));
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const getClassActiveRoute = useCallback(
    (routeName) => (router.pathname === routeName ? "nav-checked" : undefined),
    [router.pathname]
  );

  const changeLang = useCallback((newLang) => {
    i18n.changeLanguage(newLang.value);
    setCurrentLang(newLang);
  }, []);

  useEffect(() => {
    setIsSmallScreen(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  const content = (
    <>
      <Navbar>
        <Link href="/home">
          <a className={getClassActiveRoute("/home")}>{t("nav.home")}</a>
        </Link>
        <Link href="/trails">
          <a className={getClassActiveRoute("/trails")}>{t("nav.trails")}</a>
        </Link>
        <Link href="/about">
          <a className={getClassActiveRoute("/about")}>{t("nav.about")}</a>
        </Link>
      </Navbar>
      <AccessBar>
        <Link href="https://www.instagram.com/opendevufcg/" prefetch={false}>
          <a target="_blank">
            <BsInstagram />
          </a>
        </Link>
        <Link href="https://www.instagram.com/opendevufcg/" prefetch={false}>
          <a target="_blank">
            <SiOpencollective />
          </a>
        </Link>
        <Link href="https://github.com/OpenDevUFCG/roadmap-cc" prefetch={false}>
          <a target="_blank">
            <BsGithub />
          </a>
        </Link>
        <Link href="https://www.instagram.com/opendevufcg/" prefetch={false}>
          <a target="_blank">
            <BsDiscord />
          </a>
        </Link>
        <CustomSelect
          options={availableLangs}
          value={currentLang}
          onChange={changeLang}
          classNamePrefix="Select"
          isSearchable={false}
        />
      </AccessBar>
    </>
  );

  return (
    <Container>
      <Link href="/home">
        <a className="header-logo">
          <Image src={logo} />
        </a>
      </Link>
      {isSmallScreen ? <BurgerMenu noOverlay width={280}  >{content}</BurgerMenu> : <>{content}</>}
    </Container>
  );
};
