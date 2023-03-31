import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Vamos construir algo incrível com GPT-3 OpenAI
      </h1>
      <p>
        O GPT-3 (Generative Pre-trained Transformer 3) é um modelo de linguagem
        natural desenvolvido pela OpenAI, que utiliza técnicas de aprendizado de
        máquina para gerar texto natural em diversos idiomas, incluindo inglês,
        espanhol, francês, alemão, italiano e outros.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Seu endereço de E-Mail" />
        <button type="button">Começar</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people" />
        <p>1,600 solicitaram acesso nas últimas 24 horas</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;
