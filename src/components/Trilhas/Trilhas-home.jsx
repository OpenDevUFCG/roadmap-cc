import React, { Component } from "react";
import { data } from "./data";
import Card from "../Card/Card";
import Link from "next/link";
import styles from "./styles.module.css";
import { withTranslation } from 'react-i18next';

class Trilhas extends Component {

  render() {
    const { t } = this.props;
    return (
      <section className={styles.trails} id="trails">
        <h2 className={styles.title}>{t("trails.title")}</h2>
        <p className={styles.subtitle}>{t("trails.subtitle")}</p>
        <div className={styles.cardsWrapper}>
          {data.map((trilha) => (
            <Link key={trilha.name} href={trilha.url}>
              <a>
                <Card name={trilha.name} description={trilha.description} color={trilha.color} />
              </a>
            </Link>
          ))}
        </div>
      </section>
    );
  }
}

export default withTranslation()(Trilhas);
