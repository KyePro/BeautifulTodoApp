<template>
	<div
		class="empty"
		v-show="$store.getters.isEmpty"
	>
		<div class="container">
			<div class="empty__wrapper">
				<img
					src="@/assets/images/empty-illustration.svg"
					alt="Empty Illustration"
					class="empty__img"
				/>
				<h3 class="empty__title">It's Empty</h3>
				<p class="empty__desc">Hmm.. looks like you don't have any notes</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NotesTableEmpty',
}
</script>
