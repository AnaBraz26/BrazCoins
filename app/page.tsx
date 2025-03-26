"user client";

import React from "react";
import NavBar from "./components/NavBar";

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
        <div className="flex justify-between items-center h-150 bg-[#C3AF20]">
        
        </div>

        {/* sobre Brazcoins */}
        <div className="flex justify-between items-center h-150 bg-[#FFFFFF]">

        </div>

        {/* serviços prestados */}
        <div  className="flex justify-between items-center h-150 bg-[#C3AF20]">

        </div>

        {/* quem já comprou diz */}
        <div  className="flex flex-col justify-between items-center h-100 bg-[#FFFFFF]">
          
          <div className="flex py-6 items-center justify-between">
              <h1 className="text-4xl text-black font-bold font-sans">REDES SOCIAIS</h1>
          </div>

          <div className="flex flex-row gap-4">
              
          </div>
        </div>

        <div className="border-b-3 border-black flex justify-between items-start h-60 bg-[#C3AF20] px-20 py-10">
          
          {/* Sobre BrazCoins */}
          <div className="flex flex-col w-1/3 justify-start items-start p-4">
            <h1 className="text-2xl text-black font-bold font-sans">SOBRE BRAZCOINS</h1>              
            <h2 className="text-base text-black font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod tincidunt id laoreet dolor.
            </h2>               
          </div>

          {/* Atendimento */}
          <div className="flex flex-col w-1/3 justify-start items-start p-4">
            <h1 className="text-2xl text-black font-bold font-sans">FALA CONOSCO</h1>              
            <h2 className="text-base text-black font-bold">
              Segunda a Sexta: 8h às 18h <br />
              Sábado: 9h às 12h <br />
              <br />
              Entre em contato diretamente pelo Whatsapp!
            </h2>              
          </div>
          
          {/* Redes Sociais */}
          <div className="flex flex-col items-center w-1/3 justify-center items-start p-4"> 
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-2xl text-black font-bold font-sans">REDES SOCIAIS</h1>
            </div>

            <div  className="flex flex-row items-center gap-4 p-5">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-15 h-15" />
              <img src="/instagram.svg" alt="Instagram" className="w-15 h-15" /> 
            </div>

          </div>         
        </div>

        <footer className="flex justify-center items-center h-10 bg-[#C3AF20]">
          <h1 className="text-black font-bold items-center">© 2025 | Desenvolvido por Ana Caroline | Todos os direitos reservados | CNPJ: 00.000.000/0000-00 </h1>
        </footer>

    </div>
  );
}