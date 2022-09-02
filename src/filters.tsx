import React from 'react';
import { Button, Dropdown } from 'react-bootstrap'
import { uncheckAll, updateFilter } from './functions';
import { Task, AppProps } from './types';

const Filters = ({ setFilter, tasks, setTasks }: AppProps) => {
	return (
		<div className="d-flex">
				<Dropdown className="mt-3">
					<Dropdown.Toggle
						variant="outline-danger"
						id="dropdown-basic">
						Filters
					</Dropdown.Toggle>
					{setFilter && setTasks && tasks &&
						<Dropdown.Menu>
							<Dropdown.Item
								onClick={() => updateFilter('NON_COMPLETE', setFilter)} href="#/action-1">
								Show Incomplete
							</Dropdown.Item>
							<Dropdown.Item onClick={() => updateFilter('COMPLETE', setFilter)} href="#/action-2">
								Show Complete
							</Dropdown.Item>
							<Dropdown.Item onClick={() => uncheckAll(tasks, setTasks)} href="#/action-3">
								Uncheck All
							</Dropdown.Item>
						</Dropdown.Menu>
					}
				</Dropdown>
			{setFilter &&
				<div className="clearButton">
					<Button
						variant="outline-dark"
						size="sm"
						active onClick={() => updateFilter('ALL', setFilter)}>
						Clear Filters
					</Button>
				</div>
			}
		</div>
	);
};

export default Filters;
