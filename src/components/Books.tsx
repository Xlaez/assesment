import { Book as Book0, Book1, Book2, Book3 } from "@/app/assets";
import Image, { StaticImageData } from "next/image";

export interface IBook {
    image: StaticImageData,
    title: string,
    category: string,
    author: string,
    price: string,
}
const books: IBook[] = [
    {
        image: Book0,
        title: "Really good, actually",
        category: "romance",
        author: "John Doe",
        price: "30.50"
    },
     {
        image: Book1,
        title: "James and the giant peach",
        category: "children",
        author: "John Doe",
        price: "30.50"
    },
     {
        image: Book2,
        title: "A coastline is an immeasurable thing",
        category: "african literature",
        author: "John Doe",
        price: "30.50"
    },
     {
        image: Book3,
        title: "The training of the shrew",
        category: "thriller",
        author: "John Doe",
        price: "30.50"
    },
    {
        image: Book1,
        title: "James and the giant peach",
        category: "children",
        author: "John Doe",
        price: "30.50"
    },
    {
        image: Book0,
        title: "Really good, actually",
        category: "romance",
        author: "John Doe",
        price: "30.50"
    },
]

const Book: React.FC<{book: IBook}> = ({book}) => {
    return (
        <div className="">
            <Image src={book.image} width={100} height={100} className="w-[150px] h-[230px]" alt="book"/>
            <div className={`gap-2 flex-col max-w-[150px] ${book.category == "romance" && "text-[#B700E0]"} ${book.category == "children" && "text-[#EA323E]"} ${book.category == "african literature" && "text-[#0068E0]"} ${book.category == "thriller" && "text-[#EF7D00]"}`}>
                <h1 className={`uppercase text-[0.8rem] pt-2`}>{book.category}</h1>
                <strong>{book.title}</strong>
                <div className="py-3">
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