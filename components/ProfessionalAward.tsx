import { Card, CardContent } from '@/components/ui/card'
import { Trophy } from 'lucide-react'

const awards = [
  {
    year: "2023",
    title: "Excellence in Neurological Care",
    organization: "International Neurology Association",
    description: "Awarded for outstanding patient care and innovative treatment approaches."
  },
  {
    year: "2021",
    title: "Medical Research Achievement",
    organization: "Asian Medical Society",
    description: "Recognition for groundbreaking research in neurodegenerative disorders."
  },
  {
    year: "2019",
    title: "Distinguished Physician Award",
    organization: "Singapore Medical Board",
    description: "Honored for exceptional contributions to the field of neurology."
  }
]

export function ProfessionalAwards() {
  return (
    <section className="py-16 bg-white rounded-lg" id='award' >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono font-bold mb-12 text-center">Professional Awards</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Trophy className="h-8 w-8 text-[#1F509A] " />
                </div>
                <div className="space-y-3">
                  <span className="inline-block bg-[#D4EBF8] rounded-lg px-3 py-1 text-sm font-medium">
                    {award.year}
                  </span>
                  <h3 className="font-mono font-bold text-xl">{award.title}</h3>
                  <p className="text-gray-600 text-sm">{award.organization}</p>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

