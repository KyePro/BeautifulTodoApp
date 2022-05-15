<template>
	<main class="main-wrapper">
		<CreateForm @addNote="addNote" />
		<NotesTable @deleteNote="deleteNote" />
		<NotesTableEmpty />
	</main>
</template>

<script>
import NotesTable from '@/components/NotesTable'
import CreateForm from '@/components/CreateForm'
import NotesTableEmpty from '@/components/NotesTableEmpty'

export default {
	name: 'App',
	components: { NotesTableEmpty, CreateForm, NotesTable },

	data() {
		return {
			introData: {
				title: 'Main',
				desc: 'You can watch and add your notes',
			},
		}
	},

	methods: {
		addNote(note) {
			this.$store.commit('addNote', note)
		},

		deleteNote(note) {
			this.$store.commit('removeNote', note)
		},
	},
}
</script>

<style lang="scss">
@import '~@/assets/styles/main';
</style>
