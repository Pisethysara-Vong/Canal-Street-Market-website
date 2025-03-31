import DiagonalLinesComponent from "./diagonalLine"
import {GoMail} from "react-icons/go"
import { SlSocialFacebook } from "react-icons/sl";
import { LiaInstagram } from "react-icons/lia";

const Footer = () => {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };
    const mailTo = (email: string) => {
        window.location.href = `mailto:${email}`;
    }
  return (
    <div className="md:mt-16 mt-12">
        <DiagonalLinesComponent />
        <div className="md:grid md:grid-flow-col md:grid-cols-3 md:gap-14 gap-6 flex flex-col justify-center items-center md:mt-16 mt-12">  
            <div onClick={() => mailTo("info@canalstreet.market")} className="border-2 border-dashed flex flex-col w-full items-center justify-center md:py-16 py-8 gap-2 cursor-pointer">
                <div>
                    <GoMail className="md:text-4xl text-2xl"/>
                </div>
                <div className="text-center md:text-xl text-[15px] md:w-full w-1/4 options-text">Email</div>
            </div>
            <div onClick={() => handleClick("https://www.facebook.com/canalstreetmarket")} className="border-2 border-dashed flex flex-col w-full items-center justify-center md:py-16 py-8 gap-2 cursor-pointer">
                <div>
                <SlSocialFacebook className="md:text-4xl text-2xl"/>
                </div>
                <div className="text-center md:text-xl text-[15px] md:w-full w-1/4 options-text">Follow us on Facebook</div>
            </div>
            <div onClick={() => handleClick("https://www.instagram.com/canalstreetmarket/")} className="border-2 border-dashed flex flex-col w-full items-center justify-center md:py-16 py-8 gap-2 cursor-pointer">
                <div>
                <LiaInstagram className="md:text-4xl text-2xl"/>
                </div>
                <div className="text-center md:text-xl text-[15px] md:w-full w-1/4 options-text">Follow us on Instagram</div>
            </div>
        </div>
        <div className="border-2 border-dashed md:mt-12 md:gap-12 gap-8 mt-8 flex md:flex-row md:justify-normal w-full p-8 items-center justify-center flex-col options-text">
            
            <div className="md:w-1/3 w-full md:text-2xl md:text-left text-center">Stay up to date with our newsletter</div>
            <div className="md:w-2/3 w-full border-2 border-black">
                <form className="flex items-center">
                    <input className=" w-full px-8 py-4 border-none outline-none md:text-xl placeholder-black" type="email" placeholder="Email" required />
                    <div className="flex items-center justify-center mr-8 cursor-pointer">
                        <svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9999 11.9999H20.9999M20.9999 11.9999L17 8M20.9999 11.9999L17 15.9999M9 12H9.01M6 12H6.01M3 12H3.01" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    
                </form>
            </div>
        </div>
        <div className="flex md:flex-row md:flex-nowrap flex-wrap w-full justify-between md:mt-6 mt-4 options-text">
            {/* Copyright */}
            <div className="md:order-1 order-3 md:w-full w-1/2 md:text-left text-right text-[15px]">
                Copyright Canal Street Market 2024
            </div>

            {/* Vendor Login and Privacy Policy */}
            <div className="md:order-2 order-1 flex justify-between w-full md:mb-0 mb-4 text-[15px] ">
                <div onClick={() => handleClick("https://canalstreet.market/privacy-policy/")} className="underline cursor-pointer">Privacy Policy</div>
                <div onClick={() => handleClick("https://canal-street-dashboard.herokuapp.com/login")} className="underline cursor-pointer">Vendor Login</div>
            </div>

            {/* Site by Ysara */}
            <div className="md:order-3 order-2 md:w-full w-1/2 md:text-right text-[15px]">
                Site by Ysara
            </div>
        </div>

    </div>
  )
}

export default Footer