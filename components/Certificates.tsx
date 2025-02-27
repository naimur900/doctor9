import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const certificates = [
  {
    title: "Board Certification in Neurology",
    issuer: "American Board of Psychiatry and Neurology",
    year: "2010",
    image: "/images/medical-certificate.jpg"
  },
  {
    title: "Fellowship in Neurological Sciences",
    issuer: "Johns Hopkins Hospital",
    year: "2008",
    image: "/images/medical-certificate2.jpg"
  },
  {
    title: "Advanced Certification in Neuroimmunology",
    issuer: "University of Tokyo",
    year: "2015",
    image: "/images/medical-certificate.jpg"
  },
  {
    title: "Medical License",
    issuer: "Singapore Medical Council",
    year: "2017",
    image: "/images/medical-certificate2.jpg"
  }
]

export function Certificates() {
  return (
    <section className="py-16 bg-[#D4EBF8]" id='certificate'>
      <div className="container mx-auto ">
        <h2 className="text-3xl font-mono font-bold mb-12 text-center">Medical Certificates</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <div className="flex w-max space-x-6">
            {certificates.map((certificate, index) => (
              <Card key={index} className="w-[400px] shrink-0">
                <CardContent className="p-0">
                  <div className="relative h-[250px] w-full">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-mono font-bold text-xl">{certificate.title}</h3>
                    <p className="text-gray-600">{certificate.issuer}</p>
                    <p className="text-sm text-gray-600">Issued: {certificate.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
}

