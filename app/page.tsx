"user client";

import React from "react";
import NavBar from "./components/NavBar";

export default function Home(){
  return(
      
    <div>
        <NavBar></NavBar>

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
        <div  className="flex justify-between items-center h-150 bg-[#FFFFFF]">


        </div>

        <div className="border-b-3 border-black flex justify-center items-center h-60 bg-[#C3AF20]">
          {/* sobre Brazcoins */}
          <div className="flex justify-center px-50">
            
          </div>
          {/* contato */}
          <div className="flex justify-center px-60">
             
          </div>  
          
        </div>

        <footer className="flex justify-center items-center h-10 bg-[#C3AF20]">
          <h1 className="text-black font-bold items-center">© 2025 | Desenvolvido por Ana Caroline | Todos os direitos reservados | CNPJ: 00.000.000/0000-00 </h1>
        </footer>

    </div>
  );
}