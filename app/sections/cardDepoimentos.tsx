import Image from "next/image";

interface depoimentosProps {
  titulo: string;
  texto: string;
//   imgSrc: string;
  nome: string;
  atividade: string;
}

const CardDepoimento: React.FC<depoimentosProps> = ({
  texto,
//   imgSrc,
  nome,
  atividade,
  titulo,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-[#C3AF20]">
      <div className="py-10 px-5 md:py-5 lg:px-10 xl:px-10 items-center flex flex-col rounded-lg">
        <h1 className="text-left text-3xl font-semibold mb-2 text-spaceblue">
                {titulo}
        </h1>
        
        <div className="flex flex-row w-1/2 pb-10 w-full">
        <p className="text-xl text-justify border mr-8 ml-8 mt-5 text-mutedSpaceblue">{texto}</p>     
        <p className="text-xl text-justify border mr-8 ml-8 mt-5 text-mutedSpaceblue">{texto}</p>   
             {/* <Image
                src={imgSrc}
                width={50}
                height={50}
                alt="foto de perfil"
                className="mb-5 rounded-full"
                /> */}              
        </div>        
        <h2 className="font-semibold text-center text-spaceblue ">{nome}</h2>
        <h3 className="text-mutedSpaceblue">{atividade}</h3>
      </div>
    </div>
  );
};

export default CardDepoimento;