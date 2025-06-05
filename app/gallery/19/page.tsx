import { Gallery } from "@/components/gallery"

export default function GalleryPage() {
  return (

    <div className="container mx-auto py-10">
      <div className="space-y-2 mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#0a2240]">
        Highlights of ICNAN'19</h1>
        <hr></hr>
      </div>

      <Gallery />
    </div>
  )
}
