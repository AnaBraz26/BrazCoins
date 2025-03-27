"user client";

import React from "react";
import Depoimentos from "./sections/depoimentos";

export default function Home(){
  return(
      
    <div>
        <div>
          <div className="flex justify-between items-center h-20 bg-[#202216] px-14">
            <div className="flex items-center space-x-4">
              <img className="w-45 cursor-pointer" src="BRAZ.png" alt="Brazcoins"/>
          </div>

          <div className="flex justify-between items-center">
                  <button className="flex m-5 items-center px-6 py-3 bg-[#C3AF20] border-white border-2 text-black font-bold rounded-md"> Quem somos </button>
                  <button className="flex m-5 items-center px-6 py-3 bg-[#C3AF20] border-white border-2 text-black font-bold rounded-md"> Serviços </button>
                  <button className="flex m-5 items-center px-6 py-3 bg-[#C3AF20] border-white border-2 text-black font-bold rounded-md"> Produtos </button>
                  <button className="flex m-5 items-center px-6 py-3 bg-[#C3AF20] border-white border-2 text-black font-bold rounded-md"> Contato </button>
              </div>
          </div>
        </div>
        {/* chamada para entrar em Contatoe */}
        <div className="flex flex-row justify-between items-center h-100 bg-[#C3AF20]">
            <div className="flex py-6 items-center justify-between">
                      <h1 className="text-4xl text-black font-bold font-sans">ENTRE EM CONTATO</h1>
              </div>
        </div>

        {/* sobre Brazcoins */}
        <div className="flex flex-row justify-between items-center h-100  bg-[#FFFFFF]">
            <div className="flex py-6 items-center justify-between">
                      <h1 className="text-4xl text-black font-bold font-sans">SOBRE BRAZCOINS</h1>
            </div>
            <div className="flex py-6 items-center justify-between">
                      <h2 className="text-xl text-black font-bold font-sans">Vou ver e lhe aviso</h2>
            </div>
        </div>

        {/* serviços prestados */}
        <div  className="flex flex-col justify-between items-center h-100 bg-[#C3AF20]">
            <div className="flex py-6 items-center justify-between">
                  <h1 className="text-4xl text-black font-bold font-sans">SERVIÇOS</h1>
            </div>
        </div>

        {/* quem já comprou diz */}
        <div  className="flex flex-col justify-between items-center h-125 bg-[#FFFFFF]">
          
          <div className="flex py-6 items-center justify-between">
              <h1 className="text-4xl text-black font-bold font-sans">QUEM COMPROU DIZ..</h1>
          </div>

          <div className="flex flex-row pb-10">
              <Depoimentos />
          </div>
        </div>

        <div className="border-b-3 border-black flex flex-col md:flex-row justify-between items-start h-auto bg-[#C3AF20] px-8 md:px-10 py-5 gap-4 md:gap-0">
  
          {/* Sobre BrazCoins */}
          <div className="flex flex-col w-full md:w-1/3 justify-start items-start text-center md:text-left p-4 md:p-6">
            <h1 className="text-2xl text-black font-bold font-sans">SOBRE BRAZCOINS</h1>              
            <h2 className="text-base text-black font-bold text-justify leading-relaxed">
              A BrazCoins é uma empresa inovadora e promissora que foi fundada no ano de 2022. 
              Especializada na produção e personalização de moedas e pins, a empresa traz uma 
              abordagem única e criativa para celebrar conquistas, reconhecimento e pertencimento.
            </h2>               
          </div>

            {/* Redes sociais */}
          <div className="flex flex-col w-full md:w-1/3 justify-center items-center text-center md:text-center p-4 md:p-6">
           <h1 className="text-2xl text-black font-bold font-sans">REDES SOCIAIS</h1>
            <div className="flex flex-row justify-start items-start gap-4 p-5">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-10 h-10 md:w-12 md:h-12"></img> 
              <img src="/instagram.svg" alt="Instagram" className="w-10 h-10 md:w-12 md:h-12" /> 
              <img src="/Youtube.png" alt="YouTube" className="w-10 h-10 md:w-16 md:h-12" /> 
            </div>
          </div>

          {/* Atendimento */}
          <div className="flex flex-col w-full md:w-1/3 justify-end items-end text-right md:text-right p-4 md:p-6">
            <h1 className="text-2xl text-black font-bold font-sans">FALA CONOSCO</h1>              
            <h2 className="text-base text-black font-bold leading-relaxed">
              <span className="block">Segunda a Sexta: 8h às 18h</span>
              <span className="block">Sábado: 9h às 12h</span>
              <span className="block">Não somos uma loja física!</span>
              <span className="block">Entre em contato diretamente pelo WhatsApp!</span>
            </h2>              
          </div>



        </div>



        <footer className="flex justify-center items-center h-10 bg-[#C3AF20]">
          <h1 className="text-black font-bold items-center">© 2025 | Desenvolvido por Ana Caroline | Todos os direitos reservados | CNPJ: 00.000.000/0000-00 </h1>
        </footer>

    </div>
  );
}