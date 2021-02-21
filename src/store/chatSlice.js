import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
	name: 'chat',
	initialState: {
		isChatExpanded: true,
	},
	reducers: {
		showChat: (state) => {
            
			state.isChatExpanded = true
		},
		hideChat: (state) => {
            console.log('Ib here');
			state.isChatExpanded = false
		},
	},
})

// Action creators are generated for each case reducer function
export const { showChat, hideChat } = chatSlice.actions

export default chatSlice.reducer
