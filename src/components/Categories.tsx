import { CrossIcon, ImageIcon, NotebookIcon, SmileIcon } from "lucide-react";

const Card: React.FC<{type: string}> = ({type}) => {
    return(
        <>
            {type == "arts" &&(
                <div className="rounded-lg bg-[#895C8245] p-5 text-[#B700E0] font-normal text-lg flex flex-col space-y-4">
                    <ImageIcon className="text-left"/>
                    <h2>Arts and Photography</h2>
                </div>
            )}
            {
                type == "historical" && (
                    <div className="rounded-lg bg-[#90935E40] p-5 text-[#D8E704] font-normal text-lg flex flex-col space-y-4">
                        <NotebookIcon className="text-left"/>
                        <h2>Historical Romance</h2>
                </div>
                )
            }
              {
                type == "thriller" && (
                    <div className="rounded-lg bg-[#5D4A358A] p-5 text-[#EF7D00] font-normal text-lg flex flex-col space-y-4">
                        <SmileIcon className="text-left"/>
                        <h2>Thriller & Suspense</h2>
                </div>
                )
            }
             {
                type == "health" && (
                    <div className="rounded-lg bg-[#526C6E59] p-5 text-[#24D7E3] font-normal text-lg flex flex-col space-y-4">
                        <CrossIcon className="text-left"/>
                        <h2>Health & Wellness</h2>
                </div>
                )
            }
        </>
    )
};

const categories = ["arts", "historical", "thriller", "health"]

const Categories: React.FC = () => {
    return(
        <div className="w-full py-8 px-3 flex justify-between items-center gap-6">
            {
                categories.map((category, i) => (
                    <Card type={category} key={i}/>
                ))
            }
        </div>
    )
};

export default Categories;