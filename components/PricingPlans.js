import "./pricing.css";
import Image from "next/image";
import pricingimg01 from "/assets/images/pricing-img01.jpg";
import pricingimg02 from "/assets/images/pricing-img02.jpg";
import pricingimg03 from "/assets/images/pricing-img03.jpg";
import pricingimg04 from "/assets/images/pricing-img04.jpg";
import Link from "next/link"
import localFont from 'next/font/local'


const pricingPlanList = [
  {
    title: "FAMILY PACK",
    price: 29.99,
    services : ["Nail Cutting", "hair Coloring", "Spa Therapy"],
    img: pricingimg01
  },
  {
    title: "MEDIUM",
    price: 39.99,
    services : ["Nail Cutting", "hair Coloring", "Spa Therapy", "Body Massage"],
    img: pricingimg02

  },
  {
    title: "PREMIUM",
    price: 59.99,
    services : ["Nail Cutting", "hair Coloring", "Spa Therapy", "Body Massage", "Manicure"],
    img: pricingimg03
  },
  {
    title: "ULTIMATE",
    price: 79.99,
    services : ["Nail Cutting", "Hair Coloring", "Spa Therapy", "Body Massage", "Manicure","Pedicure" ],
    img: pricingimg04
  }
]

const arizonia = localFont({ src: '../assets/fonts/Arizonia Regular.woff2' })

export default function PricingPlan() {
  return (
    <section className="py-10">
      <div class="flex flex-row justify-center items-center mx-auto py-8">
        <div class="">
          <div class="flex flex-col">
            <div class="hb-sectionhead mb-50">
              <div class="hb-sectiontitle">
                <h2>
                  <span>Spa Center</span>
                  Our Pricing
                </h2>
              </div>
            </div>
          </div>

          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          
           {pricingPlanList.map((pricing, i) => 
           <div key={i} className="">
              <div  className="hb-pricingbox group">
                <figure class="hb-pricing-img">
                  <Image
                    className=" border-white border-8"
                    src={pricing.img}
                    alt="images description"
                  />
                </figure>
                <div class="pricingcontent">
                  <h3>
                    Medium
                    <span>${pricing.price}</span>
                  </h3>
                  <ul class="list-unstyled hb-pricinglist">
                    {pricing.services.map((service,i)=><li key={i}>{service}</li>)}
               
                  </ul>

                  {/* <div class="hb-btnarea"> */}
                  <a
                    href="#"
                    className=" px-10 py-3 rounded-[30px] group-hover:transition-all group-hover:duration-500 text-white capitalize border-none group-hover:bg-white group-hover:text-[#fac0f9]"
                  >
                    Select Plan
                  </a>

                  {/* <a href="javascript:void(0);" className="hb-btn text-white grad group-hover:bg-white group-hover:text-[#fac0f] changebtn">
                      Select Plan
                    </a>    */}

                  {/* </div> */}
                </div>
              </div>
            </div>
            
            )}

       
          </div>
        </div>
      </div>
    </section>
  );
}
