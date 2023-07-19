import React from "react";

import logo from "../../assets/logo.svg";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.headerLogo} src={logo} alt="Logo"></img>
      </header>
      <div>
        <div className={styles.description}>
          Clicou, chamou! Inicie uma nova conversa no WhatsApp sem salvar o
          contato!
        </div>
      </div>
      <footer>
        <div className={styles.footer}>Desenvolvido por Leidiane Cunha.</div>
      </footer>
    </div>
  );
};

export default Home;
