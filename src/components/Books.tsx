"use client";
import { books, IBook } from "@/helpers/books";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Book: React.FC<{book: IBook}> = ({book}) => {

    const router = useRouter();

    return (
        <div className="cursor-pointer" onClick={() => router.push(`/books/${book.id}`)}>
            <Image src={book.image} width={100} height={100} className="w-[150px] h-[230px]" alt="book"/>
            <div className={`gap-2 flex-col max-w-[150px] ${book.category == "romance" && "text-[#B700E0]"} ${book.category == "children" && "text-[#EA323E]"} ${book.category == "african literature" && "text-[#0068E0]"} ${book.category == "thriller" && "text-[#EF7D00]"}`}>
                <h1 className={`uppercase text-[0.8rem] pt-2`}>{book.category}</h1>
                <strong>{book.title}</strong>
                <div className="py-2">
                    <small className="text-white">{book.author}</small>
                </div>
                <span className="text-white">${book.price}</span>
            </div>
        </div>
    )
}

const Books: React.FC = () => {
    return (
        <div className="flex items-center justify-between gap-4">
            {
                books.map((book, i) => (
                    <Book book={book} key={i+1}/>
                ))
            }
        </div>
    )
};

export default Books;