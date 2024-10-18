import { lato } from "./Fonts";

const Newsletter: React.FC = () => {
    return(
            <div className="flex flex-col gap-5 text-center">
                <h2 className="text-[#FFFFFF40] text-xl">Newsletter</h2>
                <h1 className="text-2xl text-[#FFFFFF]">Stay Updated with the <br/> Latest News!</h1>
                
                {/*  */}
                     <div className="hidden md:flex md:flex-row md:justify-between rounded-full bg-transparent shadow-md w-full md:w-[500px] lg:w-full border-white border-[1px]">
                {/* Input field */}
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className={`px-6 py-3 text-white bg-transparent placeholder-gray-500 focus:outline-none ${lato.className}`}
                />
                {/* Subscribe Button */}
                <button
                  className={`px-10 py-3 bg-white rounded-full flex gap-3 text-center text-black font-semibold hover:bg-gray-900 hover:text-white ${lato.className}`}
                >
                  Subscribe
                </button>
              </div>
                {/*  */}
            </div>
    )
}
export default Newsletter;