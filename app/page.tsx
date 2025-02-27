import { HeroSection } from "@/components/hero-section";
import { IntroSection } from "@/components/intro-section";
import { Journals } from "@/components/journals";
// import { NavBar } from '@/components/nav-bar'
import PatientSuccess from "@/components/patient-success-story";
import Services from "@/components/services";
import { WorkHistory } from "@/components/work-history";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <NavBar /> */}
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
