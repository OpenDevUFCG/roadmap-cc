import React, { useEffect } from 'react'
import styles from './styles.module.css'
import CardGithub from '../../components/Card/CardGithub';
import CardDiscord from '../../components/Card/CardDiscord';
import Contribuitors from '../../components/Contributors'
import { useTranslation } from 'react-i18next';

export default function AboutUs() {

    const { t } = useTranslation();
    
    return (
        <>
        <section className={styles.aboutUs}>
            <section className={styles.firstStepAboutUS}>
                <div className={styles.firstStepContentWrapper}>
                    <h2>{t("about.mainTitle")}</h2>
                    <p>{ t('about.firstPartDescription')}</p>
                    <p>
                        { t('about.secondPartDescription')}
                        <strong>{ t('about.openDevName')}</strong>
                        { t('about.thirdPartDescription')}
                    </p>
                </div>
                <div className={styles.firstStepGraphWrapper}></div>
            </section>

            <section className={ styles.secondStepAboutUs}>
                <div className={ styles.secondStepContentWrapper}>
                    <h2>{t("about.collaborationsTitle")}</h2>
                    <p>
                        {t("about.firstPartCollaborationsDescription")}
                        <strong>{t("about.openSource")}</strong>
                        {t("about.secondPartCollaborationsDescription")}
                    </p>
                </div>
                <div className={ styles.contribuitorsWrapper}>
                    <Contribuitors/>
                </div>
            </section>
            <section className={styles.redirectCardsWrapper}>
                <CardGithub/>
                <CardDiscord/>
            </section>

        </section>
        </>
    )
}


