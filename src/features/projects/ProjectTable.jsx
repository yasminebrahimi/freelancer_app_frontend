import React from "react";
import Loading from "../../ui/Loading";
import useOwnerProjects from "./useOwnerProjects";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";

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
          <tr key={project.id}>
            <td>{index + 1}</td>
            <td>{truncateText(project.title, 30)}</td>
            <td>{project.category.title}</td>
            <td>{project.budget}</td>
            <td>{toLocalDateShort(project.deadline)}</td>

            <td>
              <div className="felx felx-wrap items-center gap-2 max-w-[200px]">
                {project.tag.map((tag) => (
                  <span className="badge badge--secondary" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </td>

            <td>{project.freelancer?.name || "-"}</td>
            <td>
              {project.status === "OPEN" ? (
                <span className="badge badge--success">Open</span>
              ) : (
                <span className="badge badge--danger">Close</span>
              )}
            </td>
            <td>....</td>
          </tr>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
