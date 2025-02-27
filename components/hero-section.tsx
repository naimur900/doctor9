"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-[#e4f2fa] rounded-lg w-full"
    >
      <section
        id="hero"
        className="flex flex-col-reverse justify-center items-center md:flex-row p-4 lg:p-6 gap-6 "
      >
        {/* Left Content */}
        <div className="space-y-4 text-center md:text-left md:w-6/12 2xl:w-7/12">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-green-800 font-bold">
            Brig. Gen. Prof. Dr. Md. Saidur Rahman
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-2">
            {/* <img width={32} src="/images/stethoscope2.png" alt="icon" /> */}
            <span className="font-mono text-sm md:text-lg">
              সাবেক চিফ সার্জন ও উপদেষ্টা বিশেষজ্ঞ সার্জন <br /> সি.এম.এইচ, ঢাকা
            </span>
          </div>
          <h2 className="text-[#1F509A] md:text-lg">37+ years of experience</h2>
          <p className="text-gray-700">
            <span className="">MBBS and FCPS (Surgery)</span> <br />
            General & Laparoscopic Surgery Specialist <br />
            Special Training: Stapling Device in Surgery, Colorectal and Piles
          </p>

          <div className="flex justify-center md:justify-start gap-3 text-sm">
            <button
              onClick={() => scrollToSection("intro")}
              className="bg-[#1F509A] text-white lg:text-lg p-2 md:p-3 rounded-sm hover:bg-[#3D3BF3]/90 transition"
            >
              Know More
            </button>
            <button
              onClick={() => scrollToSection("testimonial")}
              className="border border-black p-2 md:p-3 lg:text-lg rounded-sm hover:bg-black hover:text-white transition"
            >
              Patient Success Story
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0 md:w-6/12 2xl:w-7/12">
          <Image
            src="/images/doctor-hero-real.png"
            alt="Doctor portrait"
            width={400} // Default for large screens
            height={400} // Keeps proportions
            className="object-cover rounded-3xl w-[250px] h-[300px] md:w-[400px] md:h-[380px] lg:w-[550px] lg:h-[420px] xl:w-[580px] xl:h-[580px]"
            priority
          />
        </div>
      </section>
    </motion.div>
  );
}
