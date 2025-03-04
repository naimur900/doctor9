import { MapPin } from "lucide-react";
import Image from "next/image";

const workHistory = [
  {
    current: true,
    period: "CURRENTLY WORKING",
    hospital: "Ibn Sina Diagnostic Center",
    image: "/images/ibnsina-hospital.jpg",
    location: "Dhanmondi, Dhaka",
    vascularSurgeonExperience: [
      "Diagnosed and treated a wide range of surgical conditions, including gastrointestinal disorders, hernias, appendicitis, and gallbladder diseases.",
      "Performed advanced surgeries such as open hernia repairs and bowel resections, along with minimally invasive laparoscopic procedures like cholecystectomy, appendectomy, and adhesiolysis.",
      "Utilized diagnostic tools such as endoscopy, laparoscopy, and imaging techniques (e.g., CT scans and ultrasounds) to ensure accurate diagnoses and personalized surgical treatment plans.",
    ],
  },

  {
    period: "Mar,2017 to Dec,2018",
    hospital: "Combined Military Hospital",
    image: "/images/cmh-hospital.png",
    location: "Dhaka Cantonment, Dhaka",
    vascularSurgeonExperience: [
      "Supervising and mentoring medical staff, residents, and surgical trainees, ensuring the highest standards in surgical procedures, patient care, and professional development.",
      "Performing complex general and laparoscopic surgeries and emergency cases, ensuring the best possible outcomes for all patients.",
      "Spearheading the development and implementation of advanced surgical protocols, innovative techniques, and comprehensive training programs for medical professionals.",
    ],
  },
];

export function WorkHistory() {
  return (
    <section className="bg-[#f1f1f1] rounded-lg mt-12 py-9" id="work">
      <div className="">
        <div className="text-center px-9 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Working History
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A journey of growth, skills, and success across diverse roles and
            impactful projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8  p-10 rounded-lg">
          {workHistory.map((item, index) => (
            <div key={index} className="group">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg ">
                <Image
                  src={item.image}
                  alt={item.hospital}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2 mb-2">
                {/* {item.current && (
                  <span className="text-sm text-blue-600 font-medium">
                    {item.period}
                  </span>
                )} */}
                {/* {!item.current && (
                  <span className="text-sm text-gray-600">
                    {item.period}
                  </span>
                )} */}
                <h3 className="font-bold text-xl">{item.hospital}</h3>
                <h2 className="flex gap-2 ">
                  <MapPin color="#1F509A"></MapPin> {item.location}
                </h2>
              </div>
              <div>
                <ul>
                  {item.vascularSurgeonExperience?.map((exp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-[#1F509A] rounded-full mt-2 mr-3 shrink-0" />
                      <span className="text-gray-700">{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
