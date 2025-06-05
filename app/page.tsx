"use client"
import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import useMediaQuery from "@/components/useMediaQuery"
import SpeakerCard2 from "@/components/temp"
import SpeakerCard from "@/components/speaker-card"
import SponsorGrid from "@/components/sponsor-grid"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import ResponsiveTimeline from "@/components/timeline"
import { useRef,useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
}



export default function Home() {
  const isMobile = useMediaQuery("(max-width: 800px)");
    const controls = useAnimation();
    const [cursor,setCursor]=useState(false)
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 }); // 👈 important

      useEffect(() => {
        
        if (inView) {
          controls.start("visible");
        }
      }, [inView, controls]);
      const themes = [
        'Advanced Nanomaterials and Characterization',
        'Carbon and Related Materials',
        'Semiconducting Materials and Devices',
        'Ceramic Materials and applications',
        'Molecular Nanoscience, Catalysis, and Applications',
        'Electronic Inks for Flexible and Printed Electronics',
        'Materials Chemistry and Its Properties',
        'Electrochemical engineering',
        'Electroactive materials and electrocatalysis',
        'Electrochemical energy generation, conversion and storage',
        'Biomaterials',
        'Green Chemistry',
        'Alternative Energy',
        'Surface modification of materials for advanced or engineered applications',
        'Surface Engineering and properties',
        'Hydrogen Generation and Storage',
        'Surface Engineering and properties',
        'Advanced surface science and catalysis',
        'Surface nanotechnology and devices',
        'Nanofluids',
        'Nanomaterials and Devices for: Energy Harvesting (Solar Cells)',
        'Nanomaterials and Devices for: Energy Storage (Supercapacitors, Batteries)',
        'Nanomaterials and Devices for: Energy Conversion (Fuel Cells)',
        'Nanomaterials and Devices for: Environmental Applications (Water Purification, Adsorbents, CO2 Remediation)',
        'Nanomaterials and Devices for: Sensor Technologies',
        'Nanomaterials and Devices for: Food, Agriculture, and Healthcare Applications',
        'Nanomaterials and Devices for: Automotive Applications',
        'Nano-enabled Biomedical Systems and Devices',
        'Nanophotonics and Plasmonics',
        'Magnetic Nanomaterials and Their Applications',
        'Nanocoatings and Surface Modifications',
        'Flexible Electronic Devices',
        'Additive Manufacturing for Energy and Electronic Devices',
        'Nanoelectronics: Modelling, Simulation and Fabrication',
        'Artificial Intelligence and Machine Learning Techniques in Nanotechnology',
        'Density Functional Theory and Molecular Dynamics in Nanotechnology',
        'Quantum Computing Applications in Nanotechnology',
        'AI and ML techniques for Nanotechnology',
      ];
      
      
    
      const journals = [
        'Journal of Nanoscience and Nanotechnology',
        'Advanced Materials and Interfaces',
        'Advanced Nanomaterials (Nanomedicine)',
        'Journal of Nanomaterials and Nanotechnology',
        'Polymer Composites and Nanocomposites',
        'Journal of Nanoscience and Nanotechnology Applications',
      ];
    
   let images=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  return (
    <div className="flex flex-col  min-h-screen bg-white overflow-hidden m-0 p-0 box-border ">
      {/* Navigation Bar */}


      {/* Hero Section */}
      <section className="lg:pl-32  lg:pr-32 relative w-full h-[90vh] lg:h-[70vh] items-center lg:items-start overflow-hidden  ">
  {/* Background layers */}
  <div
    className="absolute inset-0 bg-no-repeat bg-bottom bg-cover"
    style={{ backgroundImage: "url('Ellipse.png')" }}
  ></div>
  <Image
    src="/molecule.png"
    alt="Vector"
    fill
    className="object-cover absolute inset-0 z-10 opacity-80"
  />

  {/* Content */}
  <div className="relative z-20 lg:h-full mt-4 flex flex-col  justify-center lg:flex-row items-center lg:items-start   lg:px-4 lg:py-4 lg:gap-4">
    
    {/* Logo */}
    <div className="">
      <Image
        src="Logo.png"
        alt="Icon"
        width={300}
        height={300}
        className="lg:h-[80%] lg:w-auto lg:object-contain cover "
      />
    </div>

    {/* Center Text Block */}
    <div className=" text-white text-center  items-center">
      <h1 className=" text-[4vh] lg:text-[8vh] font-bold leading-tight" style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}>
        ICNAN '25
      </h1>
      <h2 className=" text-xl lg:text-[3vh] mb-1 whitespace-nowrap">
        3<sup>rd</sup> International Conference on<br />
        Nanoscience and Nanotechnology
      </h2>
      <div className="flex items-center justify-center text-[2vh] mb-1">
        <Clock className="mr-1" />
        <span>December 16-19, 2025</span>
      </div>
      <div className="flex items-center justify-center text-[0.9vh] mb-2">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 font-semibold text-[2vh]">ORGANISED BY</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      <p className="text-sm lg:text-[3vh] mb-2 leading-snug">
        Centre for Nanotechnology Research<br />
        VIT, Vellore, TN, India
      </p>
      <button className="bg-transparent border border-white hover:bg-white/10 text-white px-4 py-1 rounded lg:text-[2vh]">
        Brochure
      </button>
    </div>

    {/* Nobel Section */}
    <div className=" text-white text-center hidden lg:flex flex-col ">
    <h2
  className="font-bold text-[3vh] mb-2 relative inline-block group text-white animate-softGlow   animate-fadeInUp"
  style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}
>
  Meet the Nobel Laureate
  <span className="block h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
</h2>


      <div className="w-full flex justify-center">
      <div className="relative h-[25vh] w-[25vh] aspect-square overflow-hidden rounded-full border-4 border-[#0a2240] hover:scale-105 transition-transform duration-300">
  <Image
    src="MoungiBawendi.png"
    alt="Dr. Moungi Bawendi"
    fill
    className="object-cover"
  />
</div>
</div>
      <div className="bg-white text-black mt-2 p-2 rounded text-[2vh] leading-snug ">
        <h3 className="font-bold">Dr. Moungi Bawendi</h3>
        <p>Massachusetts Institute of Technology, USA

<br />Nobel Laureate in Chemistry (Quantum Dots), 2023</p>
      </div>
    </div>
  </div>
</section>
<center>
<div className="lg:hidden  overflow-hidden max-w-7xl">
                            <div className="flex flex-col lg:flex-row justify-center">
                              <div className="lg:w-2/5 p-6 flex justify-center items-center">
                                <div className="relative w-80 h-80 overflow-hidden rounded-full  border-4transform transition-transform duration-500 hover:scale-105 items-center">
                              
                                  <Image
                                    src={  "MoungiBawendi.png"}
                                    alt=""
                                    fill
                                    className="object-cover rounded-full border-[#0a2240]
"
                                    sizes="(max-width: 740px) 192px, (max-width: 768px) 224px, 256px"
                                    priority={true}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col justify-center p-6 lg:p-8 text-center">
                               
                                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Dr. Moungi Bawendi</h3>
                                <p className="text-[#0a2240] text-2xl mb-4">
                                Lester Wolfe Professor at the Massachusetts Institute of Technology USA
                                <br></br>
                                Nobel Laureate in Chemistry (2023)
                                </p>
                                <p className="text-slate-300 leading-relaxed">

                                    
                                </p>
                              </div>
                            </div>
                          </div>

      
                          </center>



      {/* Countdown Timer */}
    

      <h2 className="text-5xl font-bold text-center mt-8  bold text-[#0a2240]" style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}>IMPORTANT DATES</h2>
      <div className=" md:py-12 md:m-10 ">
      <div className="container mx-auto">
  
        <ResponsiveTimeline />
      </div>
    </div>

      {/* Themes and Journals */}
      
      <section className="py-10 px-4">
      <div className="container w-[100vw]">

{/* Themes Box with Scrolling List */}

<div className="lg:w-[100vw] relative flex justify-center w-[90vw]" >
<div className="">
  <center><h3 className=" text-4xl font-semibold mb-4" style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}>Themes</h3></center>
  <div className="flex justify-center">
  <div className="border rounded-xl  bg-white shadow h-64 relative group overflow-hidden">
  <ul className="animate-verticalScroll group-hover:[animation-play-state:paused] p-2  text-xs md:text-sm text-gray-700">
    {themes.concat(themes).map((theme, index) => (
      <li key={index} className="list-disc list-inside text-xl">{theme}</li>
    ))}
  </ul>
</div>
  </div>
</div>
</div>


{/* Journals Box with Scrolling List */}
{/* <div>
  <h3 className="text-xl font-semibold mb-4 text-center">Journals and Publications</h3>
  <div className="border rounded-xl p-4 bg-white shadow h-64 overflow-hidden relative">
    <ul className="animate-verticalScroll space-y-2 text-sm text-gray-700">
      {journals.concat(journals).map((journal, index) => (
        <li key={index} className="list-disc list-inside">{journal}</li>
      ))}
    </ul>
  </div>
</div> */}

</div>

      
        {/* <div className="flex justify-center gap-4 mt-8">
          <button className="border border-[#0a2240] text-[#0a2240] px-6 py-2 rounded hover:bg-gray-200">
            Full Paper
          </button>
          <button className="border border-[#0a2240] text-[#0a2240] px-6 py-2 rounded hover:bg-gray-200">
            ICNAN Proceedings
          </button>
          <button className="border border-[#0a2240] text-[#0a2240] px-6 py-2 rounded hover:bg-gray-200">
            Oral / Poster
          </button>
        </div> */}
      </section>
      <section
  className="relative bg-cover bg-center bg-no-repeat text-white items-center"

>
{/* 
      
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <h3 className="text-4xl font-bold ">25+</h3>
              <p className="text-sm">
                Participating
                <br />
                Countries
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold ">60+</h3>
              <p className="text-sm">
                Appointed
                <br />
                Speakers
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold ">400+</h3>
              <p className="text-sm">
                Registered
                <br />
                Participants
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold ">525+</h3>
              <p className="text-sm">
                Research
                <br />
                Papers
              </p>
            </div>
          </div>
        </div>
      </section> */}


 
  {/* Overlay to darken the bg a bit if needed */}

  {/* Speakers Section */}
  {isMobile ? <SpeakerCard2 /> : <SpeakerCard />}


    <div className="py-10 px-4 text-[#0a2240]  bg-gradient-to-b from-slate-50 to-slate-100 ">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-8"
          style={{ fontFamily: "Gill Sans Ultra Bold, sans-serif" }}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          ABOUT ICNAN '25
        </motion.h2>

        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 0px (mobile)
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 640px (tablet)
              640: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px (desktop)
              1024: {
                slidesPerView: 3,
              },
            }}
        
            loop={true}
            className="mb-8"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={`About/${i+1}.JPG`}
                    alt={`Conference Image ${i}`}
                    width={400}
                    height={400}
                    className="w-full h-[400px] object-cover" // Consistent size & no compression
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.p
          className="text-xl leading-relaxed  mx-auto text-justify"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
         <span className="font-bold text-gray-400">ICNAN 2025</span> is your portal to the world where the tiniest manipulations lead to the grandest innovations, bringing together a vibrant tapestry of Indian and international minds – students, scientists, engineers, and industry titans – to ignite the next wave of nanoscale breakthroughs.
        </motion.p>
      </div>
    </div>



    <CountdownTimer />
  {/* Sponsors Section */}
  {/* <SponsorGrid /> */}


</section>

    </div>
    
  )
}