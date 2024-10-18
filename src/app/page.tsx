import { Books, Categories, Footer, Header } from "@/components";
import { lato } from "@/components/Fonts";
import Newsletter from "@/components/Newsletter";
import { ArrowRightCircleIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className={`bg-[#0E131A] ${lato.className}`}>
      <Header/>
        <section className="px-[3rem] py-6 items-center text-white border-[#FFFFF] border-t-[1px]">
          <div className="flex justify-between items-center px-4 py-1 pb-2 border-[#FFFFFF] border-b-[1px]">
            <h1 className="text-2xl font-semibold">Featured Categories</h1>
            <div className="flex items-center justify-between gap-3">
              <span>See all</span>
              <ArrowRightCircleIcon className="text-white cursor-pointer"/>
            </div>
          </div>
          <Categories/>

           <div className="flex justify-between items-center px-4 py-3  border-[#FFFFFF] border-b-[1px] border-t-[1px]">
            <h1 className="text-2xl font-semibold">Bestselling Books</h1>
            <div className="flex items-center justify-between gap-3">
              <span>See all</span>
              <ArrowRightCircleIcon className="text-white cursor-pointer"/>
            </div>
          </div>
          
          <div className="pt-8 pb-[7rem]">
            <Books/>
          </div>

           <div className="flex justify-between items-center px-4 py-3  border-[#FFFFFF] border-b-[1px] border-t-[1px] mb-5">
            <h1 className="text-2xl font-semibold">Featured Books</h1>
            <div className="flex items-center justify-between gap-3">
              <span>See all</span>
              <ArrowRightCircleIcon className="text-white cursor-pointer"/>
            </div>
          </div>
          
          <div className="pt-8 pb-[7rem]">
            <Books/>
          </div>
        </section>

        <section className="flex flex-col mx-auto justify-center items-center mb-[5rem]">
          <Newsletter/>
        </section>
      <Footer/>
    </main>
  );
}
