import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	inventory: [

	]
}

// let item = {
// 	name: "",
// 	quantity: 1,
// 	location: ""
// }

export const inventorySlice = createSlice({
	name: 'grocery',
	initialState,
	reducers: {
		addItem: (state) => {
			return {
				inventory: [...state.inventory, action.payload]
			}
		},
		removeItem: (state, action) => {
			let arr = [...state.inventory]
			arr.splice(action.payload.index, 1)

			return {
				inventory: arr
			}
		},
		increaseQuantity: (state, action) => {
			let arr = [...state.inventory]
			arr[action.payload].quantity++

			return { inventory: arr }
		},
		decreaseQuantity: (state, action) => {
			let arr = [...state.inventory]
			arr[action.payload].quantity--

			return { inventory: arr }
		}
	}
})

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = inventorySlice.actions

export default inventorySlice.reducer