
import HeroSection from "@/components/HeroSection";
import FeatureBox from "@/components/FeatureBox";
import FeatureBox2 from "@/components/FeatureBox2";
import SignupSection from "@/components/SignupSection";
import ProductPage from "./ProductPage/page";
import Products from "./ProductPage/page";
import ProductOnHero from "@/components/ProductOnHero";
export default function Home() {
  return ( 
    <main>
      
      <HeroSection/>
      <FeatureBox/>
      <ProductOnHero/>
      <FeatureBox2/>
      <ProductOnHero/>
      <SignupSection/>

    
    </main>
   );
}
