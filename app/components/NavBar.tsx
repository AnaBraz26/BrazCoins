export default function NavBar() {
    return(
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
    );
}
