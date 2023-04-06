import logoImg from '../assets/check.png';
export function dom() {
	//Select the page content elements
	const content = document.querySelector('#content');
	const header = document.createElement('header');
	const aside = document.createElement('aside');
	const mainContainer = document.createElement('main');
	const footer = document.createElement('footer');

	//Create the header
	const headerContainer = document.createElement('div');
	headerContainer.className = 'header-container';
	const logo = document.createElement('img');
	logo.src = logoImg;
	logo.alt = 'logo';
	logo.className = 'header-logo';
	const headerText = document.createElement('p');
	headerText.className = 'header-text';
	headerText.innerHTML = 'ToDo';
	headerContainer.appendChild(headerText);
	headerContainer.appendChild(logo);
	header.appendChild(headerContainer);

	//Create sidebar
	const sidebarContainer = document.createElement('div');
	sidebarContainer.className = 'sidebar-container';

	const allTasks = document.createElement('button');
	const allTasksIcon = document.createElement('i');
	allTasksIcon.className = 'fa-solid fa-list-check sidebar-icon';
	allTasks.href = '/';
	allTasks.className = 'task-btn';
	allTasks.appendChild(allTasksIcon);
	allTasks.appendChild(document.createTextNode('All tasks'));

	const todayTasks = document.createElement('button');
	const todayTasksIcon = document.createElement('i');
	todayTasksIcon.className = 'fa-solid fa-calendar-day sidebar-icon';
	todayTasks.href = '/';
	todayTasks.className = 'task-btn';
	todayTasks.appendChild(todayTasksIcon);
	todayTasks.appendChild(document.createTextNode('Today'));

	const weekTasks = document.createElement('button');
	const weekTasksIcon = document.createElement('i');
	weekTasksIcon.className = 'fa-solid fa-calendar-week sidebar-icon';
	weekTasks.href = '/';
	weekTasks.className = 'task-btn';
	weekTasks.appendChild(weekTasksIcon);
	weekTasks.appendChild(document.createTextNode('This week'));

	const projects = document.createElement('h2');
	const projectsContainer = document.createElement('div');
	const addProject = document.createElement('button');
	const addProjectIcon = document.createElement('i');
	projects.className = 'projects-header';
	projectsContainer.className = 'projects-container';
	addProject.className = 'add-project-btn';
	addProjectIcon.className = 'fa-solid fa-plus';
	projects.innerHTML = 'Projects';
	addProject.appendChild(addProjectIcon);
	addProject.appendChild(document.createTextNode('Add project'));
	projectsContainer.appendChild(addProject);

	sidebarContainer.appendChild(allTasks);
	sidebarContainer.appendChild(todayTasks);
	sidebarContainer.appendChild(weekTasks);
	sidebarContainer.appendChild(projects);
	sidebarContainer.appendChild(projectsContainer);
	aside.appendChild(sidebarContainer);

	//Create main container

	//Create footer
	const copyrightSpan = document.createElement('span');
	const ghLink = document.createElement('a');
	const ghIcon = document.createElement('i');
	ghLink.href = 'https://github.com/MarkoDavkovski';
	ghLink.className = 'gh-link';
	ghIcon.className = 'fab fa-github';
	copyrightSpan.className = 'footer-span';
	copyrightSpan.innerHTML = '&copy; 2023 DavkoWeb ';
	ghLink.appendChild(ghIcon);
	copyrightSpan.appendChild(ghLink);
	footer.appendChild(copyrightSpan);

	//Append everything to the content element
	content.appendChild(header);
	content.appendChild(aside);
	content.appendChild(mainContainer);
	content.appendChild(footer);

	return content;
}
