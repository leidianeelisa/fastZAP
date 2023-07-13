import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Home.scss";

const Home = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="Logo"></img>
      </header>
      <footer>
        Todos os direitos reservados Desenvolvido por Leidiane Cunha
      </footer>
    </div>
  );
};

export default Home;
