import React from "react";
import Loading from "../../ui/Loading";
import useOwnerProjects from "./useOwnerProjects";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (!projects.length) return <Empty resourceName="project" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>name</th>
        <th>category</th>
        <th>budget</th>
        <th>deadline</th>
        <th>tags</th>
        <th>freelancer</th>
        <th>situation</th>
        <th>activities</th>
      </Table.Header>

      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
