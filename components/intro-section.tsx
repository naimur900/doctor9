"use client";
import { Button } from "@/components/ui/button";
import {
  AcademicCapIcon,
  BeakerIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { motion, useAnimation } from "framer-motion";
import { Facebook, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function IntroSection() {
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

  const animationVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      className="mt-12"
      animate={controls}
      variants={animationVariants}
      id="intro"
    >
      <div className="bg-[#f1f1f1] rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex flex-col xl:flex-row items-center gap-6 md:gap-12">
          {/* Doctor's Image */}
          <div className="flex-shrink-0 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[200px] lg:max-w-[400px] relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[3/4] lg:aspect-[3/4] w-full">
              <Image
                src="/images/doctor-hero-real.png"
                alt="Doctor portrait"
                fill
                className="object-cover rounded-lg bg-[#D4EBF8]"
              />
            </div>
          </div>

          {/* Doctor's Info */}
          <div className="flex-1 space-y-4 text-center md:text-left md:text-lg">
            <h2 className="md:text-2xl font-bold">
              ব্রিগেডিয়ার জেনারেল প্রফেসর ডা. মো. সাঈদুর রহমান
            </h2>
            <p className="text-gray-600">
              <span className="block hover:translate-y-[-3px] transition-all duration-300">
                আমি জেনারেল ও ল্যাপারোস্কোপিক সার্জন হিসেবে কাজ করছি। আমার
                প্রশিক্ষণ ও অভিজ্ঞতা কম্বাইন্ড মিলিটারি হাসপাতালের সার্জারি
                বিভাগের প্রফেসর এবং প্রধান সার্জন হিসেবে।
              </span>
              <br />
              <span className="block my-2 hover:translate-y-[-3px] transition-all duration-300">
                আমি বিশ্বাস করি যে সময়মতো সঠিক ডায়াগনোসিস এবং চিকিৎসা রোগীর
                সুস্থতার পথকে সহজ করে দিতে পারে। সার্জারির ক্ষেত্রে আমি সর্বশেষ
                প্রযুক্তি ও উন্নত পদ্ধতি ব্যবহার করি।
              </span>
              <br />
              <span className="block hover:translate-y-[-3px] transition-all duration-300">
                আমার মেডিক্যাল প্রশিক্ষণ আমি বাংলাদেশের পাশাপাশি আন্তর্জাতিক
                মানের প্রতিষ্ঠান থেকেও সম্পন্ন করেছি। এই অভিজ্ঞতা আমাকে জটিল ও
                বিরল কেস পরিচালনায় দক্ষতা দিয়েছে।
              </span>
            </p>
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <Button className="bg-[#0866ff] text-white hover:bg-[#377ff1] flex items-center gap-2">
                <Facebook className="h-4 w-4" /> Connect
              </Button>
              <Button
                variant="outline"
                className="border-black flex items-center gap-2"
              >
                <Phone className="h-4 w-4" /> Call
              </Button>
            </div>
          </div>

          {/* Extra Information */}
          <div className="flex flex-col gap-4 w-full md:w-auto items-center">
            {/* Featured By Section */}
            <div className="border p-4 text-center">
              <p className="text-gray-600 mb-4">FEATURED BY:</p>
              <div className="flex flex-wrap gap-6 items-center justify-center">
                <Image
                  src="/images/cmh-logo.png"
                  alt="CMH Logo"
                  width={80}
                  height={30}
                />
                <Image
                  src="/images/ibn-sina.png"
                  alt="Ibn Sina Logo"
                  width={80}
                  height={30}
                />
              </div>
            </div>

            {/* Qualifications Section */}
            <div className="border p-4 w-full">
              <div className="space-y-4  text-gray-600">
                <div className="flex items-center gap-3">
                  <AcademicCapIcon className="w-6 h-6 text-[#1F509A] flex-shrink-0" />
                  <p>MBBS (Dhaka), FCPS (Surgery)</p>
                </div>
                <div className="flex items-center gap-3">
                  <BeakerIcon className="w-6 h-6 text-[#1F509A] flex-shrink-0" />
                  <p>General & Laparoscopic Surgery Specialist</p>
                </div>
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-6 h-6 text-[#1F509A] flex-shrink-0" />
                  <p>37+ Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
