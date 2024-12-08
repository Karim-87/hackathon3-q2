import AboutHero from "@/components/AboutHero"
import AboutSignup from "@/components/AboutSingup"
import FeatureBox from "@/components/FeatureBox"
import FeatureBox2 from "@/components/FeatureBox2"

function aboutPage() {
   return (
        <div >
           <AboutHero/>
           <FeatureBox2/>
           <FeatureBox/>
           <AboutSignup/>
        </div>
    )
};
export default aboutPage