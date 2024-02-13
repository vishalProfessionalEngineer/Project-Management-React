import React from "react";
import Button from "./Button";
import { SelectedProject } from "./SelectedProject";

const ProjectSideBar = ({ onStartAddProject, projects, onSelectProject, slectedProjectId }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let CssClass = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if(project.id === slectedProjectId){
            CssClass += ' bg-stone-800 text-stone-200'
          }
          else{
            CssClass += ' text-stone-400'
          }
          return (
            <li key={project.id}>
            <button className= {CssClass}
            onClick={() => onSelectProject(project.id)}>
              {project.title}
            </button>
          </li>
          );
        }
          
        )}
      </ul>
    </aside>
  );
};

export default ProjectSideBar;
