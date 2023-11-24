import React, { useState } from 'react';
import './Projects.css';

const Project = () => {
  const [projects, setProjects] = useState([]);

  const [showAddProject, setShowAddProject] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [taskToPerform, setTaskToPerform] = useState('');

  const handleAddProject = () => {
    setShowAddProject(true);
  };

  const handleProjectSubmit = (event) => {
    event.preventDefault();

    const newProject = {
      name: projectName,
      start: startTime,
      end: endTime,
      assigned: assignedTo,
      task: taskToPerform
    };

    setProjects([...projects, newProject]);
    setShowAddProject(false);
    setProjectName('');
    setStartTime('');
    setEndTime('');
    setAssignedTo('');
    setTaskToPerform('');
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleAssignedToChange = (event) => {
    setAssignedTo(event.target.value);
  };

  const handleTaskToChange = (event) => {
    setTaskToPerform(event.target.value);
  };

  return (
    <div className="project">
      <h1>Projects</h1>
      <button onClick={handleAddProject}>Add Project</button>

      {showAddProject && (
        <form onSubmit={handleProjectSubmit}>
          <label htmlFor="project-name">Project Name:</label>
          <input type="text" id="project-name" value={projectName} onChange={handleProjectNameChange} />

          <label htmlFor="start-time">Start Time:</label>
          <input type="text" id="start-time" value={startTime} onChange={handleStartTimeChange} />

          <label htmlFor="end-time">End Time:</label>
          <input type="text" id="end-time" value={endTime} onChange={handleEndTimeChange} />

          <label htmlFor="assigned-to">Assigned To:</label>
          <select id="assigned-to" value={assignedTo} onChange={handleAssignedToChange}>
            <option value="">Select a team:</option>
            <option value="webdev">Web Development</option>
            <option value="uiux">UI/UX</option>
            <option value="cyberware">Cyberware</option>
            <option value="python">Python</option>
            <option value="salesforce">Salesforce</option>
            <option value="snowflake">Snowflake</option>
            <option value="mulesoft">MuleSoft</option>
            <option value="testing">Testing</option>
          </select>
          <label htmlFor="task">Task To Perform:</label>
          <input type="text" id="task" value={taskToPerform} onChange={handleTaskToChange} />


          <button type="submit">OK</button>
        </form>
      )}

      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <p>Start Time: {project.start}</p>
          <p>End Time: {project.end}</p>
          <p>Assigned To: {project.assigned}</p>
          <p>Task To Perform: {project.task}</p>
          <button onClick={() => handleDeleteProject(index)}>Delete Project</button>
        </div>
      ))}
    </div>
  );
};

export default Project;
