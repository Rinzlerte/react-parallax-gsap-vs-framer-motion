import ParalaxByFramerMotion from "@/components/ParalaxByFramerMotion";
import ParalaxByGsap from "@/components/ParalaxByGsap";
import ParallaxEasy from "@/components/ParallaxEasy";

export default function Home() {
  return (
    <main>
      <ParalaxByGsap title="GSAP SAMMPLE"/>
      <ParallaxEasy title="GSAP SAMMPLE EASY"/>
      <ParalaxByFramerMotion title="FRAMER MOTION SAMMPLE"/>
    </main>
  )
}
