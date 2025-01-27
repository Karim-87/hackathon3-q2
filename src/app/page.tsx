
import HeroSection from "@/components/HeroSection";
import FeatureBox from "@/components/FeatureBox";
import FeatureBox2 from "@/components/FeatureBox2";
import SignupSection from "@/components/SignupSection";
import ProductPage from "./ProductPage/page";
import Products from "./ProductPage/page";
export default function Home() {
  return ( 
    <main>
      
      <HeroSection/>
      <FeatureBox/>
      <Products/>
      <FeatureBox2/>
      <SignupSection/>

    
    </main>
   );
}
