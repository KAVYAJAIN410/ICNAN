import Image from "next/image"

export default function SponsorGrid() {
  const sponsors = [
    { name: "LittleMORE", logo: "/placeholder.svg?height=60&width=120" },
    { name: "AMETEK", logo: "/placeholder.svg?height=60&width=120" },
    { name: "GreenTech", logo: "/placeholder.svg?height=60&width=120" },
    { name: "CTA", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Quasar Tech", logo: "/placeholder.svg?height=60&width=120" },
    { name: "HORIBA", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Anton Paar", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Inkarr", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Integrated Systems", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-10 px-4  relative">
      <div className="absolute left-0 right-0 top-0 bottom-0 overflow-hidden">
        <div className="absolute -bottom-20 -left-20">
          <div className="w-40 h-40 border-4 border-blue-500 rounded-full opacity-10"></div>
        </div>
        <div className="absolute -top-20 -right-20">
          <div className="w-40 h-40 border-4 border-blue-500 rounded-full opacity-10"></div>
        </div>
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center  mb-10" style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}>OUR SPONSORS</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={120}
                height={60}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
