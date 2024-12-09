import Image from "next/image";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Section from "@/app/components/Section";
import Footer from "@/app/components/Footer";

export default function home(){
  return(
    <div>
      <Header/>
      <Hero/>
     <Section/>
     <Footer/>
    

    </div>
  )
}