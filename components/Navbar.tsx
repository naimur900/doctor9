"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
      // Delay setting visibility to true to allow the menu to render first
      setTimeout(() => setIsMenuVisible(true), 10);
    } else {
      setIsMenuVisible(false);
    }
  }, [isMenuOpen]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const router = useRouter();
  return (
    <header className="w-full py-3 h-[100px] sticky top-0 z-50 bg-[#cbdad5] shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <div className=" text-[#34344e] p-1">
            Brig. Gen. Prof. Dr. <br />
            Md. Saidur Rahman
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => router.push("/")}
            className=" px-4 py-2 font-semibold"
          >
            Home
          </button>
          <button
            onClick={() => router.push("/services")}
            className="hover:text-gray-600 font-semibold"
          >
            Services
          </button>
          <button
            onClick={() => router.push("/about")}
            className="hover:text-gray-600 font-semibold"
          >
            About
          </button>
          {/* <button onClick={() => scrollToSection('intro')} className="hover:text-gray-600">About</button> */}
          <button
            onClick={() => router.push("/journals")}
            className="hover:text-gray-600 font-semibold"
          >
            Journal
          </button>
          {/* <button onClick={() => scrollToSection('award')} className="hover:text-gray-600">Awards</button> */}
          <button
            onClick={() => router.push("/contact-us")}
            className="bg-[#34344e] px-4 py-2 rounded-md text-white font-semibold"
          >
            Contact
          </button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black transition-transform duration-300 ease-in-out"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="transform rotate-90" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-[100px] left-0 right-0 bg-[#cbdad5] overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav
          className={`flex flex-col text-[#34344e] items-center gap-4 py-4 transition-opacity duration-300 ease-in-out ${
            isMenuVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => {
              router.push("/");
              setIsMenuOpen(false);
            }}
            className="w-full text-center py-2 hover:bg-[#566981] hover:text-white transition-colors duration-200 font-semibold"
          >
            <span className="font-bold">Home</span>
          </button>
          <button
            onClick={() => {
              router.push("/services");
              setIsMenuOpen(false);
            }}
            className="w-full text-center py-2 hover:bg-[#566981] hover:text-white transition-colors duration-200  font-semibold"
          >
            Services
          </button>
          <button
            onClick={() => {
              router.push("/about");
              setIsMenuOpen(false);
            }}
            className="w-full text-center py-2 hover:bg-[#566981] hover:text-white transition-colors duration-200 font-semibold"
          >
            About
          </button>
          <button
            onClick={() => {
              router.push("/journals");
              setIsMenuOpen(false);
            }}
            className="w-full text-center py-2 hover:bg-[#566981] hover:text-white transition-colors duration-200 font-semibold"
          >
            Journals
          </button>
          <button
            onClick={() => {
              router.push("/contact-us");
              setIsMenuOpen(false);
            }}
            className="w-full text-center py-2 hover:bg-[#566981] hover:text-white transition-colors duration-200 font-semibold "
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
