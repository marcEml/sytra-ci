export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Submit from "@/components/landing/submit";
import Hero from "@/components/landing/hero";
import Top from "@/components/landing/top";

export default function Home() {
  return (
    <>
      <Hero />
      <Top />
      {/* <Projects /> */}
      {/* <Managers /> */}
      <Submit />
    </>
  );
}
