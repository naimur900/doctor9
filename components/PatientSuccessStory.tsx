"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Dr. Md. Saidur Rahman performed my laparoscopic surgery with great precision. His expertise and care made my recovery smooth and painless.",
    author: "Rahim Ahmed",
    role: "Patient",
    rating: 5,
  },
  {
    quote:
      "I was suffering from severe colorectal issues for years. Thanks to Dr. Md. Saidur Rahman’s specialized treatment, I finally found relief. Highly recommended!",
    author: "Nasrin Akter",
    role: "Patient",
    rating: 5,
  },
  {
    quote:
      "The level of professionalism and attention to detail that Dr. Saidur Rahman and his team provided was outstanding. I felt reassured and well cared for throughout my surgical procedure.",
    author: "Tariq Hassan",
    role: "Patient",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  return (
    <section
      className="bg-[#f1f1f1] border rounded-2xl w-full mt-12 p-9"
      id="testimonial"
    >
      <div className="">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            5000+ Patients
            <br />
            Success Stories
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by patients for life-changing results
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full max-w-3xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-white rounded-lg shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <blockquote className="mb-4 text-base md:text-lg">
                        {testimonial.quote}
                      </blockquote>
                      <div>
                        <cite className="not-italic font-semibold block">
                          {testimonial.author}
                        </cite>
                        <span className="text-muted-foreground">
                          {testimonial.role}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-md:hidden absolute -left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className=" max-md:hidden  absolute -right-12 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
