import Image from "next/image"
import Link from "next/link"
// import widgetimg01 from "/assets/images/widget-img01.jpg"
// import widgetimg02 from "/assets/images/widget-img02.jpg"
// import widgetimg03 from "/assets/images/widget-img03.jpg"
// import widgetimg04 from "/assets/images/widget-img04.jpg"
// import widgetimg05 from "/assets/images/widget-img05.jpg"
// import widgetimg06 from "/assets/images/widget-img06.jpg"
import {FaFacebookF, FaTelegram, FaTwitter,  FaGooglePlus, FaYoutube } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs";

import logo from "/assets/images/logo.png"
export default function Footer() {

    return (
      <footer className="flex flex-col w-full   ">
        <div className="sm:md:lg:px-14 px-4 ">
          {/* <div class="container"> */}
          <div className="flex flex-col sm:md:lg:flex-row  sm:md:lg:justify-between gap-y-12 py-4">
            <div class="">
              <div class="flex flex-col gap-y-4 py-4 ">
                <strong class="hb-logo">
                  <a href="javascript:void">
                    <Image loading="lazy" src={logo} alt="" />
                  </a>
                </strong>
                <span class="hb-timeandday">
                  Open hours: 8.00-18.00 Mon-Fri
                </span>

                <ul class="flex flex-row gap-x-4 py-2">
                  <li className="bg-gradient-to-r from-[#aaaaff] via-[#fcbaf8] to-[#aaaaff] rounded-full h-8 w-8 hover:bg-left-bottom">
                    <Link className=" " href="#">
                      <FaFacebookF class="text-white  text-xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="bg-black w-5 h-5 ">
                      <FaTelegram className="text-white text-4xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaTwitter className=" text-white text-4xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaYoutube className=" text-white text-4xl" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="">
              <div class="flex flex-col gap-2">
                <h3 className="font-semibold">CONTACTS</h3>
                <ul class="flex flex-col gap-y-4">
                  <li>
                    <span className="flex flex-col font-semibold text-sm ">
                      001-1234-8888
                      <Link className="text-sm font-light text-[#7a7992]"  href="mailto:info.deercreative@gmail.com">
                        info.deercreative@gmail.com
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className=" flex flex-col gap-y-1 text-sm font-semibold " >
                      Bole Medhaniyalem, Morning Star 3rd Floor<p className="text-sm font-light text-[#7a7992]">Addis Ababa, Ethiopia</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="">
              <div className="flex flex-col gap-2 pb-4">
                <h3 className="font-semibold">Our Newsletter</h3>
                <div class="">
                  <form class="">
                    {/* <fieldset> */}
                      <div className="form-group flex flex-col gap-y-2 items-center">
                        <input
                          type="text"
                          className="focus:border-[#fcbaf8] w-full border-[#7a7992]"
                          placeholder="E-mail"
                        />
                        <button type="submit" className="hb-btn w-1/2">
                          SUBSCRIBE
                        </button>
                      </div>
                    {/* </fieldset> */}
                  </form>
                </div>
                <div class="text-sm text-[#7a7992] mx-auto ">
                  <p>
                    Subscribe to our mailing list to get the updates to your
                    email inbox.
                  </p>
                </div>
              </div>
            </div>

            {/* <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="hb-col hb-widget">
                        <ul className="">
                            <li><a href="javascript:void(0);"><Image src={widgetimg01} alt="image description"/></a></li>
                            <li><a href="javascript:void(0);"><Image src={widgetimg02} alt="image description"/></a></li>
                            <li><a href="javascript:void(0);"><Image src={widgetimg03} alt="image description"/></a></li>
                            <li><a href="javascript:void(0);"><Image src={widgetimg04} alt="image description"/></a></li>
                            <li><a href="javascript:void(0);"><Image src={widgetimg05} alt="image description"/></a></li>
                            <li><a href="javascript:void(0);"><Image src={widgetimg06} alt="image description"/></a></li>
                        </ul>
                    </div>
                </div>
                 */}
          </div>
          {/* </div> */}
        </div>

        <div>
          <div className="flex flex-col text-sm sm:md:lg:flex-row sm:md:lg:justify-between justify-center items-center gap-2 py-6 bg-[#e7e7f2] sm:md:lg:px-14 px-4 ">
            <span className="">Copyright ©{new Date().getFullYear()}</span>
            <ul className=" flex row justify-center items-center gap-x-8 text-black">
              <li>
                <a className="text-black" href="#">
                  About{" "}
                </a>
              </li>
              <li>
                <a className="text-black" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="text-black" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-black" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
}