<template>
	<section class="table" v-if='!$store.getters.isEmpty'>
		<div class="container">
			<div class="table__wrapper">
				<NotesTableItem
					v-for="note in $store.state.notes"
					:note="note"
					:key="note.id"
					@deleteNote="deleteNote(note)"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import NotesTableItem from '@/components/NotesTableItem'

export default {
	name: 'NotesTable',
	components: { NotesTableItem },

	emits: ['deleteNote'],

	methods: {
		deleteNote(elem) {
			this.$emit('deleteNote', elem)
		},
	},
}
</script>
