import React, { useState } from 'react';
import './Teamdashboard.css';

const Teamdashboard = () => {
  const [selectedTeam, setSelectedTeam] = useState('webdev');
  const [teamDetails, setTeamDetails] = useState({
    webdev: {
      teamName: 'Web Development Team',
      numOfProjects: 5,
      numOfMembers: 10,
      numOfTasks: 10,
      members: [
        'Akhil',
        'krishna Vamsi',
        'Raghavendra',
        'Satyanarayana',
        'Abdul',
        'Manikanta',
        'Siva',
        'Srikanth',
        'Eswar',
      ],
    },
    uiux: {
      teamName: 'UI/UX Team',
      numOfProjects: 5,
      numOfMembers: 8,
      numOfTasks: 20,
      members: [
        'Alice Johnson',
        'Tom Williams',
        'Emily Davis',
        'Michael Lee',
        'Sarah Wilson',
        'David Miller',
        'Karen Jones',
        'Kevin Brown',
      ],
    },
    cyberware: {
      teamName: 'Cyberware Team',
      numOfProjects: 3,
      numOfMembers: 6,
      numOfTasks: 12,
      members: [
        'Alice Johnson',
        'Tom Williams',
        'Emily Davis',
        'Michael Lee',
        'Sarah Wilson',
        'David Miller',
        'Karen Jones',
        'Kevin Brown',
      ],
    },
    python: {
      teamName: 'Python Team',
      numOfProjects: 8,
      numOfMembers: 12,
      numOfTasks: 35,
      members: [
        'Alice Johnson',
        'Tom Williams',
        'Emily Davis',
        'Michael Lee',
        'Sarah Wilson',
        'David Miller',
        'Karen Jones',
        'Kevin Brown',
      ],
    },
    salesforce: {
      teamName: 'Salesforce Team',
      numOfProjects: 2,
      numOfMembers: 4,
      numOfTasks: 8,
      members: [
        'Alice Johnson',
        'Tom Williams',
        'Emily Davis',
        'Michael Lee',
        'Sarah Wilson',
        'David Miller',
        'Karen Jones',
        'Kevin Brown',
      ],
    },
    snowflake: {
      teamName: 'Snowflake Team',
      numOfProjects: 4,
      numOfMembers: 7,
      numOfTasks: 15,
      members: [
        'Alice Johnson',
        'Tom Williams',
        'Emily Davis',
        'Michael Lee',
        'Sarah Wilson',
        'David Miller',
        'Karen Jones',
        'Kevin Brown',
      ],
    },
    mulesoft: {
      teamName: 'MuleSoft Team',
      numOfProjects: 6,
      numOfMembers: 10,
      numOfTasks: 30,
      members: [
        'Alice Johnson',
        'Tom Williams',
        'Emily Davis',
        'Michael Lee',
        'Sarah Wilson',
        'David Miller',
        'Karen Jones',
        'Kevin Brown',
      ],
    },
    testing: {
      teamName: 'Testing Team',
      numOfProjects: 7,
      numOfMembers: 11,
      numOfTasks: 40,
      members: [
        'Alice Johnson',
        'Tom Williams',
        'Emily Davis',
        'Michael Lee',
        'Sarah Wilson',
        'David Miller',
        'Karen Jones',
        'Kevin Brown',
      ],
    },
  });

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  return (
    <div className="team-details">
      <div className="team-dropdown">
        <label htmlFor="team-select">Select a team:</label>
        <select id="team-select" value={selectedTeam} onChange={handleTeamChange}>
          <option value="webdev">Web Development</option>
          <option value="uiux">UI/UX</option>
          <option value="cyberware">Cyberware</option>
          <option value="python">Python</option>
          <option value="salesforce">Salesforce</option>
          <option value="snowflake">Snowflake</option>
          <option value="mulesoft">MuleSoft</option>
          <option value="testing">Testing</option>
        </select>
      </div>
      <div className="team-info">
        <h2>{teamDetails[selectedTeam].teamName}</h2>
        <p>Number of projects: {teamDetails[selectedTeam].numOfProjects}</p>
        <p>Number of members: {teamDetails[selectedTeam].numOfMembers}</p>
        <p>Number of tasks: {teamDetails[selectedTeam].numOfTasks}</p>
        <p>Team members:</p>
  
<ul>
    {teamDetails[selectedTeam].members.map((member) => (
      <li key={member}>{member}</li>
    ))}
  </ul>
        
      </div>
    </div>
  );
};

export default Teamdashboard;
