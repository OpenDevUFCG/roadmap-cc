import React, { useCallback, useState } from 'react'
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Container, Navbar, AccessBar, Instagram, OpenCollective, Github, Discord, CustomSelect } from './styles';
import logo from '~/assets/img/RoadMapCCTypo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const buildOption = (lang) => {
  const namespace = i18n.options.defaultNS;
  const language = i18n.getDataByLanguage(lang)[namespace];
  return { value: lang, label: language.lang};
};

export const Header = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(buildOption(i18n.language));
  const [availableLangs] = useState(Object.keys(i18n.options.resources).map(buildOption));

  const changeLang = useCallback((newLang) => {
    i18n.changeLanguage(newLang.value);
    setCurrentLang(newLang);
  }, []);

  return (
    <Container>
      <Link href="/home">
        <a>
          <Image src={logo} />
        </a>
      </Link>
      <Navbar>
        <Link href="/home">
          <a className={router.pathname === '/home' ? 'nav-checked' : undefined}>{t('nav.home')}</a>
        </Link>
        <Link href="/trails">
          <a className={router.pathname === '/trails' ? 'nav-checked' : undefined}>{t('nav.trails')}</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === '/about' ? 'nav-checked' : undefined}>{t('nav.about')}</a>
        </Link>
      </Navbar>
      <AccessBar>
        <Link href="https://www.instagram.com/opendevufcg/" prefetch={false}>
          <a target="_blank">
            <Instagram />
          </a>
        </Link>
        <Link href="https://www.instagram.com/opendevufcg/" prefetch={false}>
          <a target="_blank">
            <OpenCollective />
          </a>
        </Link>
        <Link href="https://github.com/OpenDevUFCG/roadmap-cc" prefetch={false}>
          <a target="_blank">
            <Github />
          </a>
        </Link>
        <Link href="https://www.instagram.com/opendevufcg/" prefetch={false}>
          <a target="_blank">
            <Discord />
          </a>
        </Link>
        <div>
          <CustomSelect 
            options={availableLangs} 
            value={currentLang}
            onChange={changeLang}
            classNamePrefix="Select"
            isSearchable={false}
          />
        </div>
      </AccessBar>
    </Container>
  )
}


