import React from 'react';
import styles from './styles.module.css';
import { BsDiscord } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';


export default function CardDiscord({}){
    const { t } = useTranslation();

    return (
        <>
            <a href={t("about.cards.discord.redirectCard")} target="_blank">
                <div className={styles.card}>
                    <div className={styles.contentWrapper}>
                        <h2>{t("about.cards.discord.title")}</h2>
                        <p>{t("about.cards.discord.description")}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <BsDiscord className={styles.icon}/>                 
                    </div>
                </div>
            </a>
        </>
    )
}