import React from 'react';
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap'
import { checkDone, removeTask } from './functions';
import { AppProps } from './types';


const TasKDetails = ({ task, tasks, setTasks }: AppProps) => {

	return (
		< div className='list' key={task!.id} >
			<ListGroup className="my-2 ListGroup ">
				<ListGroup.Item as='div' action variant="light" className="listItem">
					{task &&
						<p
							className={`${task.complete ? 'lineThrough' : ''} textParagraph`}>
							{task.text}
						</p>
					}
				</ListGroup.Item>
			</ListGroup>
			<ButtonGroup aria-label="Basic example" className="checkBtn mx-1">
				<Button
					className="m-1"
					onClick={() => checkDone(task!.id, tasks!, setTasks!)}
					variant="secondary">
					{task!.complete ? 'Uncheck' : 'Check'}
				</Button>
				<Button
					className="m-1"
					onClick={() => removeTask(task!.id, tasks!, setTasks!)}
					variant="danger">
					Remove
				</Button>
			</ButtonGroup>

		</div >
	);
};
export default TasKDetails;
