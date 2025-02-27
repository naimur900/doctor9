"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Wrapper from "@/components/Wrapper";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Download, FileText, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

// Update the PDF path to the public directory
const samplePdfPath = "/pdf/blank.pdf";

export const journals = [
  {
    id: "item-1",
    title: "To be added later",
    date: "N/A",
    abstract: "The paper will be added later...",
    pdfUrl: samplePdfPath,
  },
];

// const journals = [
//   {
//     id: "item-1",
//     title: "Advanced Techniques in Microsurgery",
//     date: "2023",
//     abstract: "This paper discusses the latest advancements in microsurgical techniques for urological procedures...",
//     pdfUrl: samplePdfPath
//   },
//   {
//     id: "item-2",
//     title: "Innovations in Kidney Stone Treatment",
//     date: "2023",
//     abstract: "A comprehensive review of modern approaches to kidney stone management and treatment...",
//     pdfUrl: samplePdfPath
//   },
//   {
//     id: "item-3",
//     title: "Endourology: Current Practices",
//     date: "2022",
//     abstract: "An overview of current practices and emerging trends in endourological procedures...",
//     pdfUrl: samplePdfPath
//   }
// ]

export default function Journals() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [openItem, setOpenItem] = useState<string | null>(null); // Track open accordion item

  useEffect(() => {
    if (selectedPdf) {
      const fullUrl = `${window.location.origin}${selectedPdf}`;
      setPdfUrl(fullUrl);
    } else {
      setPdfUrl(null);
    }
  }, [selectedPdf]);

  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="min-h-dvh"
      >
        <section>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Journals & Publications
            </h2>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              value={openItem ?? undefined}
              onValueChange={(value) => setOpenItem(value)}
            >
              {journals.map((journal) => (
                <AccordionItem
                  key={journal.id}
                  value={journal.id}
                  className="bg-white rounded-lg shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-start text-left">
                      <FileText className="w-5 h-5 mr-3 mt-1 text-[#1F509A] " />
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">
                          {journal.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Published: {journal.date}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4">
                      <p className="text-gray-600">{journal.abstract}</p>
                      <div className="pt-2 flex gap-4">
                        <button
                          onClick={() => setSelectedPdf(journal.pdfUrl)}
                          className="inline-flex items-center text-[#1F509A]  hover:text-[#5092f5]"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Preview PDF
                        </button>
                        <a
                          href={journal.pdfUrl}
                          download
                          className="inline-flex items-center text-[#1F509A]  hover:text-[#5092f5]"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {pdfUrl && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto relative">
                  <button
                    onClick={() => setSelectedPdf(null)}
                    className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full z-10"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="p-4 h-[80vh]">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                      <Viewer fileUrl={pdfUrl} />
                    </Worker>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </motion.div>
    </Wrapper>
  );
}
