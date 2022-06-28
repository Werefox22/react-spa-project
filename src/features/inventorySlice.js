import { createSlice } from "@reduxjs/toolkit";
import Items from '../items'

const initialState = {
	list: Items
}

export const inventorySlice = createSlice({
	name: 'inventory',
	initialState,
	reducers: {
		addItem: (state, action) => {
			return { list: [...state.list, action.payload] }
		},
		removeItem: (state, action) => {
			let arr = [...state.list]
			arr.splice(action.payload.index, 1)

			return { list: arr }
		},
		increaseQuantity: (state, action) => {
			let arr = [...state.list]
			arr[action.payload].quantity++

			return { list: arr }
		},
		decreaseQuantity: (state, action) => {
			let arr = [...state.list]
			arr[action.payload].quantity--

			return { list: arr }
		}
	}
})

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = inventorySlice.actions

export default inventorySlice.reducer