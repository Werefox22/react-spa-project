import React from "react";
import { useSelector, useDispatch } from 'react-redux'


function List() {
	const list = useSelector((state) => state.inventory.list)

	const mappedItems = list.map((item, index) => {
		return (
			<li key={index}>
				{item.name} ({item.quantity})
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