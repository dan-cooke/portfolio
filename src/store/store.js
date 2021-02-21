import { configureStore } from '@reduxjs/toolkit'
import { chatSlice } from '../components/Chat/chatSlice'

export default configureStore({
	reducer: {
		chat: chatSlice.reducer,
	},
})
