"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="mt-12"
      id="services"
    >
      <div className="" id="services">
        <h1 className="text-3xl lg:text-5xl font-bold mb-8 text-center bangla-text text-white">
          আমাদের <span className="text-[#cbdad5] ">সেবাসমূহ</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#f1f1f1] overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={service.image}
                alt={service.category}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="py-2 bangla-text">
                <CardHeader>
                  <CardTitle className="text-[#1F509A] font-bold text-xl md:text-2xl">
                    {service.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start text-base">
                        <span className="w-2 h-2 bg-[#1F509A] rounded-full mt-2 mr-3 shrink-0" />
                        <span className="text-[#34344e]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
