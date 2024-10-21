import { Books, Footer, Header } from "@/components";
import { books } from "@/helpers";
import { StarIcon, TrashIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";


const Checkout : React.FC = () => {

    const book = books[1];
    const bookTwo = books[3];

    return(
        <main className="bg-[#0E131A]">
            <Header/>
            <div className="flex py-8 px-[5rem] text-white mb-8">
                <div className="w-3/5 flex flex-col">
                    <div className="flex flex-col gap-6 border-gray-300 border-r">

                        <div className="flex items-center justify-between pr-10">
                            <h1 className="font-semibold text-3xl">Shopping Cart</h1>
                            <h3 className="font-semibold text-xl">Price</h3>
                        </div>

                        <div className="flex flex-col border-[#FFFFFF40] border-b pr-10">
                            <div className="flex justify-between pb-4">
                                <div>
                                    <Image src={book?.image as StaticImageData} alt="Image"/>
                                </div>
                                <div>
                                <div className="mb-12">
                                        <h1 className="text-xl text-[#B700E0] pb-3">{book?.title}</h1>
                                        <p className="text-white pb-1">By {book?.author}</p>
                                        <small className="text-[#0068E0]">In Stock</small>
                                </div>
                                <div className="flex justify-between items-center">
                                    

                                        <div className="gap-2 flex items-center justify-between">
                                            <TrashIcon/>
                                        <p className="text-[#0068E0]">Move to favorites</p>
                                        </div>
                                </div>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-white text-2xl">${book?.price}</p>
                                </div>
                            </div>
                        </div>

                         <div className="pr-4">
                            <div className="flex items-center justify-between">
                                <div></div>
                                <div className="flex items-center justify-end gap-8 pb-6 pr-6">
                                    <h3>Subtotal</h3>
                                    <p className="font-semibold text-lg">${book.price}</p>
                                </div>
                            </div>

                            <button className="bg-[#B700E0] rounded-lg text-white py-2 w-full">Proceed to Checkout</button>
                         </div>


                    </div>
                </div>

                <div className="w-2/5 px-4 flex h-full">
                    <div className="rounded-3xl p-3 flex flex-col gap-2 bg-[#FFFFFF4F] h-[280px] w-full">
                        <h1>Recently Viewed By You</h1>
                        <div className="flex gap-2">
                            <Image src={bookTwo?.image as StaticImageData} alt="Image" height={220} className="h-[220px]"/>
                            <div className="flex flex-col text-[#0068E0]">
                                <h1 className="uppercase text-lg">{bookTwo?.category}</h1>
                                <p className="pb-3">{bookTwo?.title}</p>

                                <p className="text-white pb-2">{bookTwo?.author}</p>

                                <p className="flex items-center gap-2 pb-2">
                                    <StarIcon className="w-[15px] h-[15px] text-[#0068E0]"/>
                                    <StarIcon className="w-[15px] h-[15px] text-[#0068E0]"/>
                                    <StarIcon className="w-[15px] h-[15px] text-[#0068E0]"/>
                                    <StarIcon className="w-[15px] h-[15px] text-[#0068E0]"/>
                                    <StarIcon className="w-[15px] h-[15px] text-[#0068E0]"/>
                                </p>
                                <p className="text-white pb-9">${bookTwo?.price}</p>

                                <button className="text-white bg-[#B700E0] rounded-lg px-4 py-1 cursor-pointer hover:opacity-7">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
             
              <div className="px-[5rem]">
                <div className="flex justify-between items-center px-4 py-3  border-[#FFFFFF40] border-b-[1px] border-t-[1px] text-white">
                    <h1 className="text-2xl font-semibold">Frequently Bought with: </h1>
                </div>
                
                <div className="pt-8 pb-[7rem]">
                    <Books/>
                </div>
              </div>

            <Footer/>
        </main>
    )
};

export default Checkout;