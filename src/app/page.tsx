import { useRef } from "react";
import Footer, { FooterModel } from "./components/Footer";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";


export default function Home() {

  const [selected, setSelected] = useRef("Home");

  const footerArgs: FooterModel = {
    onChanged: (arg: string) => {
      setSelected(arg)
    }
  }

  const contentSwitch = () => {
    switch (selected) {
      case "Home":
        return <Home />;
      case "Projects":
        return <Projects />;

      case "Experiences":
        return <Experiences />;
      case "Contact":
        return <Contact />;
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="mb-2">
          Antoine Cochet
        </div>

        {contentSwitch()}

      </main>
      <footer className="row-start-3 flex gap-6 flex-nowrap justify-center">
        <Footer props={footerArgs} />
      </footer>
    </div>
  );
}
