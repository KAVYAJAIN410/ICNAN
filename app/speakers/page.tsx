"use client"

import { useRef, useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog2"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"


type Speaker = {
  id: number
  name: string
  institution: string
  country: string
  image: string
  description?: string
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Moungi Bawendi",
    institution: "Massachusetts Institute of Technology, USA",
    country: "Nobel Laureate in Chemistry (2023)",
    image: "MoungiBawendi.png",
    description:
      `Professor Moungi G. Bawendi is a distinguished Lester Wolfe Professor and Advisor for the Minor in Energy Studies, MIT Energy Initiative at the Massachusetts Institute of Technology (MIT). He is internationally acclaimed for his pioneering contributions to the synthesis and development of quantum dots, a class of nanoscale semiconducting crystals with remarkable optical and electronic properties. For his seminal work in this field, he was awarded the 2023 Nobel Prize in Chemistry, alongside Louis E. Brus and Alexey Ekimov, for the discovery and synthesis of quantum dots.
Bawendi began his academic journey at Harvard University, earning an A.B. in 1982 and an A.M. in 1983. He went on to complete his Ph.D. in Chemistry at the University of Chicago in 1988, under the mentorship of Karl Freed and Takeshi Oka. His doctoral research encompassed both theoretical polymer physics and experimental studies on the H₃⁺ ion, which played a key role in unravelling the emission spectra of Jupiter.
A transformative moment in Bawendi’s early career came during a summer research program at Bell Labs, where he was introduced to the emerging field of quantum dots by Louis E. Brus. Following his Ph.D., he returned to Bell Labs as a postdoctoral researcher, working closely with Brus before joining the faculty at MIT in 1990. He was promoted to full professor in 1996.
In 1993, Bawendi, along with his doctoral students David J. Norris and Christopher B. Murray, revolutionized nanomaterials research by developing the hot-injection synthesis method. This technique enabled the controlled, reproducible, and scalable production of quantum dots with uniform size and high optical quality. By precisely tuning their size, researchers could manipulate the optical and electronic characteristics of quantum dots, paving the way for their use in a wide array of applications including light-emitting diodes (LEDs), solar cells, lasers, photodetectors, chemical biology, biomedical imaging.
Over the years, Professor Bawendi has emerged as one of the most cited chemists in the world and a leading authority in nanoscience. His contributions have not only advanced fundamental science but also fueled innovation across multiple industries.
His numerous accolades reflect his impact and influence:
• Sloan Research Fellowship (1994)
• Nobel Signature Award for Graduate Education in Chemistry by the American Chemical Society (1997)
• Sackler Prize in Physical Chemistry of Advanced Materials (2001)
• Ernest Orlando Lawrence Award (2006)
• ACS Award in Colloid and Surface Chemistry (2010)
• SEMI Award for North America (2011)
• Clarivate Citation Laureate in Chemistry (2020)
• Medal of Honor from Tunis University (2023)
He has also been elected to several prestigious academic societies:
• Fellow of the American Association for the Advancement of Science (2003)
• Member of the American Academy of Arts and Sciences (2004)
• Member of the National Academy of Sciences (2007)
Prof. Moungi Bawendi’s trailblazing research continues to inspire a generation of scientists and drive technological progress. His legacy is defined not only by scientific excellence but also by a profound impact on how nanomaterials are understood and applied in the modern world.
 `,
  },

  {
    id: 2,
    name: "Dr. Adam Lee",
    institution: "Griffith University",
    country: "Australia",
    image: "speak/1.jpg",
    description:
      "Dr. Adam Lee is a Professor of Sustainable Chemistry at Griffith University, Australia. Previously, he held Chair appointments at Cardiff, Warwick, Monash, Aston and RMIT Universities. His research addresses the rational design of nanoengineered materials for energy and environmental applications and he has co-authored >300 publications (h-index 86, 26527 citations). Prof. Adam Lee is also a Fellow of the Royal Society of Chemistry and Royal Australian Chemical Institute, Associate Fellow of the IChemE, Editor-in-Chief of Materials Today Chemistry, and recipient of the 2011 McBain Medal, 2012 Beilby Medal and Prize, and 2023 RACI Welcome Award. He is a co-investigator and Flagship Project co-lead on the ARC Centre of Excellence ‘Green Electrochemical Transformation of Carbon Dioxide’ GetCO2.",
  },
  {
    id: 3,
    name: "Dr. Ajay Thakur",
    institution: "IIT Patna",
    country: "India",
    image: "speak/AjayThakur.jpg",
    description:
      "Dr. Ajay Thakur is an Associate Professor in the Department of Physics, at the Indian Institute of Technology Patna working in the area of condensed matter physics. He has completed his Ph.D from the Department of Condensed Matter Physics and Materials Science, Tata Institute of Fundamental Research, Mumbai and was a Post doctoral researcher at the prestigious National Institute for Materials Science, Tsukuba, Japan. The research activity in his group at IIT Patna focuses on Physics motivated exploration of Sustainable Functional Materials and Technologies. He is also collaborating nationally and internationally towards developing applications in the domains of Energy, Environment, Cell manipulation using Micro-Robotics and Functional Materials.",
  },
  {
    id: 4,
    name: "Dr. Ajayan Vinu",
    institution: "University of Newcastle",
    country: "Australia ",
    image: "speak/AjayanVinu.jpg",
    description:
      "Dr. Ajayan Vinu is currently working as a Professor of Nanomaterials and Director of the Global Innovative Center for Advanced Nanomaterials at the University of Newcastle and has made a significant contribution to the field of nanoporous materials and their application in energy storage, fuel cells, carbon capture and conversion, hydrogen technologies, catalysis and drug delivery. His contribution has led to ca. 540 papers with 36,000 citations and an H-index of 99, and more than 32 patents. He has been ranked number 1 (last 20 years) and number 7th (last 50 years) in Australia among the Top 2% of scientists in the field of “Materials” as per the database created by Stanford University in 2020, reflecting his high-quality research and research impact that he made in this field. The quality of his research has been recognised with several international awards, including Asian Paints Padma Vibhushan Dr R A Mashelkar Medal 2023, CHEMCON Distinguished Speaker Award Endowment for Innovators and Science Leaders, 2023, Dr Ghanshyam Srivastava Memorial Award (2021), Medal, Chemical Research Society of India 2018, SPARC award 2019, CNR Rao Lectureship award 2019. Medal and KY NIEM CHUONG Award 2018, Scopus Young Researcher Award 2014, Friedrich Wilhelm Bessel Award by the Humboldt Society (2010), JSPS Senior Invitational Fellow 2014, Australian Future Fellowship 2010, Indian Society for Chemists and Biologists Award for Excellence 2010, Catalysis Society of India Young Scientist award 2010, Chemical Society of Japan Award for the Young Scientist 2008, and Laureate of Khwarizmi International Award 2008. Prof. Vinu is honoured with a Fellow of the Royal Society of Chemistry, RACI, World Academy of Ceramics, World Academy of Art and Science, Indian Chemical Society, and Asia-Pacific Academy of Materials. Prof. Vinu heads the Australia-Korea Center for Green Ammonia Integrated Power Generation.",
  },
  {
    id: 5,
    name: "Dr. Alberto Vomiero",
    institution: "Luleå University of Technology",
    country: "Sweden",
    image: "speak/3.jpeg",
    description:
      "Alberto Vomiero holds the UNESCO chair “Technologies and Materials for Green and Energy Applications”, the chair of Experimental Physics at the Luleå University of Technology, Sweden, and the chair of Industrial Engineering at Ca’ Foscari University of Venice, Italy. He holds a PhD in Electronic Engineering and a Master’s Degree in Physics. His research interests are in composite nanomaterials for energy and environmental applications. He published more than 290 papers in international Journals and 6 book chapters (h-index: 69, citations>15.000). He is a fellow of several Societies, an Alumnus of the Global Young Academy, an associate editor of Nano Energy and an editorial board member of several Journals.",
  },
{
    id: 6,
    name: "Dr. S. Anandan",
    institution: "NIT Trichy",
    country: "India",
    image: "speak/24.jpg",
    description:
      "Dr. S. Anandan, Professor of Physical Chemistry hailing from Tamil Nadu, India, is leading the research group “Nanomaterials and Solar Energy Conversion Lab”. His research interests include hybrid semiconductor nanomaterials and their applications in Dye-sensitized solar cells, supercapacitors, perovskite solar cells, photocatalysis, electrocatalysis, fuel cells, and biosensors. He is the author of 400+ research articles, 30+ book chapters, two international patents and his h-index is 57. He is serving as an editorial board member in Ultrasonics Sonochemistry - Elsevier Journal. 28+ Research Scholars and 57+ M. Sc. Students have completed their degrees under his guidance. In addition, five Ph.D. and two M. Sc. students are pursuing research under his guidance.",
  },
{
    id: 7,
    name: "Dr. Aravind Vijayaraghavan",
    institution: "University of Manchester",
    country: "UK",
    image: "speak/AravindVijayaraghavan.jpg",
    description:
      "Dr. Aravind Vijayaraghavan is a Professor of Nanomaterials in the Department of Materials and the National Graphene Institute at The University of Manchester. He leads the Nanofunctional Materials Group. He is also the Head of Internationalisation (India & Business Engagement) for the Faculty of Science & Engineering. His research involves the science and technology of graphene and 2-dimensional materials, particularly for applications in composites, electronics, sensors and biotechnology. He was previously a senior post-doctoral research associate at Massachusetts Institute of Technology, USA and an Alexander von Humboldt Fellow at Karlsruhe Institute of Technology, Germany. He was awarded his MEng (2002) and PhD (2006) from Rensselaer Polytechnic Institute, USA and his BTech (2000) from the Indian Institute of Technology - Madras, India. He has published over 100 papers in international peer reviewed journals and delivered over 100 presentations at international conferences. He has filed 7 patents. He is the founder of two spin-out companies, Atomic Mechanics Ltd. and Grafine Ltd. He is also a leader in public engagement and science communication has won numerous awards for the same.",
  },
{
    id: 8,
    name: "Dr. G. Arthanareeswaran",
    institution: "NIT Trichy",
    country: "India",
    image: "speak/9.jpg",
    description:
      "Dr. G. Arthanareeswaran is the Group Leader of the Membrane Research laboratory and Professor at the Department of Chemical Engineering National Institute of Technology, Tiruchirapalli, India. Dr. Arthanareeswaran graduated as a Chemical Engineer in CIT, Coimbatore, India. He completed his master’s degree in petroleum refining and petrochemicals and defended his PhD thesis at the Anna University, Chennai, India. He joined National Institute of Technology, Tiruchirappalli in 2007 and became Lecturer at the chemical engineering department. In 2008, he established membrane research laboratory at the Department of chemical Engineering at the National Institute of Technology, Tiruchirappalli. From 2010 onwards, he is working as Associate Professor in the same department. He coordinating as principal Investigator for many projects which is funded by DST, DBT, India. International joint collaborative projects from CNPq, Brazil, MST, South Korea and Royal academy of engineering, London, UK also received for development and application of membranes in the treatment of wastewater from processing industries. He also collaborated in Loughbourgh university, UK, Monash university, Australia, University of Sao Carlous, Brazil Universiti Teknologi Malaysia, Malaysia, Konkuk University, Seoul, South Korea and Central Leather Research Institute, Chennai, India. Current research involves improving the performance of polymer membranes by mixing with inorganic micro particles and fillers by a mixed matrix method for ultrafiltration (UF) applications. Arthanareeswaran has received awards for research exchange including the Research exchange award from the Royal Academy of Engineering (RAE) London in 2010 and the Endeavour Executive award from the from Australian Government (Department of Education, Employment and Workplace Relations). He has been a member of the International advisory Committee in International Conference on Membranes. He has been a Guest Editor of the Special Issue “Current development in wastewater treatment in India” to Desalination Journal. He is a Associate Editor in ecotoxicology and environmental safety for special issue on Greener Eco-Environment 2015, Elsevier, USA. He serves as reviewer for 18 international journals.",
  },
  {
    id: 9,
    name: "Dr. Ashish Arora",
    institution: "IISER Pune",
    country: "India",
    image: "speak/4.jpg",
    description:
      "Ashish did his PhD from TIFR, Mumbai in the Department of Condensed Matter Physics and Materials Science in 2014. He was a CNRS postdoctoral researcher in National High Magnetic Field Laboratory (LNCMI-CNRS), Grenoble, France for a year (2014-15). He won the prestigious A. v. Humboldt grant for a postdoc in the University of Muenster, Germany (2015-17). Thereafter, he won the highly competitive German Research Foundation (DFG) grant and stayed as a junior group leader in the University of Muenster until August 2021. He joined IISER Pune as an Assistant Professor in September 2021. Ashish has won the European Magnetic Field Laboratory EMFL prize 2019 ‘for his ground-breaking discoveries using the excellent infrastructure at the EMFL facilities’, Young Achiever Award 2023 in 67th DAE Solid State Physics Symposium ‘in recognition for his contribution in Condensed Matter Physics’ and Young Physicist Award at the National Physicists’ Conclave 2024. Starting 2025, Ashish has been elected as a member of Indian National Young Academy of Science (INYAS-INSA).",
  },
  
{
    id: 10,
    name: "Dr. Balakumar S.",
    institution: "University of Madras",
    country: "India",
    image: "speak/25m.jpg",
    description:
      "Dr. Balakumar S. is Professor and Lab Head, Laboratory for Sustainable Health care, Environment and Energy Materials (LSHEEM) at the National Centre for Nanosciences and Nanotechnology, University of Madras. He has graduated in B.Sc (Physics) and M.Sc (Physics) from Bharathiar University, M.phil (Materials Science) from University of Madras and, Ph.D in Materials Science from Anna University. He went to pursue his Postdoctoral Fellowship in Materials Science from The Chinese University of Hong Kong and National University of Singapore. His areas of specialization are biomedical nanotechnology, nanostructured materials for energy and environment nanomaterials for energy and environment clean environment, and sensing and storage applications nanoelectronics and nano-magnetism biomaterials for orthopaedic dentistry and ophthalmology. He is currently associate editor of Chemical Papers, Springer and RSC Advances. He is also a Fellow of Institute of Physics (FInstP), IOP, UK, the Academy of Sciences, Chennai, and the Royal Society of Chemistry, UK.",
  },



  {
    id: 11,
    name: "Dr.Chamil Abeykoon",
    institution: "University of Manchester",
    country: "United Kingdom",
    image: "speak/5.jpg",
    description:
      "Chamil Abeykoon is an Associate Professor at the Department of Materials at the University of Manchester and his work is affiliated with the Aerospace Research Institute, the Northwest Composites Centre, Henry Royce Institute for Advanced Materials, and the National Graphene Institute. Chamil received the B.Sc. (Hons.) degree in mechanical engineering from the University of Peradeniya, Sri Lanka, in 2007, with the award of best performance in mechanical engineering, and the Ph.D. degree in mechanical engineering from the Queens University Belfast, U.K., in 2011, with several publications, in which one of his publications received the Young Author Best Paper Award from the IEEE in 2011. So far, he has authored 100+ peer-reviewed journals/conference papers. Moreover, he has authored a monograph, “Polymer Extrusion: A Study on Thermal Monitoring Techniques and Melting Issues.” His current research interests include: process monitoring, modeling, and control; soft sensors and soft sensing; process instrumentation; renewable energy technologies; 3D printing, phase change materials; and heat transfer. He is a Chartered Engineer and an Associate Member of the professional bodies, including IESL, IMechE, IOM3 and ICPM; and also a Fellow of the Higher Education Academy, U.K. Moreover, he is currently serving as an Associate Editor of 5 academic journals including Composites Communications and Journal of Fluid Flow, Heat and Mass Transfer. Also, he has been serving as a visiting professor of Southwest University, China, and He has been served on scientific committees, and he has also been invited for keynote speeches at several international conferences.",
  },
  
  {
    id: 12,
    name: "Dr. D. D. Sarma",
    institution: "IISc, Bangalore",
    country: "India",
    image: "speak/7.jpg",
    description:
      "Dr. Dipankar Das Sarma is an Indian scientist and structural chemist. Presently, He is serving as the J.N. Tata Chair Professor at the Solid State and Structural Chemistry Unit of the Indian Institute of Science, Bangalore, Inda. Among many other accolades, he is well known for his research in the fields of Solid-State Chemistry, Spectroscopy, Condensed Matter Physics, Materials Science, and Nanoscience. He is a former MLS Chair Professor of Physics and Chairman of the Centre for Advanced Materials and the GAST Professor of Uppsala University, Sweden. A recipient of TWAS Physics Prize and the UNESCO Biennial Javed Husain Prize, Dr. Sarma was honoured with the Shanti Swarup Bhatnagar Prize for Science and Technology by the CSIR, Government of India, in 1994. His research is broadly classified into areas of strongly correlated electronic systems, semiconducting nanoparticles, energy science, electronic structure calculations, and conjugated polymers.",
  },
  {
    id: 13,
    name: "Dr. David Jenkins",
    institution: "University of Plymouth",
    country: "UK",
    image: "speak/8.jpg",
    description:
      "Dr. David Jenkins is an Associate Professor at the Wolfson Nanomaterials and Devices Laboratory, School of Engineering, Computing and Mathematics, University of Plymouth, UK. He holds a B.Sc. (Hons) in Physics from the University of Salford (1983), an M.Sc. in Lasers and their Applications from the University of Essex (1985) and completed his Ph.D. at Cranfield Institute of Technology in 1991, focusing on Photothermal Deflection Spectroscopy and its Application in Remote Sensing. His research interests include microsensors, MEMS, surface plasmon resonance sensors, and graphene-based sensors.  Throughout his career, Dr. Jenkins has made significant contributions to the field, with over 120 publications and conference presentations. His work is always targeted to serve the Unted Nations Sustainable Development Goals. He is a member of prestigious professional bodies such as MIET, MInstP, and CPhys, demonstrating his commitment to advancing the field of nanomaterials and devices.",
  },
  {
    id: 14,
    name: "Dr Garima Agarwal",
    institution: "IIT Mandi",
    country: "India",
    image: "speak/garima.JPG",
    description:`Garima Agrawal did her M.Tech. in polymer science & technology at the Indian Institute of Technology Delhi, India. During her M.Tech., she received the DAAD Fellowship to carry out a research project at RWTH-Aachen University in Germany. After completing her Ph.D. at DWI Leibniz Institute for Interactive Materials - RWTH Aachen University, Germany in 2015, she joined postdoc at the University of Ghent, Belgium. In 2016, she was appointed as DST Inspire Faculty at Indian Institute of Technology Roorkee, India. Currently, she is working as an associate professor at School of Chemical Sciences, Indian Institute of Technology Mandi, India.
She is the recipient of several prestigious awards including NASI Platinum Jubilee Young Scientist Award (2022) from National Academy of Sciences, India and DST Inspire Faculty Award (2016) from Government of India and Young Achiever’s Award (2023) from IIT Mandi.
Her research interests include the synthesis of functional polymers based novel micro/nanomaterials and using them for designing interactive materials with active properties for targeted applications.`
  },
  
{
    id: 15,
    name: "Dr. Jayan Thomas",
    institution: "University of Central Florida",
    country: "USA",
    image: "speak/JayanThomas.jpg",
    description:
      "Dr. Jayan Thomas is currently a Professor of Nanotechnology, Engineering, and Photonics at the University of Central Florida (UCF). He earned his Ph. D. in Chemistry/Material Science from Cochin University of Science and Technology. He was awarded one of the most prestigious fellowships in India, Dr. K.S. Krishnan fellowship, by the Department of Atomic Energy for doing his Ph.D. After his post-doctoral fellowship (CSIR) in the International School of Photonics, he was offered a Research Scientist position in the College of Optical Sciences at the University of Arizona (USA) in 2001 and promoted to a Research faculty in 2005. He moved to the University of Central Florida (UCF) in 2011 and currently directs the Nano Energy-Photonics research labs. He has published more than 130 scientific publications, including multiple papers in prestigious journals like Nature, Science Advances, Energy and Environmental Sciences and Advanced Materials. Also, many national and international media including Reuters, Nature news, National Geography magazine, Huffington Post, USA Today, The Guardian, Foreign Policy, Fox News, The Telegraph, and Times of India have featured his research. He is a recipient of the R&D100 award (also known as “Oscar for Inventions”) in 2015. He is also a recipient of the National Science Foundation’s prestigious CAREER award (2014), the Veeco award for nanotechnology innovations (2010) and one of the five finalists for the World Technology Network award sponsored by TIME and FORTUNE magazines (2014). In addition, he has been awarded UCF's Excellence in Research award in 2014, and 2018, Reach for the Stars Award in 2016. He has more than ten issued/pending US patents and a co-founder of two companies.",
  },
  {
    id: 16,
    name: "Dr. John V. Kennedy",
    institution: "GNS Science",
    country: "New Zealand",
    image: "speak/10.jpg",
    description:
      "Dr John V. Kennedy is a Principal Scientist, Group Leader, Advanced Materials and Nanotechnology at National Isotope Centre, GNS Science (Institute of Geological and Nuclear Science), New Zealand Govt owned crown research institute.   Dr. Kennedy is a Physicist who works on the new materials development for low carbon energy technologies. He uses ion beam technologies pioneered by Lord Rutherford to develop functional materials and to provide key information about the materials structure-property relationship. The results are used across the materials science community for the design of a new product, surface engineering, catalytic materials for hydrogen production and storage, Thermoelectric materials for waste heat to energy conversion, energy storage materials, magnetic materials and energy efficient systems. He has published more than 250 journal papers (h-index of 65) demonstrating ion implantation into polymers, semiconductors, superconductors, nanostructures and 20 international patents. John is programme director. Aotearoa: Green Hydrogen Technology Platform.  He is an Adjunct Professor, Victoria University of Wellington and Honorary Professor, Faculty of Science and Engineering, University of Waikato. He is a Fellow of Royal Society of Chemistry, UK and a Fellow of Royal Society New Zealand.",
  },
  {
    id: 17,
    name: "Dr. Karen Wilson",
    institution: "Griffith University",
    country: "Australia",
    image: "speak/11.jpg",
    description:
      "Dr. Karen Wilson is Professor at the Centre for Catalysis and Clean Energy at Griffith University, Australia and previously held professorial positions at RMIT University (2018-23) and Aston University (2013-17). At Aston she was also Research Director of the European Bioenergy Research Institute and held a prestigious Royal Society Industry Fellowship in collaboration with Johnson Matthey. She holds a BA and Ph.D from the University of Cambridge, and MSc in heterogeneous catalysis from the University of Liverpool and has also held academic positions at the University of York and Cardiff University. Dr. Karen’s research interests lie in the design of tunable porous materials for sustainable biofuels and chemicals production from renewable resources. She is Associate Editor of Sustainable Energy & Fuels (Royal Society of Chemistry), and Energy & Environmental Materials (Wiley) and Editorial Board member for Energy & Environmental Science (Royal Society of Chemistry). She is also a co-investigator and theme leader of the Australian Research Council Centre of Excellence, ‘Green Electrochemical Transformation of Carbon Dioxide’ - GetCO2",
  },

  
  {
    id: 18,
    name: "Dr. Kornelius Nielsch",
    institution: "Technische Universität Dresden (TUD)",
    country: "Germany",
    image: "speak/13.jpg",
    description:
      "Prof. Kornelius Nielsch has held the Chair of Metallic Materials and Metal Physics and Director of the Institute of Metallic Materials within the Leibniz Institute for Solid State and Materials Research Dresden since April 2015. His main research concerns Condensed matter physics, Nanowire, Nanotechnology, Thin film and Atomic layer deposition. His research integrates issues of Electrical resistivity and conductivity and Magnetic field, Magnetization, Magnetoresistance in his study of Condensed matter physics. His studies in nanowire integrate themes in fields like seebeck coefficient, thermoelectric effect, hysteresis and topological insulator. His research on nanotechnology frequently connects to adjacent areas such as anodizing. His thin film research includes elements of substrate and epitaxy. In his study, oxide and porosity is strongly linked to chemical engineering, which falls under the umbrella field of atomic layer deposition.",
  },

{
    id: 19,
    name: "Dr. R. Kothandaraman",
    institution: "IIT Madras",
    country: "India",
    image: "speak/20.jpg",
    description:
      "Prof. Kothandaraman Ramanujam joined the Department of Chemistry-IITM in March 2011 as an assistant professor. He concurrently serves as the adjunct faculty of the National Centre for Catalysis Research (NCCR). He was born in a business town called Komarapalayam (near Bhavani), which is located at the bank of river Cauvery, in 1978. He completed his B.Sc in Chemistry from Sri Vasavi College affiliated to Bharatiyar University. Obtained his M.Sc in Applied Chemistry from Anna University in 2000. He was introduced to the field of Materials Electrochemistry by Prof. Ashok Kumar Shukla at the Solid State and Structural Chemistry Unit, Indian Institute of Science Bangalore and obtained his Ph.D. in 2006. After two successful postdoctoral stints at Michigan State University-East Lansing (Mentor: Prof. Scott C. Barton, 2007- 2009) and National Research Council of Canada-Ottawa (Mentors: Dr. Christina Bock and Prof. Barry MacDougall, 2009-2011), he joined the department of Chemistry-IITM. Research Expertise: Dr Kothandaraman’s expertise as a fine electrochemist of the country is focusing and contributing to realize India centric solutions for the ever-growing need of energy storage and conversion. Therefore, his motivation is in the direction of developing new functional materials, redox-active organic molecules and utilization of abundant resources such as sodium and zinc towards developing of newer energy systems. The academic research pursuits under the broad headings of (i) Lithium/Sodium/Zinc/Vanadium based batteries (ii) Organic Dyes for Solar Cells and (iii) Sensors have enabled delivery of “translatable research”. Besides, the photophysical and electronic properties of the redox-active organic functional materials developed by molecular engineering for sodium/lithium/zinc ion batteries and DSSC were explored at the molecular level using the DFT calculations.",
  },

  {
    id: 20,
    name: "Dr. Lorenzo Pavesi",
    institution: "University of Trento",
    country: "Italy",
    image: "speak/Lorenzo.jpg",
    description:
      "Lorenzo Pavesi is a Professor of Experimental Physics at the Department of Physics of the University of Trento (Italy). Born on the 21st of November 1961, he received his PhD in Physics in 1990 at the Ecole Polytechnique Federale of Lausanne (Switzerland). In 1990 he became an Assistant Professor, an Associate Professor in 1999 and Full Professor in 2002 at the University of Trento. He leads the Nanoscience Laboratory (25 people), and teaches several classes at the Department of Physics of the University of Trento. He founded the research activity in semiconductor optoelectronics at the University of Trento and started several laboratories of photonics, growth and advanced treatment of materials. He was the first president and founder of the IEEE Italian chapter on Nanotechnology. He was the head of the Department in Physics and the first director of the quantum at Trento Q@TN joint lab. He has directed 42 PhD students and more than 48 Master thesis students. His research activity concerned the optical properties of semiconductors. During the last years, he concentrated on Silicon-based photonics where he looks for the convergence between photonics and electronics. He is interested in active photonic devices which can be integrated into silicon by using optical nonlinearities and modified material properties. His interests encompass also optical sensors or biosensors and solar cells. A recent development is toward integrated quantum photonics and neuromorphic photonics. In silicon photonics, he is one of the worldwide recognized experts, he organized several international conferences, workshops and schools and is a frequently invited speaker. He manages several research projects, both national and international. He is an ERC grantee. He is a frequently invited reviewer, monitor or referee for photonics projects by several grant agencies. He is an author or co-author of more than 500 papers, author of several reviews, editor of more than 15 books, author of 2 books and holds 9 patents. He is chief speciality editor of the section Optics and Photonics of Frontiers in Physics and founding editor of the series Photonic Materials and Applications, a joint initiative of SPIE and Elsevier. Moreover, he sits on the editorial board of the ETRI Journal. He is in the advisory board of Glass-to-Power, an Italian start-up. In 2001 he was awarded the title of Cavaliere by the Italian President for scientific merit. In 2010 and 2011 he was elected distinguished speaker of the IEEE- Photonics society. He is a fellow of the IEEE, of SPIE, of AAIA and of the SIF. He holds an H-number of 65 according to Scopus and of 63 for Web of Science, and of 79 according to Google Scholar.",
  },

{
    id: 21,
    name: "Dr. Manish Chhowalla",
    institution: "University of Cambridge",
    country: "UK",
    image: "speak/Chhowalla.jpg",
    description:
      "Prof. Chhowalla is the Goldsmiths’ Professor in Materials Science at the University of Cambridge. He is also the Director of the Royce Institute at Cambridge as well as the Royal Academy Chair in Emerging Technology. Prof Chhowalla works on two dimensional transition metal dichalcogenides for electronic and electrochemical devices. He is interested in how disorder in these materials influences their properties. He is a Fellow of the Royal Academy and the Materials Research Society.",
  },


  {
    id: 22,
    name: "Dr. Manoj Gupta",
    institution: "National University of Singapore",
    country: "Singapore",
    image: "speak/15.jpg",
    description:
      "Provost Chair Professor Manoj Gupta was a former Head of Materials Division of the Mechanical Engineering Department. He did his Ph.D. from University of California, Irvine, USA (1992), and postdoctoral research at University of Alberta, Canada (1992). He has worked for about 40 years in the area of metallic materials with particular focus on metallic composites of different types. He has taken multiple consultancy work related to failure of materials besides teaching many people in corporate sectors on the same topic. He is currently among top 1% researchers as per Stanford’ List, The Universal Scientific Education and Research Network and ResearchGate. He has published over 730 peer reviewed journal papers and owns two US patents and two Trade Secrets.  His h-index is 89 and citations over 29500. He has also co-authored eight books, published by John Wiley, Springer and MRF - USA. A multiple award winner, he actively collaborate/visit Japan, France, Saudi Arabia, Qatar, China, USA and India as a visiting researcher, professor and chair professor.",
  },
  {
    id: 23,
    name: "Dr. Marc-Olivier Coppen",
    institution: "University College London",
    country: "UK",
    image: "speak/Olivier.jpg",
    description:
      "Marc-Olivier Coppens is the Ramsay Memorial Professor in Chemical Engineering at University College London (UCL), where he directs the Centre for Nature-Inspired Engineering (CNIE). He previously served as Head of Department and Vice-Dean Engineering. Professor Coppens is recognised for pioneering Nature-Inspired Chemical Engineering (NICE), with applications in process intensification, functional materials and devices for sustainable manufacturing, energy, water, and health. He is Fellow of RSC, IChemE, AIChE, and member of the Saxon Academy of Sciences (Germany).",
  },
  {
    id: 24,
    name: "Dr. Michael Naguib",
    institution: "Tulane University",
    country: "USA",
    image: "speak/17.jpg",
    description:
      "Dr. Michael Naguib is an associate professor in the Department of Physics and Engineering Physics at Tulane University. Prior to joining Tulane in 2018, he was a Wigner Fellow (2014-2017) and Research Staff (2017-2018) at Oak Ridge National Laboratory. He received his PhD in Materials Science and Engineering at Drexel University in 2014. He was one among the few members in Prof. Yury Gogotsi’s Team to have discovered a new class of 2D materials called MXenes. He has published more than 100 papers (with > 41,000 citations and h-index of 60) in international journals and presented many plenary, keynote and invited lectures and seminars at international conferences and universities. He completed his undergraduate and master’s degrees at Cairo University, Egypt. He has been listed as a Highly Cited Researcher by Clarivate Analytics three times and has received many awards such as NSF CAREER Award, Robert L. Coble Award, Kroto Award, Ross Coffin Purdy Award, Rising Star Award by Tulane University, Young Alumni Emerging Leader Award and listed as Forty-Under-Forty by Drexel University. He is an Associate Editor of Energy Advances. His research group works on the synthesis and characterization of novel nanomaterials with a focus on 2D materials for electrochemical energy storage and conversion.",
  },

  {
    id: 25,
    name: "Dr. Nanasaheb Devappa Thorat",
    institution: "University of Limerick",
    country: "Ireland",
    image: "speak/18.jpg",
    description:
      "Dr. Nanasaheb Devappa Thorat is a Science Foundation Ireland and Irish Research Council funded Principal Investigator at the Department of Physics, University of Limerick, Ireland. He is a three-time winner of the prestigious Marie Curie Fellowships: Politechnika Wrocławska (2018-2020), University of Oxford (2020-2022) and Harvard Medical School (2022) and the first Indian awardee of the European Commission’s Innovation Radar “Grand Prix of the Innovation Radar Prize 2020.” Dr. Thorat has 100 publications to his credit including 70 peer-reviewed SCI journal research papers, 7 Books, 25 book chapters, 1 European patent filled, 2 European innovations/inventions registered in European Union’s Innovation Radar Project, presented 5 Keynote Speech, 25 invited talks at prestigious scientific peer-conferences in Singapore, France, Germany, USA, Ireland, Poland, South Korea, and India, received international acclaims and awards for research contribution, generated research fund in excess of > €1.5 M, supervised students/junior researchers and actively participated in outreach and scientific dissemination for the service of the wider community. He received a Ph.D with Gold Medal in Physics from Centre for Interdisciplinary Research D. Y. Patil University Kolhapur, India. . He completed his B.Sc. and M.Sc. degrees from Shivaji University Kolhapur, India. His areas of research are Nanomedicine, targeted drug delivery and, Cancer therapeutics and Nanotechnology.",
  },

{
    id: 26,
    name: "Dr. K. S. Narayan",
    institution: "JNCASR, Bangalore",
    country: "India",
    image: "speak/12.jpg",
    description:
      "Dr. K S Narayan is a Professor and Sir J. C. Bose National Fellow at Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR), Bangalore. He is an academic researcher and has been active in the general field of molecular/organic/polymer/bioelectronics. He is a co-founder of a startup hbaromega (ℏw) - A Photovoltaic diagnostic Company- winner of Elevate-100 startup grant 2023 by Karnataka State Govt., selected for seed grant IIT(M) Pravartak. He is a hands-on experimentalist, who has contributed to many research problems in applied sciences spreading across physics, chemistry, and biology and translating this knowledge into engineering solutions. His laboratory has come out with many unique findings including the first demonstration of polymer optical-field effect transistors in 2001. His lab actively pursues frontier problems in device physics, photophysics of solution processible semiconductors, solar cells, LEDs, transistors, and circuits.  He has also contributed to the area of soft-electronic polymers in the biomedical arena of tissue engineering and for vision prosthetic elements. His present laboratory theme also explores advanced materials for integrating seamlessly the connected world with human sensory systems for a variety of biomedical applications and understanding it from a device physics perspective. His other current pursuits include developing noise measurement and scanning techniques to predict the full life cycle of photovoltaic modules. His work has received international coverage (Physics World, Laser Focus World, Printed Electronics World, Materials Research Society Bulletin, Nature India). Besides research, he has taken up the administrative mantle of Dean (R&D) (2011-2018) and was President-In Charge of JNCASR for a two and half years.",
  },

  {
    id: 27,
    name: "Dr. Pranab Goswami",
    institution: "IIT Guwahati",
    country: "India",
    image: "speak/19.jpg",
    description:
      "Prof. Pranab Goswami received a Ph.D. degree in 1994 in chemical biology from Gauhati University. He was a BOYSCAST fellow of DST, India, at the University of Massachusetts Boston. He joined as a scientist at NEIST, CSIR India, in 1990, moved to IIT Guwahati, India, in 2002, attained the level of Professor in 2009, and then HAG Professor in 2015. Prof. Goswami also served as Head of the Department of Biosciences and Bioengineering from 2006-2009, Head of the Centre for Energy from 2014-2017, and Founder Head of the Central Instrument Facility from 2004-2006 at IIT Guwahati. He was a visiting Professor at the University of Alberta, Canada, in 2018. Prof. Goswami received many accolades, served as an editorial board member of many international scientific journals, and was chairman and expert member in many academic, research, and administrative bodies in India. He served as Senate nominee to the BoG, IIT Guwahati. The primary research area of Prof. Goswami is the biosensors and biofuel cells, focusing on developing novel biorecognition systems and signal transduction platforms for malaria, myocardial infarction, Shiga toxin, and alcohols. His group explores biofuel cells as biosensing platforms and green power-generating devices. A couple of proofs-of-concept developed in his lab have already been translated into portable kits, and two of these prototype kits were dedicated to the nation by the honorable HRD minister of India. Prof. Goswami has published over 135 peer-reviewed scientific papers, filed 11 patent applications, edited one book in biosensors, supervised more than 40 research students in Ph.D. and MTech programs, and 25 students have received Ph.D. degrees",
  },
  {
    id: 28,
    name: "Dr. Pratap Kollu",
    institution: "University of Hyderabad",
    country: "India",
    image: "speak/PratapKollu.jpg",
    description:
      "Dr. Pratap Kollu is Assistant Professor at Center for Advanced Studies in Electronics Science and Technology (CASEST), School of Physics at the University of Hyderabad, India. He is also Newton Alumnus researcher to Cavendish laboratory, University of Cambridge, UK. His PhD in Materials Engineering is from Chungnam National University, Daejeon, South Korea. He completed his MPhil and MSc in Electronics from Andhra University, Visakhapatnam, India. He is a gold medalist from the university during his master’s course. His post-doctoral positions are at Tyndall national institute, Ireland, Indian institute of technology (IIT) Bombay and at University of Cambridge, UK. He is awarded the Newton International fellowship jointly by the Royal Society, UK and the British Academy, UK and he is awarded the INSPIRE faculty fellowship by Department of Science and Technology (DST), Government of India. His research areas include design and fabrication of magnetic sensors, porotype development for navigation and biosensor applications; He also works on 2D material metal nanocomposites for energy, multiferroics and water purification applications. He has published in 80 international peer-reviewed journals. He is also a recipient of young scientist award during the 9th international conference on advanced materials and processing held at Northeastern University, Shenyang, China (2018). ",
  },

  {
    id: 29,
    name: "Dr. Raghumani Singh Ningthoujam",
    institution: "BARC, Mumbai",
    country: "India",
    image: "speak/21.jpg",
    description:
      "Dr. Ningthoujam Raghumani Singh is a Scientific Officer at the Chemistry Division, Bhabha Atomic Research Centre, Mumbai, INDIA. He is recognized for Guideship of Ph.D. at Homi Bhabha National Institute (HBNI), Mumbai and Mumbai University, Mumbai. In recognition of his significant contributions to the chemical science, he has been awarded DAE-Scientific & Technical Excellence Award in 2012 and Young Achiever Award, SSPS 2010. He has been elected as a Fellow, The National Academy of Sciences, India (FNASc) in 2016 and Fellow, Maharashtra Academy of Sciences (FMASc) in 2013. He has been selected for the prestigious Chemical Research Society of India (CRSI) Bronze Medal Award for the year 2022. Dr. Raghumani S. Ningthoujam obtained M.Sc. in Chemistry from Manipur University, Imphal, Manipur, India in 1994. He was awarded Ph.D. in Chemistry from IIT Kanpur in the area of superconductivity, electron transport and magnetic properties of nanostructured transition metal nitrides in 2004. His area of expertise lies in luminescence and magnetic nanoparticles targeting on hypothermia applications.",
  },
  {
    id: 30,
    name: "Dr. Raman Singh",
    institution: "Monash University",
    country: "Australia",
    image: "speak/22.jpg",
    description:`Professor Raman Singh’s primary research interests are in the relationship of Nano-/microstructure and Environment-assisted degradation and fracture of metallic and composite materials, and Nanotechnology for Advanced Mitigation of such Degradations. He has also worked extensively on use of advanced materials (e.g., graphene) for corrosion mitigation, stress corrosion cracking, and corrosion and corrosion-mitigation of magnesium alloys (including for the use of magnesium alloys for aerospace, energy, defence and bioimplant applications).  
Prof Singh is a senior professor at Monash University, Australia.  He is/was a Guest Professor at ETH Zurich, Switzerland (2020, 2023, 2024, 2026), US Naval Research Lab, Indian Institute of Science, University of Connecticut, Indian Institute of Technology, Kharagpur. He worked as a scientist at Indian Atomic Energy and as a post-doc fellow at University of New South Wales, Australia.
Prof Singh’s professional distinctions and recognitions include: Guest Professor of ETH Zurich, Editor of a book on Cracking of Welds (CRC Press), Lead Editor of a book on Non-destructive Evaluation of Corrosion (Wiley), Editor-in-Chief of an Elsevier and an MDPI journals, leader/chairperson of a few international conferences and numerous plenary/keynote lectures at international conferences, over 285 peer-reviewed international journal publications and 15 book chapter, and several competitive research grants (that includes 4 Discovery, 7 Linkage and one ITRH grants of Australian Research Council).
Prof Singh has supervised 61 PhD students.  His vibrant research group at Monash University comprises of PhD students from different disciplines (Mechanical, Chemical, Materials and Mining Engineering, and Science) as well as from different cultural backgrounds (Australian, Middle-eastern, Chinese, Malaysian, Indian, African, North American and Israeli).`,
  },
  {
    id: 31,
    name: "Dr. Roland Kádár",
    institution: "Chalmers University of Technology",
    country: "Sweden",
    image: "speak/23.jpg",
    description:
      "Dr. Roland Kádár is a leading figure in the rheology and processing of soft matter, currently holding a Professorship at the Department of Industrial and Materials Science at Chalmers University of Technology in Sweden since 2023. His research group focuses on complex fluid flows, the interaction between fields and nanostructured fluids for multifunctional applications, and the development of advanced rheometry techniques. A significant aspect of his work involves creating novel characterization methods, particularly rheo-SAXS techniques at MAX IV, to understand the intricate relationships between flow, structure, and properties in soft materials. His expertise extends to nonlinear mechanical spectroscopy, rheology combined with optics and dielectric spectroscopy, and high-pressure rheometry. He is also a Guest Researcher and LINXS Fellow at LINXS (Lund Institute for Advanced Neutron and X-ray Science) from March to June 2025, actively contributing to infrastructure development and education/outreach within the institute. Professor Kádár's academic journey includes a Dipl. Eng and a Ph.D. from the Polytechnic University of Bucharest. He furthered his research as a Postdoctoral Researcher at the Karlsruhe Institute of Technology (KIT) in Germany. Before his professorship, he held positions as an Associate Professor and Senior Lecturer at Chalmers. He is a Principal Investigator at the Wallenberg Wood Science Centre (WWSC) since 2019. His dedication to the scientific community is evident through his roles as an executive committee member-at-large of the European Society of Rheology (since 2023) and his recent presidency of the Nordic Rheology Society (2020-2024). Beyond his scientific pursuits, Professor Kádár is described as a scientist, researcher, educator, and enjoys recreational road cycling, travelling, and amateur photography.",
  },
  

  
  {
    id: 32,
    name: "Dr. Saikat Talapatra",
    institution: "Southern Illinois University, Carbondale",
    country: "USA",
    image: "speak/25.jpg",
    description:
      "Dr. Saikat Talapatra is currently a professor in the Department of Physics, where he earned his Ph.D. degree in engineering science from Southern Illinois University, Carbondale. His expertise includes low-temperature and condensed-matter physics, and his present research interests include a broad variety of nanomaterial synthesis and characterization pertaining to advanced energy solutions. Dr. Saikat Talapatra, received his B.Sc. in Physics and B.Ed degree from Regional College of Education Bhubaneswar. Thereafter he finished his M.Sc. in Physics form Jadavpur University, Kolkata and his MS and Ph.D. from Southern Illinois University Carbondale (SIUC), Illinois, USA. After spending some time at Rensselaer Nanotechnology Center, Troy NY as a Post-Doctoral Research Associate with Prof. P. M. Ajayan's group, he returned to SIUC as a faculty.",
  },
  {
    id: 33,
    name: "Dr. Santanu Das",
    institution: "IIT BHU",
    country: "India",
    image: "speak/26.jpg",
    description:
      `Dr. Santanu Das is an Associate Professor in the Department of Ceramic Engineering, Indian Institute of Technology (BHU), Varanasi, since 2024. He worked as Research Scientist at the Department of Materials Science and Engineering, University of North Texas, USA.  Dr. Das did his Ph.D. from Florida International University, USA, in Materials Science and Engineering and did his Master degree from Banaras Hindu University in Ceramic Engineering, respectively. His research areas include the engineering of various nanostructured materials and nanoarchetypes for various applications, including energy storage, electrochemical sensors, energy-harvesting, electrocatalysis, transistors, photo-sensors, photodetectors, and several other thin-film photonics, electronics, and optoelectronics. Dr. Das is a recipient of numerous prestigious awards, including a National award on “Best Innovation 2022, 11th National Petrochemicals Awards, Ministry of Petroleum and Natural Gas, Govt. of India”; “IIT(BHU) Best Teacher Award 2022”; "Outstanding Ph.D. dissertation award FIU, USA; “IT-gold Medal” IT(BHU); "The American Ceramic society's McCARE Award" ACerS, USA; "MRS poster Award" Materials Research Society, USA; "Early Career Awards" SERB; “MoE-STARs awards”, Ministry of Education; and many more. He got the honor of becoming Fellow, Indian Chemical Society, 2022; MRSC, Royal Society of Chemistry, UK; 2021, "IEEE Senior Member" 2017; for his outstanding research contribution over the last twelve years. Dr. Das published ~ 1 book, ~ 6 book chapters, a total of more than 137 SCI-indexed peer-reviewed high-impact research articles, and holds 14 patents (including two (02) US patents granted, ten (10) Indian patents granted). He has total more than ~4200 citations, h-index of ~35 and i-10 index of ~83. Recently, he has also transferred a few technologies from lab-scale to start-up industrial scale for developing indigenous products in India.`,
  },
  {
    id: 34,
    name: "Dr. Seiichi Takamatsu",
    institution: "State University of New York at Binghamton",
    country: "USA",
    image: "speak/27.jpg",
    description:
      "Dr. Seiichi Takamatsu is a Professor at the School of Systems Science and Industrial Engineering, State University of New York, Binghamton. He received the BE, ME, and PhD degrees in mechanical informatics from the University of Tokyo, Japan, in 2003, 2005 and 2009, respectively. He joined the National Institute of Advanced Industrial Science and Technology (AIST) in 2009, where he was a researcher with the Research Center for Ubiquitous MEMS and Micro Engineering (UMEMSME), AIST. until 2016. Before joining Binghamton University, he was an associate professor with The University of Tokyo. His international experience includes time as a visiting graduate student at Cornell University from 2005 to 2006 and a visiting scientist at Ecole Nationale Supérieure des Mines de Saint-Etienne in France from 2014 to 2015. His research interests include hybrid electronics, wearable MEMS technologies and meter-scale electronic textiles. He has published over 120 journal and conference papers on hybrid electronics and electronic textiles, and he has received the Excellent Researcher Award from the University of Tokyo, the Satomi Prize, and the Young investigator Award of Japan Institute of Electronics Packaging.",
  },
  {
    id: 35,
    name: "Dr. Sudhagar Pitchaimuthu",
    institution: "Heriott Watt University",
    country: "UK",
    image: "speak/28.jpg",
    description:
      `Dr. Sudhagar Pitchaimuthu is an Associate Professor at IMPEE, School of Engineering and Physical Sciences, Heriot Watt University, UK and he holds the role of Associate Director for the Energy Materials and Technology theme at the Research Centre for Carbon Solutions (RCCS). With a distinguished career spanning over 15 years in materials science, Dr Pitchaimuthu is renowned for his pioneering work in the development of multi-functional nanomaterials, particularly in the realm of solar energy applications, such as solar cells, solar hydrogen fuel generation, environmental remediation (water and air pollutant cleanup), artificial CO2 recycling, electrolysis, supercapacitors, and biosensor technologies. His standing as a world-class researcher is underlined by the two prestigious international research fellowships he has earned in Japan (JSPS Post Doctoroal Fellowship) and the UK (Ser Cymru Rising Star Fellowship).  He is a recipient of both the Newton International Fellowship and the Marie Curie Fellowship as a Host Supervisor. He is also the Fellow of Royal Society of Chemistry. Beyond academia, he excels in conveying the impact of his research to diverse audiences through extensive engagement in outreach activities, including media coverage (BBC News, Nature Outlook, The Independent UK, etc.), the organization of over seven international conferences, and STEM ambassador initiatives. He served as a review panel member for the Scottish Industrial Energy Transformation Fund (SIETF) and assumed the role of an expert panellist at the 15th Pravasi Bharatiya Divas, hosted by the Ministry for External Affairs, Government of India, where he shared profound insights on the "Role of Indian Diaspora in Capacity Building for Affordable Solar Power." Furthermore, he provided expert opinions during the Co-Funded Brain Circulation Scheme 2 Kick-off meeting at the Scientific and Technological Research Council of Turkey (TUBITAK) headquarters in Ankara, Turkey. Furthermore, he has been recognised by the Ministry of Education, Croatia, and invited to share his opinion on “Challenges and advantages in research mobility across the continents” at the “Young researchers in a highly skilled landscape” conference, which was organised by European Commission, Horizon 2020. His extensive expertise and dedication to research excellence have left an indelible mark on the global stage.`,
  },
  {
    id: 36,
    name: "Dr. Unyong Jeong",
    institution: "Pohang University of Science and Technology",
    country: "Korea",
    image: "speak/29.jpg",
    description:
      "Dr. Unyong Jeong is a distinguished figure in the field of Materials Science and Engineering, currently serving as a Professor at Pohang University of Science and Technology (POSTECH) in South Korea since March 2016. His academic journey includes a strong foundation in Chemical Engineering, culminating in a Ph.D. from POSTECH in 2003 with a thesis focused on the control of self-assembled nanostructures of block copolymer thin films. He also holds M.S. and B.S. degrees in Chemical Engineering from the same institution. Prior to his tenure at POSTECH, Professor Jeong held faculty positions at Yonsei University from 2006 to 2016, progressing from Assistant to Associate Professor. His postdoctoral research was conducted at the University of Washington, Seattle, under the guidance of Professor Younan Xia. Professor Jeong's research interests are broad and impactful, encompassing inorganic, organic, and hybrid organic/inorganic nanostructured materials. His work includes the synthesis and application of nanoparticles, nanowires, and nanotubes in areas such as optoelectronics, thermoelectronics, biomedical and gas sensing, and nanoelectronics. His significant contributions to the field are recognized through numerous awards, including the Nano Korea Revolutionary Research Award (Korean Minister Award) in 2020, the Young Scientist Award by the Korean President in 2011, and the Asia Outstanding Lectureship Award by the Japanese Chemical Society in 2013. He is an elected member of the Young Korean Academy of Science and Technology (Y-KAST) and an Associate Member of the Korean Academy of Science and Technology (KAST). Beyond his research and teaching, Professor Jeong is actively engaged with the scientific community, serving as an Associate Editor for Materials Advances and the Journal of Materials Chemistry C since 2019. He is also a member of the Samsung Future Technology Meeting Committee. His professional affiliations include memberships in esteemed societies such as the Material Research Society, the American Chemical Society, the American Physical Society, and various Korean scientific organizations.",
  },
  {
    id: 37,
    name: "Dr Venkata Krishnan",
    institution: "IIT Mandi",
    country: "India",
    image: "speak/venkata.JPG",
    description:
      "Prof. Venkata Krishnan completed his Ph.D. in Chemistry in 2006 from University of Stuttgart, Germany after completing his B.Sc. and M.Sc. degrees from PSG College of Technology, Coimbatore, Tamil Nadu, India. Subsequently, he worked as a postdoctoral researcher at University of Pennsylvania, U.S.A. from 2006 to 2010 and then as a research associate at National Institute for Materials Science (NIMS), Tsukuba, Japan from 2010 to 2012. He joined as a faculty at the Indian Institute of Technology (IIT) Mandi in April 2012 and is currently a full professor. His research group is mainly working in the field of Green Chemistry and Heterogeneous Catalysis for Energy and Environment Applications. He has successfully guided 12 Ph.D. and 26 M.Sc. students and is currently guiding 9 Ph.D. and 7 M.Sc. students, in addition to several short-term research interns. He has published more than 180 articles in well reputed international journals and is also a reviewer for several scientific journals. He has been bestowed with several awards, including DST INSPIRE faculty award, IIT Mandi foundation day award for excellence in teaching, MANA research fellowship, DoE postdoctoral fellowship, DFG doctoral fellowship, DAAD visiting scholar fellowship, etc. In addition to teaching and research, he has also served IIT Mandi in various administrative positions, such as first warden of the main hostel in permanent campus, founding coordinator of Advanced Materials Research Center (AMRC), Associate Dean Research and most recently as Dean of Sponsored Research, Industrial Consultancy, and International Relations (SRIC & IR), Director of IIT Mandi iHub and HCi foundation (a technology innovation hub) and Director of IIT Mandi Catalyst (a technology business incubator), besides being on several scientific and administrative committees at institute, national and international levels. Apart from academics, he likes reading books and is interested in linguistics.",
  },
  
  {
    id: 38,
    name: "Dr. Wim Deferme",
    institution: "Hasselt University",
    country: "Belgium",
    image: "speak/30.jpg",
    description:`
      Wim Deferme obtained an engineering degree in Applied Physics at the Technical University of
Eindhoven in The Netherlands in 2003. He obtained a Ph.D. in Materials Physics at Hasselt
University in 2009 on the surface termination of synthetic diamond. In 2009, as a postdoc, he started
research in the field of Printable Electronics. Since February 2014, he has been a Professor at
Hasselt University, heading a group of 1 post-doc, 8 Ph.D. students, two full-time researchers, and
several bachelor and master students in the field of “Engineering of Functional Materials.” His
research activities are focused on the printing of functional materials. Ink formulation towards
functional inks, printing techniques such as inkjet printing, screen printing, and ultrasonic spray
coating, applications such as Organic Electronics, printed sensors for wound monitoring, and
stretchable electronics are among his expertise!
The Functional Materials Engineering (FME) research group, headed by Prof. Wim Deferme, is
focused on the printing and coating of functional materials on a wide variety of substrates by
applying techniques such as inkjet printing, screen printing, ultrasonic spray coating, spin coating,
and blade coating. It is the aim of the FME group to optimize printing and coating techniques in
combination with the engineering of functional materials for applications such as Organic
Photovoltaïcs, printed sensors, health care, and stretchable electronics applications. The group
focuses on the deposition of these devices on non-rigid and/or non-flat substrates such as paper,
textiles, and 3D structures.`,
  },
 
];
export default function SpeakerGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof speakers)[0] | null>(null)
  
  const [positions, setPositions] = useState<number[]>(Array.from({ length: speakers.length }, (_, i) => i))
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isAutoRotating) {
      interval = setInterval(() => {
        setPositions((prevPositions) => {
          const newPositions = [...prevPositions]
          const heroIndex = newPositions.indexOf(0)
          const nextHeroIndex = (heroIndex + 1) % speakers.length
          ;[newPositions[heroIndex], newPositions[nextHeroIndex]] = [
            newPositions[nextHeroIndex],
            newPositions[heroIndex],
          ]
          return newPositions
        })
      }, 3000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoRotating])

  const handleCardClick = (index: number) => {
    
    // Pause auto-rotation for 10 seconds when a user interacts
    setIsAutoRotating(false)
   setSelectedImage(speakers[index])

    setPositions((prevPositions) => {
      const newPositions = [...prevPositions]
      const heroIndex = newPositions.indexOf(0)
      ;[newPositions[heroIndex], newPositions[index]] = [newPositions[index], newPositions[heroIndex]]
      return newPositions
    })

    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000)
  }

    return (
      <>
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[#0b1c2f]">
              ICNAN '25 SPEAKERS
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
              Meet our distinguished speakers from leading institutions around the world
            </p>
          </motion.div>
  
          <div className="speaker-gallery">
            {/* Featured Speaker (Hero Position) */}
            <div className="mb-8 sm:mb-12">
            <AnimatePresence mode="wait">
    {positions.map((pos, index) =>
      pos === 0 ? (
        <motion.div
          key={`featured-${speakers[index].id}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
                      <div className="bg-gradient-to-br from-[#0b1c2f] to-[#1a365d] rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-2/5 p-6 flex justify-center items-center">
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-hidden rounded-xl border-4 border-blue-400 shadow-lg transform transition-transform duration-500 hover:scale-105">
                              <Image
                                src={speakers[index].image || "/placeholder.svg?height=400&width=400"}
                                alt={speakers[index].name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                                priority={true}
                              />
                            </div>
                          </div>
                          <div className="lg:w-3/5 p-6 lg:p-8 text-white">
                           
                            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{speakers[index].name}</h3>
                            <p className="text-blue-300 text-lg mb-4">
                              {speakers[index].institution}
                              {speakers[index].country !== "N/A" && `, ${speakers[index].country}`}
                            </p>
                            <p className="text-slate-300 leading-relaxed text-justify ">
                              {speakers[index].description ||
                                "Distinguished speaker with expertise in advanced materials and nanotechnology."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ):null
              )}
              </AnimatePresence>
            </div>
  
            {/* Grid of Other Speakers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            
            >
              {positions.map(
    (pos, index) => (
      <motion.div
        key={`grid-${speakers[index].id}`}
        className="cursor-pointer"
        onClick={() => handleCardClick(index)}
                      transition={{
                        type: "spring",
                        stiffness: 600,
                        damping: 30,
                        layout: { duration: 1 },
                      }}
                      
                    >
                      <div className="bg-gradient-to-br from-[#0b1c2f] to-[#1a365d] rounded-xl shadow-lg h-full border border-blue-500/30 flex flex-col transition-all duration-300 hover:shadow-xl group">
                        <div className="relative w-full pt-[100%] rounded-t-xl overflow-hidden">
                          <Image
                            src={speakers[index].image || "/placeholder.svg?height=400&width=400"}
                            alt={speakers[index].name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c2f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-4 flex-grow">
                          <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{speakers[index].name}</h3>
                          <p className="text-sm text-blue-300 line-clamp-1">{speakers[index].institution}</p>
                          <p className="text-xs text-slate-400 mt-1">
                            {speakers[index].country !== "N/A" ? speakers[index].country : ""}
                          </p>
                        </div>
                        <div className="p-4 pt-0">
                          <span className="inline-flex items-center justify-center rounded-full bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-200">
                            View Details
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ),
              )}
            </div>
          </div>
        </div>
       
      </section>
       <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
       <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
         {selectedImage && (
     
             <div className="bg-gradient-to-br from-[#0b1c2f] to-[#1a365d] rounded-2xl shadow-xl ">
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-2/5 p-6 flex justify-center items-center">
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-hidden rounded-xl border-4 border-blue-400 shadow-lg transform transition-transform duration-500 hover:scale-105">
                              <Image
                                src={selectedImage.image || "/placeholder.svg?height=400&width=400"}
                                alt={selectedImage.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                                priority={true}
                              />
                            </div>
                          </div>
                          <div className="lg:w-3/5 p-6 lg:p-8 text-white ">
                           
                            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{selectedImage.name}</h3>
                            <p className="text-blue-300 text-lg mb-4">
                              {selectedImage.institution}
                              {selectedImage.country !== "N/A" && `, ${selectedImage.country}`}
                            </p>
                            <p className="text-slate-300 leading-relaxed overflow-scroll max-h-[80vh] pr-4 text-justify ">
                              {selectedImage.description ||
                                "Distinguished speaker with expertise in advanced materials and nanotechnology."}
                            </p>
                          </div>
                        </div>
                      </div>
   
         )}
       </DialogContent>
     </Dialog>
     </>
    )
  }
  