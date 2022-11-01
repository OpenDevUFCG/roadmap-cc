import React, { useEffect } from 'react'
import { useTranslation, Trans } from 'react-i18next';
import { Header } from '~/components/Header';
import { About, Texts, Collaborations, Graph, Title, Paragraph, Wrapper } from "./styles";
import graph from '~/assets/img/graph.svg'
import Image from "next/image";

export default function AboutUs() {

    const { t } = useTranslation();
    
    return (
        <>
        <Header/>
        <About>
            <Texts>
                <Wrapper>
                    <Title>{t("about.mainTitle")}</Title>
                    <Paragraph>{ t('about.firstPartDescription')}</Paragraph>
                    <Paragraph><Trans i18nKey={'about.secondPartDescription'}/></Paragraph>
                </Wrapper>
                <Graph>
                    <Image src={graph}/>
                </Graph>
            </Texts>
        </About>
        </>
    )
}