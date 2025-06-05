"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Conference themes organized by categories
const themeCategories = [
  {
    id: "materials",
    name: "Materials & Characterization",
    themes : [
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
    ],
  },
 
]

// Images for the gallery section
const themeImages = [
  { id: 1, alt: "Nanomaterials visualization", category: "materials" },
  { id: 2, alt: "Thin film deposition process", category: "materials" },
  { id: 3, alt: "Solar cell nanomaterials", category: "applications" },
  { id: 4, alt: "Nanoscale sensors", category: "applications" },
  { id: 5, alt: "Quantum computing visualization", category: "advanced" },
  { id: 6, alt: "AI in nanotechnology", category: "advanced" },
  { id: 7, alt: "Nanophotonics research", category: "advanced" },
  { id: 8, alt: "Biomedical nanosystems", category: "applications" },
  { id: 9, alt: "Biomedical nanosystems", category: "applications" },
  { id: 10, alt: "Biomedical nanosystems", category: "applications" },
  { id: 11, alt: "Biomedical nanosystems", category: "applications" },
  { id: 13, alt: "Biomedical nanosystems", category: "applications" },
  { id: 14, alt: "Biomedical nanosystems", category: "applications" },
  { id: 15, alt: "Biomedical nanosystems", category: "applications" },
  { id: 16, alt: "Biomedical nanosystems", category: "applications" },
  { id: 17, alt: "Biomedical nanosystems", category: "applications" },
  { id: 18, alt: "Biomedical nanosystems", category: "applications" },
  { id: 19, alt: "Biomedical nanosystems", category: "applications" },

]

export default function ThemesPage() {
  const [activeCategory, setActiveCategory] = useState("materials")
  const themesRef = useRef(null)
  const galleryRef = useRef(null)
  const themesControls = useAnimation()
  const galleryControls = useAnimation()
  const isThemesInView = useInView(themesRef, { once: false, amount: 0.2 })
  const isGalleryInView = useInView(galleryRef, { once: false, amount: 0.2 })

  // Animate sections when they come into view
  useEffect(() => {
    if (isThemesInView) {
      themesControls.start("visible")
    }
    if (isGalleryInView) {
      galleryControls.start("visible")
    }
  }, [themesControls, galleryControls, isThemesInView, isGalleryInView])

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-950 text-white">
      {/* Animated Hexagon Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10 z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `hsl(${Math.random() * 60 + 200}, 70%, 50%)`,
              animationDuration: `${Math.random() * 30 + 20}s`,
              animationDelay: `${Math.random() * 5}s`,
              animation: "float infinite ease-in-out alternate",
              opacity: 0.3,
            }}
          />
        ))}
      </div>

   

  

      {/* Themes Section */}
      <section ref={themesRef} className="container mx-auto py-16 relative z-10 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={themesControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          <span className="text-primary">Themes</span>
        </motion.h2>

        <Tabs defaultValue="materials" onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid grid-cols-3 max-w-2xl mx-auto mb-8 hidden">
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Techniques</TabsTrigger>
          </TabsList>

          {themeCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <motion.div
                
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
               
              >
                <Card className="bg-navy-800/40 backdrop-blur-sm border-none hover:bg-navy-800/60 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">
  Nanomaterials and Devices for:
</h3>
<ul className="list-disc ml-5">
  <li className="p-2">Energy Harvesting (Solar cells,Nanogenerators & and self-powered device — triboelectric, piezoelectric and thermoelectric)</li>
  <li className="p-2">Energy Storage (Supercapacitors, Batteries)</li>
  <li className="p-2">Energy Conversion (Fuel Cells)</li>
  <li className="p-2">Environmental Applications (Water Purification, Adsorbents, CO₂ Remediation)</li>
  <li className="p-2">Sensor Technologies</li>
  <li className="p-2">Food, Agriculture, and Healthcare Applications</li>
  <li className="p-2">Automotive Applications</li>
</ul>

                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {category.themes.map((theme, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="bg-navy-800/40 backdrop-blur-sm border-none hover:bg-navy-800/60 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-primary">{index + 2}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2">{theme}</h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                
              </motion.div>
              
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Visual Gallery Section */}
      <section ref={galleryRef} className="container mx-auto py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={galleryControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12"
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nanoscience <span className="text-primary">Visualized</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the fascinating world of nanoscience and nanotechnology through these visual representations
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={galleryControls}
          variants={{
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {themeImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={galleryControls}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                  },
                },
              }}
              className="relative group overflow-hidden rounded-lg"
              
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src={`Themes2/${image.id}.jpg`}
                alt={image.alt}
                width={200}
                height={200}
                
                className=" transition-transform duration-700 group-hover:scale-110"
              />
              
            </motion.div>
          ))}
        </motion.div>
      </section>

     

     
    

   
    </div>
  )
}




