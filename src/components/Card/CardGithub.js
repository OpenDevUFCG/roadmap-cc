import React from 'react';
import styles from './styles.module.css';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


export default function CardGithub(){
    const { t } = useTranslation();

    return (
        <>
            <a href={t("about.cards.discord.redirectCard")} target="_blank">
                <div className={styles.card}>
                    <div className={styles.contentWrapper}>
                        <h2>{t("about.cards.github.title")}</h2>
                        <p>{t("about.cards.github.description")}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <FaGithub className={styles.icon}/>                 
                    </div>
                </div>
            </a>
        </>
    )
}