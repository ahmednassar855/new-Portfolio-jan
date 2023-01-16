import React, { useContext } from "react";
import ProjectItem from "./ProjectItem";
import { SwitchThemeContext } from './../../Context/SwitchThemeStore';

const projectData = [
  {
    src: "../../../public/assets/project-01.jpg",
    title: " first project",
    siteLink: "asdsadads",
    gitHubLink: "assaad@github",
  },
  {
    src: "../../../public/assets/project-02.jpg",
    title: " second project",
    siteLink: "asdsadads",
    gitHubLink: "assaad@github",
  },
  {
    src: "../../../public/assets/project-03.jpg",
    title: " third project",
    siteLink: "asdsadads",
    gitHubLink: "assaad@github",
  },
  {
    src: "../../../public/assets/project-04.jpg",
    title: " fourth project",
    siteLink: "asdsadads",
    gitHubLink: "assaad@github",
  },
];

const Projects = () => {

  let { switchTheme  } = useContext(SwitchThemeContext);
  return (
    <div id="projects" className={switchTheme ? " " : " bg-[#001b5e]"}>
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className={switchTheme ? "text-center text-4xl font-bold text-[#001b5e]" : "text-center text-4xl font-bold text-stone-300"}>
        Projects
      </h1>
      <p className={switchTheme ? "text-center py-8" : "text-center py-8 text-stone-300"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa
        accusamus sit aut reiciendis quisquam iste aperiam vero distinctio quas
        facere incidunt alias beatae autem odio adipisci, quia cumque animi.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        {projectData.map((item, idx) => (
          <ProjectItem
            key={idx}
            imageProject={item.src}
            title={item.title}
            siteLink={item.siteLink}
            gitHubLink={item.gitHubLink}
          />
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Projects;
