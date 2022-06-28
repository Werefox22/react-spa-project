import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeItem } from '../features/inventorySlice'


function Table() {
	const list = useSelector((state) => state.inventory.list)
	const dispatch = useDispatch()

	const quantUp = (e, index) => {
		e.preventDefault()

		dispatch(increaseQuantity(index))
	}

	const quantDown = (e, index) => {
		e.preventDefault()

		dispatch(decreaseQuantity(index))
	}

	const delItem = (e, index) => {
		e.preventDefault()

		dispatch(removeItem(index))
	}

	const mappedItems = list.map((item, index) => {
		return (
			<tr key={index}>
				<td>{item.name}</td>
				<td>{item.quantity}</td>
				<td>{item.location}</td>
				<td>
					<button onClick={(e) => quantDown(e, index)}>-</button>
					<button onClick={(e) => quantUp(e, index)}>+</button> 
					<button onClick={(e) => delItem(e, index)}>X</button>
				</td>
			</tr>
		)
	})

	return (
		<table style={{
			width: "30%", 
			margin: "auto",
			}}>
			<thead>
				<tr>
					<td>Name</td>
					<td>Quantity</td>
					<td>Aisle</td>
					<td>Actions</td>
				</tr>
			</thead>
			<tbody>
				{mappedItems}
			</tbody>
		</table>
	)
}

export default Table