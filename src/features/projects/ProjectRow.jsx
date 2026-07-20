import React from "react";
import toLocalDateShort from "../../utils/toLocalDateShort";
import truncateText from "../../utils/truncateText";

function ProjectRow({ project, index }) {
  return (
    <Table.Row>
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
    </Table.Row>
  );
}

export default ProjectRow;
