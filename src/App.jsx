import { Flowbite } from "flowbite-react";
import { NavbarFB } from "./components/navBar";
import { SectionHome } from "./components/sections/home";
import { SectionAbout } from "./components/sections/about";
import { SectionProjects } from "./components/sections/projects";
import { SectionSkills } from "./components/sections/skills";
import { ParticlesBGComponent } from "./components/particlesBG";
import { NavHProvider } from "./contexts/navContext";

const App = () => {
  return (
    <Flowbite>
      <NavHProvider>

        <NavbarFB />

        <SectionHome />
        <SectionAbout />
        <SectionProjects />
        <SectionSkills />

      </NavHProvider>
      <ParticlesBGComponent />
    </Flowbite >
  )
}

export default App;
