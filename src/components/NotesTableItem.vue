<template>
	<div class="table__item card">
		<div class="table__item-content card__content">
			<h2 class="table__item-title card__title">
				{{ note.title }}
			</h2>
			<p class="table__item-desc card__desc">
				{{ note.desc }}
			</p>
		</div>
		<button
			@click="deleteNote"
			class="table__item-delete card__delete"
		>
			Delete
		</button>
	</div>
</template>

<script>
export default {
	name: 'NotesTableItem',

	props: {
		note: {
			type: Object,
		},
	},

	methods: {
		deleteNote() {
			this.$emit('deleteNote')
		},
	},
}
</script>
