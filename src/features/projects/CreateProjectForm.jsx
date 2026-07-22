import React, { useState } from "react";
import TextField from "../../ui/TextField";

function CreateProjectForm() {
  const [title, setTitle] = useState("");
  
  return;
  <form className="">
    <TextField
      label="Project Name"
      name="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  </form>;
}

export default CreateProjectForm;
