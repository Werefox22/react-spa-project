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
			// expects action.payload to be an item object
			return { list: [...state.list, action.payload] }
		},
		removeItem: (state, action) => {
			// expects action.payload to be an index
			let arr = [...state.list]
			arr.splice(action.payload, 1)

			return { list: arr }
		},
		increaseQuantity: (state, action) => {
			// expects action.payload to be an index
			let arr = [...state.list]
			let i = action.payload
			arr[i] = {
				name: arr[i].name,
				quantity: arr[i].quantity + 1,
				location: arr[i].location
			}

			return { list: arr }
		},
		decreaseQuantity: (state, action) => {
			// expects action.payload to be an index
			let arr = [...state.list]
			let i = action.payload
			arr[i] = {
				name: arr[i].name,
				quantity: Math.max(arr[i].quantity - 1, 0),
				location: arr[i].location
			}

			return { list: arr }
		}
	}
})

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = inventorySlice.actions

export default inventorySlice.reducer