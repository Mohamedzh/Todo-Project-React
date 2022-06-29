import { useState } from 'react';
import { FormControl, Button, InputGroup } from 'react-bootstrap'
const TaskInput = ({ updateTasks }) => {
	const [input, setInput] = useState('');
	return (
		<div className="inputform">
			<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon1">Your Task</InputGroup.Text>
				<FormControl
					placeholder="Task"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>
			<Button className="mb-3 " variant="success" type="submit" onClick={() => {
				updateTasks(input);
				setInput('')
			}}>
				Submit
			</Button>

		</div >
	);
};

export default TaskInput;
