import React from 'react';
import styles from './styles.module.css'
import Link from 'next/link';
import D3ForceGraph from "./d3-force-layout"
import graphData from './miserables';
import { withTranslation } from 'react-i18next';

class Home extends React.Component {

    render() {
        const { t } = this.props;
        return (
            <>  
            <section className={styles.home}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{t('home.mainTitle')}</h1>
                    <p className={styles.subtitle}>{t('home.subTitle')}</p>
                    <Link href="#about">
                        <button className={styles.button}>Começar</button>
                    </Link>
                </div>
                <div className="grafo_container" id="graph_container">
                <div className="grafo__container">
                </div>
                </div>
            </section>
        </>
        );
    }

    componentDidMount() {
        this.ForceGraph = new D3ForceGraph(graphData.graphData) 
    }
}
 
export default withTranslation()(Home);
