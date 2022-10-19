import React, { Component } from "react";
import { data } from "./data";
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
      </section>
    );
  }
}

export default withTranslation()(Trilhas);
