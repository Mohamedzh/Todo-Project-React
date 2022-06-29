import { Button,Dropdown } from 'react-bootstrap'
const Filters = ({ updateFilter, uncheckAll }) => {
	return (
		<div className="filterbuttons">
			<div>
			<Dropdown className="">
				<Dropdown.Toggle variant="light" id="dropdown-basic">
					Filters
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item onClick={() => updateFilter('NON_COMPLETE')} href="#/action-1">Show Incomplete</Dropdown.Item>
					<Dropdown.Item onClick={() => updateFilter('COMPLETE')} href="#/action-2">Show Complete</Dropdown.Item>
					<Dropdown.Item onClick={uncheckAll} href="#/action-3">Uncheck All</Dropdown.Item>

				</Dropdown.Menu>
			</Dropdown>
			</div>
			<div className="clearbutton">
			<Button variant="light" size="sm" active onClick={() => updateFilter('ALL')}>
				Clear Filters
			</Button>

			</div>
		

		</div>
	);
};

export default Filters;
