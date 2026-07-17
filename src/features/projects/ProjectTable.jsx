import React from "react";
import useOwnerProjects from "./useOwnerProjects";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  // isLoading => loading...
  // projects.length = 0 => empty ...

  return <div>ProjectTable</div>;
}

export default ProjectTable;
