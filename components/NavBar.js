import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTelegram,
  FaTwitterF,
  FaTiktokF,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
export default function NavBar() {

  return (
    <div className="flex flex-col relative">
      
      <div className="flex  bg-gradient-to-r from-[rgba(170,170,255,1)] to-[rgba(251,186,248,1)] py-4 justify-around">
        


        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 ">
        
          <div className="text-white text-[14px] flex flex-row items-center gap-x-1 transition-all duration-500 ease-in-out">
          
          <FaPhone className="text-[14px]"/>
          +251923022027
        </div>
        
        <div className="text-white text-[14px] flex flex-row gap-x-1 items-center transition-all duration-500 ease-in-out">
          
        <FaEnvelope />
          <a href="#" className="text-white hover:text-black"> segenetbeautyandspa@gmail.com</a>
        </div>

      

        </div>




        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-justify   ">
        
        
        <div className="text-white text-[14px] transition-all duration-500 ease-in-out pr-4 border-r border-white">
          Open Hours - 8:00 - 18:00, Mon-Fri           
          
          {/* <span className="hidden md:visible"> | </span> */}


        </div>

      <div className="text-white text-sm transition-all duration-500 ease-in-out inline-flex m-0 ">
          <a href="#" ><FaFacebookF className="fill-white hover:fill-black"/></a>
          <a href="#" ><FaTelegram className="fill-white hover:fill-black"/></a>
          <a href="#" ><FaFacebookF className="fill-white hover:fill-black"/></a>


{/* 
          <a href="#" className="text-white hover:text-black">T</a>
          <a href="#" className=" text-white hover:text-black"></a>
          <a href="# " className="text-white hover:text-black">T</a> */}
        </div>

        {/* <div className="text-white text-[14px] gap-x-2 transition-all duration-500 ease-in-out">
          
          <a href="#" className="text-white hover:text-black">F</a>
          <a href="#" className="text-white hover:text-black">T</a>
          <a href="#" className=" text-white hover:text-black">G</a>
          <a href="# " className="text-white hover:text-black">T</a>
        </div>  */}

        </div>

      </div>

      <div className="sticky top-0  flex flex-col md:flex-row  gap-4 py-6 md:justify-around">
        <h1 className="text-xl semibold">Paradise</h1>
        <div>
          <ul className="flex flex-col gap-4 md:flex-row">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>Search</div>
      </div>
    </div>
  );
      
}

