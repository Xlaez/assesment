import {TwitterIcon, InstagramIcon, FacebookIcon, LinkedinIcon} from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
    return(
        <footer className="flex bg-gray-900 text-white px-[3rem] py-[3rem] justify-between space-x-[4rem]">
            <div className="flex flex-col gap-4 justify-start w-full">
                <h1 className="font-bold text-2xl">LOGO</h1>
                <div className="social-icons flex items-center justify-start gap-5">
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <LinkedinIcon/>
                    <FacebookIcon/>
                </div>
                <span className="pl-5">Privacy policy</span>
                <span>Terms and Conditions</span>
            </div>

            <div className="flex justify-between w-full">
                <ul className="sec1 flex flex-col gap-4">
                    <li><Link href="">Home</Link></li>
                    <li><Link href="">About</Link></li>
                    <li><Link href="">Category</Link></li>
                </ul>

                <ul className="sec1 flex flex-col gap-4">
                    <li><Link href="">Health</Link></li>
                    <li><Link href="">Lifestyle</Link></li>
                    <li><Link href="">Business</Link></li>
                </ul>

                 <ul className="sec1 flex flex-col gap-4">
                    <li><Link href="">Contact Us</Link></li>
                    <li><Link href="">Subscribe</Link></li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;