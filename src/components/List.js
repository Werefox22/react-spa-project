import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeItem } from '../features/inventorySlice'


function List() {
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
			<li key={index} style={{listStyle: "none"}}>
				{item.name} ({item.quantity}), Aisle {item.location} | 

				<button onClick={(e) => quantDown(e, index)}>-</button>
				<button onClick={(e) => quantUp(e, index)}>+</button> 
				<button onClick={(e) => delItem(e, index)}>X</button>
				|
			</li>
		)
	})

	return (
		<ul>
			{mappedItems}
		</ul>
	)
}

export default List