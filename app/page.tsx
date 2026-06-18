import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LargeServiceCards from "@/components/LargeServiceCards";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import WorkAndBlog from "@/components/WorkAndBlog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <LargeServiceCards />
        <About />
        <Testimonials />
        <WhyUs />
        <WorkAndBlog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
