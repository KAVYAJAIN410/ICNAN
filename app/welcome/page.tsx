import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className=" bg-white text-[#0a2240] px-6 py-12 md:px-20 lg:px-40 leading-relaxed text-justify">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Welcome Message
      </h1>
      <p className="mb-4">
      Dear Nano, Micro and Small Enthusiasts & Explorers!!
      </p>
      <p className="mb-4">
        Greetings and welcome to the Centre for Nanotechnology Research (CNR) at Vellore Institute of Technology, Vellore, India.
      </p>
      <p className="mb-4">
        On behalf of the Organizing Committee, it’s a great honour to welcome you to the International Conference on Nanoscience and Nanotechnology (ICNAN 2025), held at CNR, VIT, Vellore, from December 16th to 19th, 2025.
      </p>
      <p className="mb-4">
        ICNAN’25 is your chance to see what the researchers, scientists, and the stalwart industries – are up to in the microscopic world. Participants will engage in discussions regarding cutting-edge research, exploring the impact of nanotechnology on future technological paradigms. Nanotechnology, characterized by the precise control of matter at the atomic and sub-atomic scales, facilitates the development of solutions addressing critical challenges, including energy optimization and the enhancement of electronic device functionality.
      </p>
      <p className="mb-4">
        We are hosting a stellar panellist, plenary, keynote, and invited talks from some truly brilliant minds across the seven seas. And of course, plenty of technical forums to geek out on advanced nanomaterials, energy applications, biosensors, nanomedicine, and more.
      </p>
      <p className="mb-4">
        Presenters, particularly early-career researchers, are invited to showcase their research findings. A dedicated award will recognize outstanding contributions, acknowledging the rigor and innovation inherent in nanoscale investigations.
      </p>
      <p className="mb-4">
        This conference is your golden ticket to explore, collaborate, and discuss the future of nanotechnology. Also, you get to experience the vibrant green atmosphere of VIT, Vellore.
      </p>
      <p className="mb-4">
        We anticipate the presence of all attendees. We trust that your experience at VIT will yield significant intellectual insights and contribute to impactful advancements in nanoscale science and technology.
      </p>
      <p className="mt-8 font-semibold">
        Looking forward to seeing you all!
        <br />
        <br />
        Best Wishes,
        <br />
        <span className="block">Convener, ICNAN 2025</span>
      </p>
    </div>
  );
};

export default Welcome;
