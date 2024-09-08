
'use client'

import  {  createContext, useState } from "react";
import  { Footer } from "./components/Footer";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Scene from "./components/Scene";


export const ContentContext = createContext("Home");


export default function Main() {

  const [content, setContent] = useState("Home");


    const handleContent = (contentStr:string) => {
      setContent(contentStr);
    };
  

  const contentSwitch = () => {
    switch (content) {
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
    <ContentContext.Provider value={ content }>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main >

                <Scene/>

        <div className="flex flex-col gap-8 items-center sm:items-start">

          <div className="mb-2 font-extrabold font-mono text-3xl ">
            Antoine Cochet
          </div>

          <div className="mb-2 self-center  font-extrabold font-mono text-3xl ">
          {contentSwitch()}

          </div>
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-nowrap justify-center">
        <Footer switchContent={handleContent} />
      </footer>
    </div>
    </ContentContext.Provider>
  );
}
