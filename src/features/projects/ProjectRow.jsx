import React from "react";
import toLocalDateShort from "../../utils/toLocalDateShort";
import truncateText from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";

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
      <td>
        <div className="flex items-center gap-x-4">
          <button>
            <TbPencilMinus className="w-5 h-5 text-primary-900" />
          </button>
          <Model open={true}>this is modal...</Model>
          <button>
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
