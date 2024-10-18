import { Books, Categories, Footer, Header } from "@/components";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0E131A]">
      <Header/>
      <Categories/>
      <Books/>
      <Newsletter/>
      <Footer/>
    </main>
  );
}
