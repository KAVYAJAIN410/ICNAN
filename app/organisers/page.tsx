import React from 'react';
import Card from "@/components/PatronsCard";
import Image from "next/image";
import chancellor from "@/public/patrons/chancellor.jpg";

import partha from "@/public/assets/patrons/partha.png";

import sankar from "@/public/patrons/parton-pic6.jpg";
import sekar from "@/public/patrons/parton-pic2.jpg";
import selvam from "@/public/patrons/parton-pic5.jpg";
import pradheep from "@/public/assets/patrons/pradheep.png";
import barathi from "@/public/assets/patrons/barathi.jpg";
import sandhya from "@/public/patrons/sandhya.jpg"
import AVP from "@/public/patrons/AVP.jpg"
import kanchana from "@/public/assets/patrons/kanchana.png"

const Page: React.FC = () => {
  return (
    <section className="bg-white pt-20 px-16 min-h-screen font-poppins p-0 m-0  bg-cover bg-center" 
    style={{ backgroundImage: `` }}>
        <center>
      <h1  
        
      >
        <span className="text-[#0a2240] text-5xl" style={{fontWeight:"bolder"}}>ORGANISING COMMITTEE</span> 
      </h1>
      </center>
      <div className="flex flex-col items-center pt-6">
        <h2 className='text-2xl text-[#0a2240]' style={{fontWeight:"bolder"}} >Chief Patron</h2>
        <Card
          name={"Dr. G. Vishwanathan"}
          image={chancellor}
          pos={"Chancellor"}
        />
       
      </div>
      <center><h2 className='text-2xl text-[#0a2240] mt-4' style={{fontWeight:"bolder"}} >Patrons</h2></center>
      <div className="flex flex-wrap justify-center pt-3">
      <Card
          name={"Shri. Sankar Viswanathan"}
          image={sankar}
          pos={"Vice President"}
        />
        
        <Card
          name={"Dr. Sekar Viswanathan"}
          image={sekar}
          pos={"Vice President"}
        />
        <Card name={"Dr. G. V. Selvam"} image={selvam} pos={"Vice President"} />
      
      </div>
      <div className="flex flex-wrap justify-center pt-3">
      <Card
          name={"Dr. Sandhya Pentareddy"}
          image={sandhya}
          pos={"Executive Director"}
        />
         <Card
          name={"Ms. Kadhambari S. Viswanathan"}
          image={AVP}
          pos={"Assistant Vice - President"}
        />
       
      
      </div>
      <center><h2 className='text-2xl text-[#0a2240] mt-4' style={{fontWeight:"bolder"}} >Advisor</h2></center>
      <div className="flex flex-wrap justify-center pt-3">
      
      <Card name={"Dr. V. S. Kanchana Bhaaskaran"} image={kanchana} pos={"Vice President"} />
   
         <Card
          name={"Dr. Partha Sharathi Mallick"}
          image={partha}
          pos={"Pro-Vice Chancellor"}
        />
       
       <Card
          name={"Dr. Jayabarathi T."}
          image={barathi}
          pos={"Registrar"}
        />
      </div>
      <div className="flex flex-wrap justify-center pt-6">
        
      
      </div>
      <center><h2 className='text-2xl text-[#0a2240] mt-4' style={{fontWeight:"bolder"}} >Organising Chair</h2></center>
     <div className='mb-4'>
      <h1 className="text-center text-lg font-bold leading-tight mt-4">Prof. (Dr.) A. Nirmala Grace</h1>
      <h1 className="text-center text-md font-bold leading-tight mt-1">Director</h1>
    
      </div>
     
      <center><h2 className='text-2xl text-[#0a2240] mt-7' style={{fontWeight:"bolder"}} >Conference Chair</h2></center>
     <div className='mb-4'>
      <h1 className="text-center text-lg font-bold leading-tight mt-4">Prof. (Dr.) R. Vimala</h1>
      
      </div>

      <center><h2 className='text-2xl text-[#0a2240] mt-7' style={{fontWeight:"bolder"}} >Conveners</h2></center>
     <div className='mb-4'>
      <h1 className="text-center text-lg font-bold leading-tight mt-4">Prof. (Dr.) George Jacob</h1>
      <h1 className="text-center text-lg font-bold leading-tight mt-4">Prof. (Dr.) Ashutosh Mahajan</h1>
      
      </div>

      <center><h2 className='text-2xl text-[#0a2240] mt-7' style={{fontWeight:"bolder"}} >Co-Conveners</h2></center>
     <div className='mb-4'>
      <h1 className="text-center text-lg font-bold leading-tight mt-4">Prof. (Dr.) Raja Sellappan</h1>
      <h1 className="text-center text-lg font-bold leading-tight mt-4">Prof. (Dr.) Krishnamoorthi C.</h1>
      <h1 className="text-center text-lg font-bold leading-tight mt-4">Prof. (Dr.) Niroj Kumar Sahu</h1>
      <h1 className="text-center text-lg font-bold leading-tight mt-4">Prof. (Dr.) Anand S.</h1>
      <h1 className="text-center text-lg font-bold leading-tight mt-4">Prof. (Dr.) Mangaiyarkarasi R.</h1>
      <h1 className="text-center text-lg font-bold leading-tight mt-4">Prof. (Dr.) Swati G.</h1>
      </div>
     
    </section>
  );
};

export default Page;