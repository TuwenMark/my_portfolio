import About from "@/components/About";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro />
      <SectionDivider/>
      <About/>
    </main>
  );
}
