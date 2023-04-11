let toDoArray = [];
export const createToDo = (Title, Description, DueDate, Priority) => {
	const taskID = Math.floor(Math.random() * 100000);

	toDoArray.push({ Title, Description, DueDate, Priority, taskID });

	return { Title, Description, DueDate, Priority, taskID };
};
