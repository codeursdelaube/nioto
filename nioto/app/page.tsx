// app/page.tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Queens } from "@/components/sections/Queens";
import { Karite } from "@/components/sections/Karite";
import { Tourteaux } from "@/components/sections/Tourteaux";
import { KeyFigures } from "@/components/sections/KeyFigures";
import { Citizen } from "@/components/sections/Citizen";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Queens />
        <Karite />
        <Tourteaux />
        <KeyFigures />
        <Citizen />
      </main>
      <Footer />
    </>
  );
}
