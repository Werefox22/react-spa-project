import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from '../features/inventorySlice'

function Form() {
	const dispatch = useDispatch()
	const [name, setName] = useState("")
	const [count, setCount] = useState(1)
	const [location, setLocation] = useState("")

	const submitItem = (e) => {
		e.preventDefault()

		let item = {
			name: name,
			quantity: Math.max(Number(count), 0),
			location: location
		}

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
				<input type="number" onChange={(e) => setCount(e.target.value)} min='0' max='10000' id="numInput" />
			</div>
			<div>
				<label htmlFor="locInput">Location</label>
				<input type="number" onChange={(e) => setLocation(e.target.value)} min='1' max='10' id="locInput" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

export default Form