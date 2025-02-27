"use client";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { ClockIcon, FlaskConical } from "lucide-react";
import { motion } from "motion/react";

export default function IntroSection() {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="min-h-dvh"
      >
        <section className="">
          <div className="">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">
              Brig. Gen. Prof. Dr. Md. Saidur Rahman
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 items-center md:items-start justify-center mx-auto">
              <div className="lg:w-1/4">
                <Card className="overflow-hidden h">
                  <Image
                    src="/images/doctor-hero-real.png"
                    alt="Dr. Md. Saidur Rahman"
                    width={300}
                    height={300}
                    className="w-full object-cover"
                  />

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Brig.Gen.Prof. Dr. Md. Saidur Rahman
                    </h3>
                    <p className="text-[#1F509A] font-bold">
                      General & Laparoscopic Surgeon
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-2/3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#1F509A]">
                      Professional Background
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex">
                        <AcademicCapIcon className="w-6 h-6 text-[#1F509A] flex-shrink-0" />
                        <h4 className="font-semibold mb-2 ml-2 text-[#1F509A] text-lg">
                          Education
                        </h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 marker:text-[#1F509A]  text-lg">
                        <li>MBBS (Dhaka), FCPS (Surgery)</li>
                        <li>
                          Special Training: Stapling Device in
                          Surgery,Colorectal and Piles
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex">
                        <FlaskConical className="w-6 h-6 text-[#1F509A] flex-shrink-0" />
                        <h4 className="font-semibold mb-2 ml-2 text-[#1F509A] text-lg">
                          Specialization
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2 ">
                        <Badge
                          variant="secondary"
                          className="bg-[#d4ebf8] text-md"
                        >
                          General Surgery
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-[#d4ebf8] text-md"
                        >
                          Laparoscopic Surgery
                        </Badge>
                      </div>
                    </div>
                    <div className="text-lg">
                      <div className="flex text-[#1F509A]">
                        <ClockIcon className="w-6 h-6  flex-shrink-0" />
                        <h4 className="font-semibold mb-2 ml-2 text-lg">
                          Experience
                        </h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>37+ Years of Experience in General Surgery</li>
                        <li>
                          Ex Chief Surgeon and Specialist Advisor Surgeon, CMH
                        </li>
                        <li>
                          Published over 50 peer-reviewed articles in leading
                          medical journals
                        </li>
                      </ul>
                    </div>
                    <p className="text-gray-700 text-md">
                      I am dedicated to providing exceptional care in general
                      and laparoscopic surgery, using advanced minimally
                      invasive techniques to ensure precision and promote faster
                      recovery for my patients. My approach is always
                      patient-first, focusing on creating personalized treatment
                      plans that cater to each individual’s unique needs. I am
                      passionate about staying at the forefront of surgical
                      innovations, particularly in laparoscopic procedures, and
                      continually strive to improve outcomes for patients with
                      complex surgical conditions, ensuring they receive the
                      highest quality of care.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Wrapper>
  );
}
