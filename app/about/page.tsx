"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageCarousel } from "../../components/image-carousel"
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useInView, useAnimation } from "framer-motion";



export default function AboutPage() {
  // Sample images for each section (replace with your actual images)
  const icnanImages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  
  const vitImages = [1,2,3,4,5,6,7,8,9,10,12,13,14,15]
  
  const cnrImages = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 text-justify">
     

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">About Us</h1>

        {/* About ICNAN'25 Section */}
        <section className="mb-16" id="ICNAN">
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
                About ICNAN'25
              </h2>

              <div className="mb-8">
              <motion.div
          
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
            {icnanImages.map((i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={`ICNAN_IMAGES/ICNAN19-${i}.jpg`}
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

              </div>

              <div className="space-y-4">
                <p className="text-lg font-semibold">Step into the Nano-Revolution at ICNAN 2025!</p>
                <p>
                  ICNAN 2025 is your portal to the world where the tiniest manipulations lead to the grandest
                  innovations, bringing together a vibrant tapestry of Indian and international minds – students,
                  scientists, engineers, and industry titans – to ignite the next wave of nanoscale breakthroughs.
                </p>
                <p>
                  Dive into a dynamic exchange of ideas, where cutting-edge research meets real-world applications.
                  From fundamentals to advanced sustainable solutions, this conference is a global hub for
                  interdisciplinary collaboration. Witness the explosive growth of nanotechnology across every sector,
                  shaping the future of energy, medicine, environmental science, and electronics.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400 mt-4">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Why ICNAN 2025?</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      <span className="font-semibold">Global Convergence:</span> Connect with leading experts and
                      researchers from around the world, forging collaborations that transcend borders.
                    </li>
                    <li>
                      <span className="font-semibold">Real-World Impact:</span> Explore practical applications of
                      nanoscience and nanotechnology that address critical national needs.
                    </li>
                    <li>
                      <span className="font-semibold">Inspiration & Innovation:</span> Be inspired by plenary lectures,
                      invited talks, and captivating oral and poster presentations showcasing groundbreaking research.
                    </li>
                    <li>
                      <span className="font-semibold">Networking & Collaboration:</span> Forge invaluable connections,
                      expand your professional network, and meet the masterminds shaping the future of nanotechnology.
                    </li>
                    <li>
                      <span className="font-semibold">A launchpad for Progress:</span> contribute to the discussion on
                      current trends and future directions of Nanoscience and Nanotechnology.
                    </li>
                  </ul>
                </div>

                <p className="mt-4">
                  ICNAN 2025 isn't just a conference; it's a catalyst for innovation, a meeting of minds, and a glimpse
                  into the future powered by the nanoscale.
                </p>
                <p className="font-bold text-gray-900 mt-2">Join us and be part of the revolution!</p>
              </div>
            </div>
          </div>
        </section>

        {/* About VIT Section */}
        <section className="mb-16" id="VIT">
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
                About VIT
              </h2>

              <div className="mb-8">
              <motion.div
          
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
            {vitImages.map((i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={`VIT/vit-campus${i}.jpg`}
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
              </div>
               <h2 className="font-bold text-xl mb-2">Discover Vellore Institute of Technology(VIT)</h2>
              <div className="space-y-4">
              <p>The Vellore Institute of Technology (VIT), India, stands as a testament to academic excellence and visionary leadership, founded by its esteemed Chancellor, Dr. G. Viswanathan. Established with a commitment to providing quality education, VIT has steadily risen to prominence on both the national and international stages. Its dedication to pioneering education in engineering and technology has been consistently recognized, culminating in its ranking of 142nd globally and 9th in India in the QS World University Rankings by Subject 2025. This prestigious recognition further highlights the strength of four key disciplines—Computer Science & IT, Data Science & AI, Electrical & Electronics Engineering (EEE), and Material Science—all of which were ranked among the top 200 worldwide in the same assessment.</p>
                <p>VIT's consistent high performance is also reflected in the National Institutional Ranking Framework (NIRF) by the Government of India. In 2024, VIT was recognized as the 10th best University, 13th best research institution, and 11th best engineering institution in the country. Further solidifying its global standing, the Shanghai ARWU ranking 2024 placed VIT 2nd in India and within the 501-600 band globally. Moreover, VIT's commitment to sustainable practices has been acknowledged with a rank of 396th in the world and 8th in India in the QS World University Rankings: Sustainability 2025. The institution also holds the highest NAAC Accreditation with an A++ grade, scoring 3.66 out of 4, attesting to its rigorous quality standards.</p>
                 <p>VIT offers a comprehensive array of academic programs including 71 Undergraduate, 58 Postgraduate, 15 Integrated, 2 Research, and 2 M.Tech Industrial Programmes with robust research opportunities through full-time Ph.D. programs in Engineering and Management, Ph.D. in Science and Languages, and Direct Ph.D. programs in engineering disciplines.</p>
                 <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400 my-4">
                  <p className="italic text-gray-700">
                    "VIT is more than just an educational institution; it is a dynamic ecosystem where global ambition
                    intersects with nano-scale innovation, where cutting-edge research fuels real-world solutions, and
                    students are empowered to become leaders in an interconnected world."
                  </p>
                </div>
                  <p> VIT's global outlook is evidenced by its strong international presence and partnerships with over 500 foreign universities. This extensive network provides invaluable platforms for students and faculty to engage with international experts, fostering collaboration on cutting-edge technologies.</p>

         
                <p>
                  For further details, please visit <a href="https://vit.ac.in/" className="text-blue-500">https://vit.ac.in/</a>
                </p>
                  
           
                
                
              </div>
            </div>
          </div>
        </section>

        {/* About CNR Section */}
        <section className="mb-16" id="cnr">
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
                About CNR
              </h2>

              <div className="mb-8">
              <motion.div
          
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
            {cnrImages.map((i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={`ICNAN_IMAGES/cnr${i}.jpg`}
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
              </div>

              <div className="space-y-4">
                <p className="text-lg font-semibold">
                  Centre for Nanotechnology Research, VIT Vellore: Pioneering the Future of Printed and Flexible
                  Nanotechnology for a Sustainable Future
                </p>
                <p>
                  Established in June 2008, the Centre for Nanotechnology Research (CNR) at Vellore Institute of
                  Technology has rapidly emerged as a leading hub for cutting-edge research in nanotechnology. CNR's
                  research philosophy is rooted in a commitment to both fundamental and applied science.
                </p>
                <p>
                  Operating at the confluence of materials science, electronics, and biomedicine, the centre's vision,
                  "To lead as a Centre of Excellence - Integrate, and deliver interdisciplinary research and provide
                  solutions in Printed and Flexible devices for energy, sensors and healthcare," reflects its
                  dedication to translating scientific discoveries into tangible societal benefits.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400 mt-4">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Key Scientific Strengths of CNR:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      <span className="font-semibold">Focused Research Domain:</span> CNR specializes in printed and
                      flexible electronics, a rapidly evolving field with applications in renewable energy harvesting,
                      advanced sensor technologies, and personalized healthcare solutions.
                    </li>
                    <li>
                      <span className="font-semibold">Interdisciplinary Expertise:</span> The centre's unique operating
                      model integrates expertise from various scientific disciplines, enabling the development of complex,
                      multi-functional nanodevices.
                    </li>
                    <li>
                      <span className="font-semibold">State-of-the-Art Infrastructure:</span> CNR is well equipped with
                      advanced instrumentation for nanomaterial synthesis, characterization (including microscopy,
                      spectroscopy, and electrical measurements), and computational simulations, facilitating rigorous
                      scientific inquiry.
                    </li>
                    <li>
                      <span className="font-semibold">National and International Collaborations:</span> CNR maintains
                      strong partnerships with leading nanotechnology experts worldwide, fostering knowledge exchange and
                      collaborative research projects.
                    </li>
                    <li>
                      <span className="font-semibold">Emphasis on Societal Impact:</span> The centre's research is aligned
                      with national priorities, focusing on areas such as sustainable energy, environmental monitoring,
                      and advanced medical diagnostics.
                    </li>
                    <li>
                      <span className="font-semibold">Consultancy and Technical Support:</span> CNR provides expert
                      consultancy services in nanomaterials characterization, extending its expertise to academic
                      institutions and industries.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        {/* <div className="text-center mt-12 mb-8">
          <Link
            href="/register"
            className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white font-bold py-3 px-10 rounded-md transition duration-300 shadow-md"
          >
            Register for ICNAN'25
          </Link>
        </div> */}
      </main>

      
    </div>
  )
}
