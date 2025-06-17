import HomeComponent from "@/components/sections/Home";
import About from "@/components/About/About";
import Work from "@/components/sections/Work";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
      <HomeComponent />

      <About />

      <Work />
      <Footer />
    </>
  );
}
