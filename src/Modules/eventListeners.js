import { createToDo } from './create-to-do';
import { createProject } from './createProject';
import { parseISO, startOfToday } from 'date-fns';
export const eventListeners = () => {
	//add project button listener
	const addProjectBtn = document.querySelector('.add-project-btn');
	const addProjectForm = document.querySelector('.add-project-form');
	const cancelProjectButton = addProjectForm.querySelector('.cancel-btn');
	const createProjectButton = addProjectForm.querySelector('.add-btn');
	const addProjectInput = addProjectForm.querySelector('#project-name');

	addProjectBtn.addEventListener('click', () => {
		addProjectForm.style.display = 'flex';
	});
	cancelProjectButton.addEventListener('click', () => {
		addProjectForm.style.display = 'none';
	});
	createProjectButton.addEventListener('click', (event) => {
		event.preventDefault();
		const inputField = addProjectInput.value.trim();
		if (!inputField) {
			alert('Please enter a project name');
			return;
		}
		const projectName = addProjectInput.value;
		createProject(projectName);
		addProjectInput.value = '';
		addProjectForm.style.display = 'none';
	});

	//create task button listener
	const createTaskBtn = document.querySelector('.create-task-btn');
	const modal = document.querySelector('#taskModal');
	const cancelModalBtn = modal.querySelector('.cancel');
	const closeModalBtn = modal.querySelector('.close');
	const addTaskBtn = modal.querySelector('#add-task-btn');

	createTaskBtn.addEventListener('click', (e) => {
		e.preventDefault();
		modal.style.display = 'block';
	});
	cancelModalBtn.addEventListener('click', function (event) {
		modal.style.display = 'none';
	});
	closeModalBtn.addEventListener('click', function (event) {
		modal.style.display = 'none';
	});
	window.addEventListener('click', function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	});
	//Select modal input values
	const taskName = modal.querySelector('#task-name');
	const taskDescription = modal.querySelector('#task-description');
	const taskDate = modal.querySelector('#task-date');
	const taskPriority = modal.querySelector('#task-priority');

	addTaskBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (
			taskName.value === '' ||
			taskDescription.value === '' ||
			taskDate.value === '' ||
			taskPriority.value === ''
		) {
			alert('All field are required');
			return;
		}
		if (parseISO(taskDate.value) < startOfToday()) {
			alert('You have entered a date that has already passed!');
			return;
		}
		createToDo(
			taskName.value,
			taskDescription.value,
			taskDate.value,
			taskPriority.value
		);

		modal.style.display = 'none';
		resetModalValues();
	});

	function resetModalValues() {
		taskName.value = '';
		taskDescription.value = '';
		taskDate.value = '';
		taskPriority.value = '';
	}
};
