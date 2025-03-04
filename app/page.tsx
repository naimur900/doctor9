import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { Journals } from "@/components/Journals";
import PatientSuccess from "@/components/PatientSuccessStory";
import Services from "@/components/Services";
import { WorkHistory } from "@/components/WorkHistory";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Wrapper>
        <HeroSection />
      </Wrapper>
      <Wrapper>
        <Services />
      </Wrapper>
      <Wrapper>
        <IntroSection />
      </Wrapper>
      <Wrapper>
        <PatientSuccess></PatientSuccess>
      </Wrapper>
      <Wrapper>
        <WorkHistory />
      </Wrapper>
      <Wrapper>
        <Journals></Journals>
      </Wrapper>
      {/* <Certificates/> */}
      {/* <ProfessionalAwards /> */}
      {/* <Footer></Footer> */}
    </main>
  );
}
