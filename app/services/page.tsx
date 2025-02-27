"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";
import { motion } from "motion/react";
import Image from "next/image";
const services = [
  {
    category: "জেনারেল সার্জারি",
    items: [
      "হার্নিয়া, হাইড্রোসিল, এপেন্ডিসাইটিস এর চিকিৎসা ও অপারেশন।",
      "গ্যাস্ট্রিক এর চিকিৎসা অপারেশন।",
      "পিত্তথলি ও পিত্তনালি এর চিকিৎসা ও অপারেশন।",
      "গলগণ্ড ও থাইরয়েড কান্সার এর চিকিৎসা ও অপারেশন।",
      "স্তন টিউমার ও ক্যান্সার এর চিকিৎসা ও অপারেশন।",
    ],
    image: "/images/general-surgery.webp",
  },
  {
    category: "কলোরেকটাল সার্জারি",
    items: [
      "কোলন, রেকটাম ও পায়ুপথ এর সমস্যা ও কান্সার এর চিকিৎসা ও অপারেশন।",
      "পাইলস ও ফিস্টুলা এর চিকিৎসা ও অপারেশন।",
    ],
    image: "/images/colorectal.jpg",
  },
  {
    category: " ল্যাপারস্কপিক সার্জারি",
    items: [
      "ল্যাপারস্কপিক পিত্তথলির অপারেশন।",
      "ল্যাপারস্কপিক এপেন্ডিসাইটিস অপারেশন",
      "ল্যাপারস্কপিক হার্নিয়া অপারেশন।",
    ],
    image: "/images/laparoscopic.png",
  },
  {
    category: "স্ট্যাপলিং/লংগু",
    items: ["পাইলস ও প্রলাপস অপারেশন।"],
    image: "/images/stapling.jpg",
  },
];

export default function Services() {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="min-h-dvh"
      >
        <div className="" id="services">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">
            আমাদের <span className="text-blue-600">সেবাসমূহ</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg "
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.category}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 md:h-56">
                    <CardHeader>
                      <CardTitle className="text-[#1F509A] font-bold">
                        {service.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-[#1F509A] rounded-full mt-2 mr-3 shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
}
