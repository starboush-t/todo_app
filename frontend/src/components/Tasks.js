import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tasks.css';
import Task from './Task';
import Form from './Form';

function TaskContainer() {
	const [ tasks, setTasks ] = useState([]);
	const [ inputText, setInputText ] = useState('');
	const [ isChecked, setIsChecked ] = useState(false);

	useEffect(() => {
		const fetchUsers = async () => {
			const { data } = await axios.get('/api/users');
			setTasks(data);
			//console.log(data);
			//console.table(data);
		};
		fetchUsers();
	}, []);

	// const completeHandler = () => {
	// 	setTasks(
	// 		tasks.map((item, task, index) => {
	// 			if (item.id === task.id) {
	// 				console.log(task.isChecked);
	// 				return {
	// 					...item,
	// 					isChecked: !task.isChecked
	// 				};
	// 			}
	// 			return item;
	// 		})
	// 	);
	// };
	return (
		<div className="task__screen">
			<div className="taskbar">
				<div>
					<h2 className="title">Task</h2>
				</div>
				<div className="taskbar__buttons" />
			</div>
			<div className="tasks">
				{tasks.map((task, index) => (
					<Task
						key={task.id}
						task={task}
						taskDetail={task.taskDetail}
						isChecked={task.isChecked}
						tasks={tasks}
						setTasks={setTasks}
						// onChange={completeHandler}
					/>
				))}
			</div>
			<div className="div__form">
				<Form
					inputText={inputText}
					setInputText={setInputText}
					tasks={tasks}
					setTasks={setTasks}
					isChecked={isChecked}
					setIsChecked={setIsChecked}
				/>
			</div>
		</div>
	);
}

export default TaskContainer;
