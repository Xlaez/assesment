import {CopyIcon, MenuIcon, SearchIcon, ShoppingCartIcon} from "lucide-react"

const Header: React.FC = () => {
    return(
        <nav className="flex bg-[#0E131A] justify-between px-[3rem] py-6 items-center text-white border-[#FFFFFF] border-b-1">
            <div className="">
                <CopyIcon/>
            </div>
            <div className="flex items-center justify-between gap-7">
                <SearchIcon className="cursor-pointer"/>
                <ShoppingCartIcon className="cursor-pointer"/>
                <div className="flex items-center gap-2"> <span>Menu</span>
                    <MenuIcon className="cursor-pointer"/>
                </div>
            </div>
        </nav>
    )
};

export default Header;