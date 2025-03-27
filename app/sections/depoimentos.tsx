"use client";

import DepoimentoCarousel from "../components/CardDepoimento";

export default function Depoimentos() {
  const testimonials = [
    {
      titulo: "Sempre prontos para resolver qualquer problema",
      texto:
        "Durante meu tempo na empresa júnior de computação, além de aplicar conceitos teóricos em projetos reais, fiz networking valioso e construí amizades duradouras. Desenvolvi habilidades de liderança e trabalho em equipe, aprofundando meu conhecimento técnico. A experiência foi crucial para minha formação, enfrentando desafios práticos e contribuindo significativamente para meu crescimento profissional.",
    //   imgSrc: "/carina.png",
      nome: "Carina Giunco",
      atividade: "Diretora do instituto Selo Social",
    },
    {
      titulo: "Networking valioso",
      texto:
        '"Durante meu tempo na empresa júnior de computação, além de aplicar conceitos teóricos em projetos reais, fiz networking valioso e construí amizades duradouras. Desenvolvi habilidades de liderança e trabalho em equipe, aprofundando meu conhecimento técnico. A experiência foi crucial para minha formação, enfrentando desafios práticos e contribuindo significativamente para meu crescimento profissional."',
    //   imgSrc: "/depoimento_bruno.jpg",
      nome: "Bruno Sanguinetti",
      atividade:
        "Ex-membro da CJR e Fundador da Startup Explanada dos Mistérios",
    },
    {
      titulo: "Habilidades profissionais e interpessoais",
      texto:
        '"A CJR foi uma ótima experiência durante a minha graduação, me permitiu experienciar o mercado de trabalho e aprender linguagens e frameworks que eu não aprenderia durante o curso de ciência da computação. Além disso, fiz muitos amigos, dos quais sou próximo até hoje."',
    //   imgSrc: "/depoimento_victor.png",
      nome: "Victor Naves",
      atividade: "Ex-membro da CJR",
    },
    {
      titulo: "Melhores anos da minha vida",
      texto:
      '"Durante meu tempo na empresa júnior de computação, além de aplicar conceitos teóricos em projetos reais, fiz networking valioso e construí amizades duradouras. Desenvolvi habilidades de liderança e trabalho em equipe, aprofundando meu conhecimento técnico. A experiência foi crucial para minha formação, enfrentando desafios práticos e contribuindo significativamente para meu crescimento profissional."',
    //   imgSrc: "/arthursilvaCJR.jpg",
      nome: "Arthur Silva",
      atividade: "Ex-Líder de Talentos da CJR",
    },
  ];

  return (
    <section className="px-5 lg:px-12" id="depoimentos">
      <DepoimentoCarousel depoimentos={testimonials} />
    </section>
  );
}