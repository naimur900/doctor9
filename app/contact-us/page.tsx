"use client";

import Wrapper from "@/components/Wrapper";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import ContactForm from "./contact-form";
import Map from "./map";
export default function ContactPage() {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="min-h-dvh bg-[#f1f1f1] rounded-lg"
      >
        <div className="container mx-auto md:px-12 px-6 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

              <p className="text-muted-foreground mb-4">
                We would love to hear from you. Please fill out the form or use
                the contact information below.
              </p>

              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="space-y-4 ">
                <h2 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h2>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5  mt-1 text-[#1F509A]" />
                  <div>
                    <p className="  ">
                      ইবনে সিনা ডায়াগনস্টিক সেন্টার (ধানমন্ডি)
                    </p>
                    <p>House # 48, Road # 9/A, Dhanmondi, Dhaka - 1209</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5  text-[#1F509A]" />
                  <p>
                    6:00 PM to 7:00 PM{" "}
                    <span className="text-red-700">(Monday, Friday Off)</span>
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5  text-[#1F509A]" />
                  <span>+88 09610010615</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5  text-red-700" />
                  <span className="text-red-700">10615</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5  text-[#1F509A]" />
                  <span>info@ibnsiantrust.com</span>
                </div>
              </div>
              <div className="mt-6">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
}
