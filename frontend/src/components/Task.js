import React from 'react';
import { BiStar } from 'react-icons/bi';
import './Task.css';

function Task({ isChecked, taskDetail, tasks, setTasks, task, onChange }) {
	// const deleteHandler = () => {
	// 	setTasks(tasks.filter((el) => el.id !== task.id));
	// };

	const completeHandler = () => {
		setTasks(
			tasks.map((item) => {
				if (item.id === task.id) {
					console.log(`Task ID from Task.js to check any checkbox checked: ${task.id}`);
					return {
						...item,
						isChecked: !task.isChecked
					};
				}
				return item;
			})
		);
	};

	return (
		<div>
			<div className="task__details">
				<div className="group">
					<label className="checkbox__container">
						<input
							type="checkbox"
							id="task__checkbox"
							name="task"
							checked={isChecked}
							onChange={completeHandler}
						/>
						<span class="checkmark" />
					</label>
					<p className={isChecked ? 'under' : ''}>{taskDetail}</p>
				</div>
				<div>{/* <button onClick={deleteHandler}>delete</button> */}</div>
				<div className="important">
					<BiStar />
				</div>
			</div>
		</div>
	);
}

export default Task;
