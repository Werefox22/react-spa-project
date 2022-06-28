import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from '../features/inventorySlice'

function Form() {
	const dispatch = useDispatch()
	const [name, setName] = useState("")
	const [count, setCount] = useState(1)

	const submitItem = (e) => {
		e.preventDefault()

		let item = {
			name: name,
			quantity: Math.max(Number(count), 0),
			location: ""
		}

		console.log(item)

		dispatch(addItem(item))
	}

	return (
		<form onSubmit={(e) => submitItem(e)}>
			<div>
				<label htmlFor="nameInput">Name</label>
				<input type="text" onChange={(e) => setName(e.target.value)} id="nameInput" />
			</div>
			<div>
				<label htmlFor="numInput">Quantity</label>
				<input type="number" onChange={(e) => setCount(e.target.value)} min='0' id="numInput" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

export default Form