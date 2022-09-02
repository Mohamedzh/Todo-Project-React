import React from 'react';
import { useState } from 'react';
import { FormControl, Button, InputGroup, Stack, Form } from 'react-bootstrap'
import { updateTasks } from './functions';
import { AppProps } from './types';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Filters from './filters';

const TaskInput = ({ setTasks, tasks, setFilter }: AppProps) => {
	const [input, setInput] = useState<string>('');
	const formik = useFormik({
		initialValues: {
			text: ''
		},
		onSubmit: (values) => {
			if (setTasks && tasks) {
				updateTasks(values.text, setTasks, tasks);
				console.log(input);
			}
			formik.resetForm()
		},
		validationSchema: Yup.object({
			text: Yup.string().required("Please write your task")
		})
	})

	return (
		<div className="d-flex align-self-center flex-column" style={{ width: '900px' }}>
			<Stack direction="horizontal" gap={3} style={{ flex: '1' }}>
				<InputGroup>
					<InputGroup.Text id="basic-addon1">Your Task</InputGroup.Text>
					<Form.Control
						className="me-auto"
						placeholder="Task"
						aria-label="Username"
						aria-describedby="basic-addon1"
						value={formik.values.text}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						name="text"
					/>
				</InputGroup>
				<Button
					variant="success"
					onClick={() => {
						formik.handleSubmit()
					}}
				>Submit</Button>

				<div className="vr" />
				<Filters setFilter={setFilter} tasks={tasks} setTasks={setTasks} />
			</Stack>
			<span style={{ color: "red" }}>
				{(formik.errors.text && formik.touched.text) ? formik.errors.text : ""}
			</span>
		</div >
	);
};

export default TaskInput;
