import { ListGroup, Button, ButtonGroup } from 'react-bootstrap'
const Task = ({ task, checkDone, removeTask }) => {
	return (

		<div className='list' key={task.id}>
			<ListGroup className="my-2 ListGroup ">
				<ListGroup.Item action variant="light" className="listitem">
					<p className={`${task.complete ? 'line-through' : ''} textp`}>{task.text}</p>
				</ListGroup.Item>

			</ListGroup>
			<ButtonGroup aria-label="Basic example" className="checkbt mx-1">
				<Button className="m-1" onClick={() => checkDone(task.id)} variant="secondary">{task.complete ? 'Uncheck' : 'Check'}</Button>
				<Button className="m-1" onClick={() => removeTask(task.id)} variant="danger">Remove</Button>
			</ButtonGroup>

		</div>
	);
};

export default Task;
