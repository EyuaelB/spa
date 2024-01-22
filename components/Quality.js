import { TiHeart, TiUser, TiFace } from "react-icons/ti";
import "/components/quality.css";
import { GoSmiley } from "react-icons/go";


const qualityList = [

    {
        title: "Variety of Care",
        description: "Our Salon is unique among other Spas, all thanks to an insurmountable variety of skin care and relaxation choices.",
        icon: <GoSmiley className="z-50 text-white h-10 w-10 m-auto "/> 
    },
    {
        title: "Qualified Staff",
        description: "Our Salon is unique among other Spas, all thanks to an insurmountable variety of skin care and relaxation choices.",
        icon: <GoSmiley className="z-50 text-white h-10 w-10 m-auto "/> 

    },
    {
        title: "Relaxation Centric",
        description: "Our Salon is unique among other Spas, all thanks to an insurmountable variety of skin care and relaxation choices.",
        icon: <GoSmiley className="z-50 text-white h-10 w-10 m-auto "/> 

    },
    {
        title: "Reasonable Costs",
        description: "Our Salon is unique among other Spas, all thanks to an insurmountable variety of skin care and relaxation choices.",
        icon: <GoSmiley className="z-50 text-white h-10 w-10 m-auto "/> 

    },

]


export default function Quality() {
  return (
    <section className="py-20 flex flex-col justify-center items-center">
      <div class="hb-sectionhead mb-50">
        <div class="hb-sectiontitle">
          <h2>
            <span>Spa Center</span>
            Quality
          </h2>
        </div>
      </div>
      
      
      <div className="w-[75%]">

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:lg:grid-cols-4  justify-items-center gap-4">

        
      {
      qualityList.map((quality, i) => (
        <div key={i} className="flex flex-col gap-4 text-center justify-center items-center  ">
            
            <div  className="grad  w-[7rem] h-[7rem]  rounded-full flex items-center justify-center ">
                <div className="grad w-[6rem] h-[6rem] border border-dashed rounded-full flex justify-items-center   "> 


                {/* <div  className="grad   ">
                <div className="grad  "> */}

                    {quality.icon}


                </div>


            </div>

            <div><h3 className=" font-semibold text- ">{quality.title}</h3></div>

            <div className="">
            <p>
                    {quality.description}
                  </p>
                
               </div>
        </div>

))}
      </div>

      </div>


    </section>
  );
}
