import { dom } from './dom';
export const createProject = (projectName) => {
	const projectID = Math.floor(Math.random() * 100000);
	const project = document.createElement('button');
	const projectsContainer = document.querySelector('.projects-container');
	project.setAttribute('id', projectID);
	project.setAttribute('class', 'project');
	project.innerHTML = projectName;
	projectsContainer.appendChild(project);
	return { project };
};
