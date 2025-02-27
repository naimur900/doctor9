import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
const locations = [
  {
    title: "ইবনে সিনা ডায়াগনস্টিক সেন্টার (ধানমন্ডি)",
    address: "House # 48, Road # 9/A, Dhanmondi, Dhaka - 1209",
    hours: "6:00 PM to 7:00 PM (Monday, Friday Off)",
    phone: "09610010615",
    hotline: "10615",
  },
];
const socialLinks = [
  { icon: Facebook, name: "Facebook", href: "https://facebook.com" },
  { icon: Twitter, name: "Twitter", href: "https://twitter.com" },
  { icon: Instagram, name: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, name: "Linkdedin", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer
      className="bg-gradient-to-l bg-[#f1f1f1] p-4 shadow-lg text-black py-16 px-12"
      id="footer"
    >
      <div className="container mx-auto ">
        <div className="flex">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {locations.map((location, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-bold mb-6">{location.title}</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-[#1F509A]" />
                  <p>{location.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-[#1F509A]" />
                  <p>
                    5:00 PM to 8:00 PM{" "}
                    <span className="text-red-700">(Monday, Friday Off)</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-[#1F509A]" />
                  <p>{location.phone}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-red-700" />
                  <p className="text-red-700">{location.hotline}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Connect with Me!</h3>
            <div className="">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F509A] hover:text-[#143670] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div>
                      <link.icon className="w-6 h-6" />
                    </div>
                    <div className="text-black ">{link.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <div className="text-center">
            <p className="text-black  ">
              © 2025{" "}
              <a
                target="_blank"
                href="https://www.eminencesoftware.com/"
                className="text-[#1F509A] font-semibold"
              >
                Eminence Software Limited
              </a>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
