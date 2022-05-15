import { createStore } from 'vuex'

export default createStore({
	state: {
		notes: [],
	},
	getters: {
		isEmpty(state) {
			return !state.notes.length
		}
	},
	mutations: {
		addNote(state, note) {
			state.notes.push(note)
		},
		removeNote(state, position) {
			state.notes.splice(position, 1)
		}
	}
})