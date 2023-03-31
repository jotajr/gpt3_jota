import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="O que é GPT-3"
        text="O GPT-3 é considerado um dos modelos de linguagem mais avançados até o momento, com uma capacidade impressionante de gerar textos coerentes e relevantes em uma variedade de tarefas, como tradução automática, geração de resumos, resposta a perguntas, criação de texto criativo, entre outros."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        As possibilidades estão além da sua imaginação
      </h1>
      <p>Explore a Biblioteca</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Um chat bot é um programa de computador que simula conversas humanas em tempo real, geralmente usado para interagir com usuários em plataformas de mensagens."
      />
      <Feature
        title="Conhecimento"
        text="Um chat bot pode atuar no conhecimento em geral ao fornecer respostas rápidas e precisas para perguntas comuns, além de auxiliar no processo de aprendizagem por meio de interações personalizadas e educativas."
      />
      <Feature
        title="Educação"
        text="Um chat bot pode atuar na educação ao fornecer suporte personalizado e interativo aos estudantes, responder a perguntas frequentes e oferecer recursos educacionais relevantes e atualizados em tempo real."
      />
    </div>
  </div>
);

export default WhatGPT3;
