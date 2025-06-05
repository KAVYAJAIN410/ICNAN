export default function Enquiry() {
    return (
      <>
      <section>
      <h1 className='m-7'>
          <span className="text-[#0a2240] text-3xl m-4" style={{fontWeight:"bolder"}}>CONTACT DETAILS</span> 
        </h1>
        <div></div>
        <div className="md:flex">
        <div>
        <p className=" text-lg  leading-tight mt-4 pl-10 font-bold">Dr. A Nirmala Grace</p>
        <p className=" text-lg  leading-tight  pl-10">Director, Organising Chair</p>
        <p className=" text-lg  leading-tight  pl-10">Email: director.cnr@vit.ac.in</p>
        </div>

        <div>
        <p className=" text-lg  leading-tight mt-4 pl-10 font-bold">Dr. R. Vimala</p>
        <p className=" text-lg  leading-tight  pl-10">Conference Chair</p>
        <p className=" text-lg  leading-tight  pl-10">Email: Vimala.r@vit.ac.in</p>
        </div>
        </div>
        <div className="mb-6">
        <p className=" text-lg  leading-tight mt-4 pl-10 font-bold ">General Enquiry</p>
        <p className=" text-lg  leading-tight  pl-10">+91 9994882510</p>
        <p className=" text-lg  leading-tight  pl-10">+91 9791322311</p>
        <a href="mailto:cnricnan@vit.ac.in" className="text-lg  leading-tight  pl-10 ">Email: cnricnan@vit.ac.in</a>

        </div>
      </section>
      </>
    );
  }