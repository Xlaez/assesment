import { HeroImg, HeroImg2, HeroImg3 } from "@/app/assets";
import Image from "next/image";
import { curtive } from "./Fonts";

const Hero: React.FC = () => {
    return(
        <div className="relative w-full h-screen flex justify-center items-center bg-inherit px-[5rem]">
            {/* Background text */}
            <div className={`absolute text-white text-[25rem] font-bold ${curtive.className}`}>
                Featured
            </div>

            {/* Featured card stack */}
            <div className="relative z-10">
                <div className="absolute -left-12 transform rotate-6">
                {/* <div className="w-64 h-96 bg-gray-700 rounded-lg shadow-lg"> */}
                     <Image src={HeroImg3} alt="Water, Wine & Homecoming" className="w-[400px] h-[500px] object-cover rounded-lg shadow-lg"/>
                {/* </div> */}
                </div>
                <div className="absolute -right-12 transform -rotate-6">
                {/* <div className="w-64 h-96 bg-gray-700 rounded-lg shadow-lg"> */}
                     <Image src={HeroImg2} alt="Water, Wine & Homecoming" className="w-[400px] h-[500px] object-cover rounded-lg shadow-lg"/>
                {/* </div> */}
            </div>
            <div className="relative">
                {/* Main card */}
                {/* <div className="w-64 h-96 bg-gray-900 rounded-lg shadow-lg overflow-hidden"> */}
                    <Image src={HeroImg} alt="Water, Wine & Homecoming" className="w-[400px] h-[600px] object-cover rounded-lg shadow-lg overflow-hidden"/>
                    {/* <div className="p-4">
                    <h3 className="text-white text-lg font-bold">
                        Water, Wine & Homecoming
                    </h3>
                    <p className="text-gray-400 text-sm">Amaka Ojo • $39.20</p>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    </div>
    )
}

export default Hero;