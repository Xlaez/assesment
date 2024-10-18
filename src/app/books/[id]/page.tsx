"use client"
import { BookCover } from "@/app/assets";
import { Books, Footer, Header } from "@/components";
import { books, IBook } from "@/helpers";
import { ArrowRightCircleIcon, CheckCircleIcon, XCircleIcon, XIcon, } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BookPage: React.FC = ({params}: {params: {id:string}}) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const book = books.find((book: IBook) => book.id === +params.id);

    const router = useRouter();

    return(
        <main className="bg-[#0E131A]">
            <Header/>
        
        {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-pink-100 px-6 pt-3 pb-6 rounded-3xl shadow-lg w-[550px]">
            <div className="flex items-center justify-end">
                <XCircleIcon onClick={closeModal} className="cursor-pointer text-black text-2xl"/>
            </div>

            <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-full border-gray-400 border-r-[1px]">
                    <div className="flex items-center w-full justify-left gap-4">
                        <CheckCircleIcon className="text-purple-600 w-[40px] mr-2"/>
                        <h3 className="text-black text-lg font-bold inline">Added to Cart</h3>
                    </div>

                    <div className="flex items-center mt-4">
                        <Image src={book?.image as StaticImageData} alt="Book Image" className="w-24 h-36 rounded-lg"/>
                    </div>
                </div>

                <div className="flex flex-col gap-4 flex w-full px-5">
                    <div className="mt-4 text-left">
                    <p className="text-2xl font-bold">Cart Subtotal: <span className="text-black">$10.00</span></p>
                    </div>

                    <div className="mt-6 flex flex-col space-y-8">
                    <button className="bg-[#B700E0] text-white py-2 rounded-lg font-semibold">
                        Proceed to Checkout
                    </button>
                    <button className="border border-[#B700E0] text-[#B700E0] py-2 rounded-lg font-semibold">
                        Go to Cart
                    </button>
                </div>
            </div>
            </div>
          </div>
        </div>
      )}

        <div className="px-[5rem] h-full mb-[3rem]">
            <section className="py-8 w-full h-full">
                <Image src={BookCover as StaticImageData} alt="Image" className="object-cover rounded-lg pb-[3rem]"/>

                <div className="flex h-full w-full mb-10">
                    <div className="w-1/5 flex flex-col items-start justify-center gap-3 text-white">
                        <h1>Author</h1>
                        <h2 className="text-[#FFFFFF40]">{book?.author}</h2>
                        <h1>Category</h1>
                        <h2 className="text-[#FFFFFF40] capitalize">{book?.category}</h2>
                        <h1>Date Released</h1>
                        <h2 className="text-[#FFFFFF40]">{book?.date}</h2>
                        <h1>Ratings</h1>
                        <div></div>
                    </div>
                    <div className="w-4/5">
                        <h1 className="text-white pb-5">{book?.title}</h1>
                        <p className="leading-4 text-[#FFFFFF40] pb-4">{book?.body}</p>
                        <p className="text-[#B700E0] pb-4">${book?.price}</p>
                        <button className="bg-[#FFFFFF1C] px-8 py-2 rounded-xl border-[#FFFFFF] text-[#FFFFFF] text-[15px] border-[1px]" onClick={() => setIsOpen(true)}>
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center px-4 py-3  border-[#FFFFFF40] border-b-[1px] border-t-[1px] text-white">
                    <h1 className="text-2xl font-semibold">You may also like</h1>
                    <div className="flex items-center justify-between gap-3">
                    <span>See all</span>
                    <ArrowRightCircleIcon className="text-white cursor-pointer"/>
                    </div>
                </div>
                
                <div className="pt-8 pb-[7rem]">
                    <Books/>
                </div>
            </section>
        </div>

            <Footer/>
        </main>
    )
}

export default BookPage;