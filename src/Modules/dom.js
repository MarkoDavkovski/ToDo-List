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

	//Append everything to the header element
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

	//Create add project form
	const addProjectForm = document.createElement('form');
	addProjectForm.className = 'add-project-form';

	const addProjectLabel = document.createElement('label');
	addProjectLabel.textContent = 'Input';
	addProjectLabel.setAttribute('for', 'input-field');

	const addProjectInput = document.createElement('input');
	addProjectInput.setAttribute('type', 'text');
	addProjectInput.setAttribute('id', 'input-field');
	addProjectInput.setAttribute('name', 'input-field');

	const inputLabelContainer = document.createElement('div');
	inputLabelContainer.className = 'input-label-container';
	inputLabelContainer.appendChild(addProjectLabel);
	inputLabelContainer.appendChild(addProjectInput);

	const cancelButton = document.createElement('button');
	cancelButton.textContent = 'Cancel';
	cancelButton.setAttribute('type', 'button');
	cancelButton.className = 'cancel-btn';
	cancelButton.addEventListener('click', () => {});

	const addButton = document.createElement('button');
	addButton.textContent = 'Add Project';
	addButton.setAttribute('type', 'button');
	addButton.className = 'add-btn';
	addButton.addEventListener('click', () => {});

	const projectFormBtnContainer = document.createElement('div');
	projectFormBtnContainer.className = 'project-btn-container';

	projectFormBtnContainer.appendChild(cancelButton);
	projectFormBtnContainer.appendChild(addButton);

	addProjectForm.appendChild(inputLabelContainer);
	addProjectForm.appendChild(document.createElement('br'));
	addProjectForm.appendChild(projectFormBtnContainer);

	//Append elements to the ProjectsContainer
	addProject.appendChild(addProjectIcon);
	addProject.appendChild(document.createTextNode('Add project'));
	projectsContainer.appendChild(addProjectForm);
	projectsContainer.appendChild(addProject);

	//Append everything to the aside element
	sidebarContainer.appendChild(allTasks);
	sidebarContainer.appendChild(todayTasks);
	sidebarContainer.appendChild(weekTasks);
	sidebarContainer.appendChild(projects);
	sidebarContainer.appendChild(projectsContainer);
	aside.appendChild(sidebarContainer);

	//Create main container
	const mainHeader = document.createElement('h1');
	mainHeader.className = 'main-header';
	mainHeader.innerHTML = 'All Tasks';

	const tasksContainer = document.createElement('div');
	tasksContainer.className = 'task-container';

	const createTaskBtn = document.createElement('button');
	createTaskBtn.className = 'add-task-btn';
	const addTaskIcon = document.createElement('i');
	addTaskIcon.className = 'fa-solid fa-plus';

	createTaskBtn.appendChild(addTaskIcon);
	createTaskBtn.appendChild(document.createTextNode('Create Task'));
	tasksContainer.appendChild(createTaskBtn);

	//Create a modal
	const modal = document.createElement('div');
	modal.id = 'taskModal';
	modal.classList.add('modal');

	const modalContent = document.createElement('div');
	modalContent.classList.add('modal-content');

	const closeBtn = document.createElement('span');
	closeBtn.classList.add('close');
	closeBtn.innerHTML = '&times;';

	const modalHeader = document.createElement('h2');
	modalHeader.innerText = 'Create a New Task';

	const modalForm = document.createElement('form');

	const nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'task-name');
	nameLabel.innerText = 'Task Name:';
	const nameInput = document.createElement('input');
	nameInput.setAttribute('type', 'text');
	nameInput.setAttribute('id', 'task-name');
	nameInput.setAttribute('name', 'task-name');
	nameInput.required = true;

	const descLabel = document.createElement('label');
	descLabel.setAttribute('for', 'task-description');
	descLabel.innerText = 'Task Description:';
	const descInput = document.createElement('textarea');
	descInput.setAttribute('id', 'task-description');
	descInput.setAttribute('name', 'task-description');

	const dateLabel = document.createElement('label');
	dateLabel.setAttribute('for', 'task-date');
	dateLabel.innerText = 'Task Date:';
	const dateInput = document.createElement('input');
	dateInput.setAttribute('type', 'date');
	dateInput.setAttribute('id', 'task-date');
	dateInput.setAttribute('name', 'task-date');
	dateInput.required = true;

	const priorityLabel = document.createElement('label');
	priorityLabel.setAttribute('for', 'task-priority');
	priorityLabel.innerText = 'Task Priority:';
	const prioritySelect = document.createElement('select');
	prioritySelect.setAttribute('id', 'task-priority');
	prioritySelect.setAttribute('name', 'task-priority');
	const lowOption = document.createElement('option');
	lowOption.setAttribute('value', 'low');
	lowOption.innerText = 'Low';
	const medOption = document.createElement('option');
	medOption.setAttribute('value', 'medium');
	medOption.innerText = 'Medium';
	const highOption = document.createElement('option');
	highOption.setAttribute('value', 'high');
	highOption.innerText = 'High';
	prioritySelect.appendChild(lowOption);
	prioritySelect.appendChild(medOption);
	prioritySelect.appendChild(highOption);

	const addBtn = document.createElement('button');
	addBtn.setAttribute('type', 'submit');
	addBtn.innerText = 'Add Task';
	const cancelBtn = document.createElement('button');
	cancelBtn.setAttribute('type', 'button');
	cancelBtn.classList.add('cancel');
	cancelBtn.innerText = 'Cancel';
	const modalBtnContainer = document.createElement('div');
	modalBtnContainer.className = 'modal-btn-container';
	modalBtnContainer.appendChild(cancelBtn);
	modalBtnContainer.appendChild(addBtn);

	// Add all the elements to the modal
	modalForm.appendChild(nameLabel);
	modalForm.appendChild(nameInput);
	modalForm.appendChild(descLabel);
	modalForm.appendChild(descInput);
	modalForm.appendChild(dateLabel);
	modalForm.appendChild(dateInput);
	modalForm.appendChild(priorityLabel);
	modalForm.appendChild(prioritySelect);
	modalForm.appendChild(modalBtnContainer);

	modalContent.appendChild(closeBtn);
	modalContent.appendChild(modalHeader);
	modalContent.appendChild(modalForm);

	modal.appendChild(modalContent);

	// Get the add task button and cancel button
	const addTaskBtn = modal.querySelector("button[type='submit']");
	const cancelTaskBtn = modal.querySelector('.cancel');

	// Show the modal when the add task button is clicked
	addBtn.addEventListener('click', function (event) {
		event.preventDefault();
		modal.style.display = 'block';
	});

	// Hide the modal when the cancel button or close button is clicked
	cancelBtn.addEventListener('click', function (event) {
		modal.style.display = 'none';
	});

	closeBtn.addEventListener('click', function (event) {
		modal.style.display = 'none';
	});

	window.addEventListener('click', function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	});

	//Append elements to main container
	mainContainer.appendChild(mainHeader);
	mainContainer.appendChild(tasksContainer);
	mainContainer.appendChild(modal);

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
