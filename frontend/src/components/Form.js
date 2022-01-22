import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import './Form.css';

function Form({ inputText, setInputText, tasks, setTasks, isChecked, setIsChecked }) {
	const inputTextHandler = (e) => {
		console.log(e.target.value);

		if (e.target.value === '') {
			alert('add some text');
		} else {
			setInputText(e.target.value);
		}
	};
	// const checkboxHandler = (e) => {
	// 	setIsChecked(!isChecked);
	// };
	// const unCheckHandler = (e) => {
	// 	const checkbox = document.getElementById('checkbox');
	// 	checkbox.checked = false;
	// 	checkbox.defaultValue = false;
	// };
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTasks([
			...tasks,
			{
				id: parseInt(Math.random() * 100000),
				taskDetail: inputText,
				isChecked: isChecked
			}
		]);
		setInputText('');
		// unCheckHandler();
		//setIsChecked(false);
	};

	return (
		<form className="add__task_form" onSubmit={(e) => submitTodoHandler(e)} onChange={(e) => inputTextHandler(e)}>
			<div className="icon">
				<AiOutlinePlus />
			</div>
			<input type="text" placeholder='Add a task' className="todo-input" value={inputText} />
			{/* <input
				type="checkbox"
				className="checkbox-input"
				name="checkbox"
				id="checkbox"
				onClick={() => setIsChecked()}
				onChange={() => setIsChecked(checkboxHandler)}
			/> */}
			{/* <button onClick={(e) => submitTodoHandler(e)} className="add-button" type="submit">
				Add
			</button> */}
		</form>
	);
}

export default Form;
