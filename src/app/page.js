import Image from "next/image";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import "./globals.css";
export default function Home() {
  return (
    // <div className=" h-full w-full bg-contain bg-center ">
    //   <div className="flex flex-col text-white  ">
    //     <div className="bg-[#101420] md:px-24 flex flex-row overflow-visible">
    //       <div className="inline-block align-middle">
    //         <h1 className="font-extrabold text-4xl md:text-7xl">
    //           IWAN Design House
    //         </h1>
    //         <div className="pt-4 md:pl-28">
    //           <p className="text-base md:text-lg lg:w-[32.75rem]">
    //             IWAN Design House is a premier architectural firm dedicated to
    //             creating innovative and sustainable designs. We specialize in
    //             crafting spaces that blend functionality with aesthetics,
    //             delivering architectural, urban, and landscape solutions that
    //             transform environments and inspire communities.
    //           </p>
    //         </div>
    //       </div>
    //       <div>
    //         <img
    //           src="/assets/images/Home_vector.png"
    //           className="w-[37rem] h-[34.688rem] "
    //         />
    //       </div>
    //     </div>

    //     <div className="bg-[#070F0F] h-screen">
    //       <div className="pt-14 flex flex-row gap-[2.063rem]">
    //         <img
    //           src="/assets/images/image_1.png"
    //           className=""
    //           alt="Description"
    //         />

    //         <div className="pt-7  flex ">
    //           <p className=" md:text-lg lg:w-[32.75rem] h-[11.5rem] flex align-middle">
    //             IWAN Design House is a premier architectural firm dedicated to
    //             creating innovative and sustainable designs. We specialize in
    //             crafting spaces that blend functionality with aesthetics,
    //             delivering architectural, urban, and landscape solutions that
    //             transform environments and inspire communities.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full h-full">
      <div className="relative w-full h-full md:h-[34.688rem] bg-[#101420] flex flex-col md:flex-row">
        <div className="flex-1 md:pl-24 p-6 mt-7 md:mt-7 text-white">
          <h1 className="font-extrabold text-4xl md:text-7xl whitespace-nowrap md:m-0">
            {/* Reset margins */}
            IWAN Design House
          </h1>
          <p className="mt-2 ml-4 text-base md:text-lg md:ml-28 md:mt-8 text-[#9f9e9e] m-0 font-aboreto">
            {/* Reset margins */}
            IWAN Design House is a premier architectural firm dedicated to
            creating innovative and sustainable designs. We specialize in
            crafting spaces that blend functionality with aesthetics, delivering
            architectural, urban, and landscape solutions that transform
            environments and inspire communities.
          </p>
        </div>
        <div className="flex justify-center md:w-1/2 md:h-[34.688rem]">
          <img
            src="/assets/images/Home_vector.png"
            className="w-full max-w-[37rem] h-auto"
            alt="Home Vector"
          />
        </div>
      </div>

      <div className="bg-[#070F0F] h-screen md:h-screen pt-14  ">
        <div className="md:relative md:bottom-44">
          <div className="flex flex-col md:flex-row gap-8 p-6">
            <div className="flex-1 flex justify-center  ">
              <img
                src="/assets/images/image_1.png"
                alt="Description"
                className="max-w-full h-auto  "
              />
            </div>
            <div className="flex-1 flex items-center relative top-9  ">
              <div className="flex flex-col">
                <p className="text-base md:text-lg  text-[#9f9e9e] h-auto font-aboreto">
                  IWAN Design House offers a comprehensive range of services,
                  including architectural design, interior design, urban
                  planning, And landscape design solutions. Our holistic
                  approach ensures every project is tailored to meet our
                  clients' needs, combining creativity with precision to deliver
                  exceptional results from concept to completion. 4o
                </p>
                <div className="flex md:flex-row flex-col gap-3 mt-3">
                  <a
                    className="btn btn-active w-48"
                    download
                    href="/assets/Portfolio.pdf"
                  >
                    Portfolio <FileDownloadIcon />
                  </a>
                  <a
                    className="btn btn-active w-48 "
                    download
                    href="/assets/company_profile.pdf"
                  >
                    Company Profile <FileDownloadIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
