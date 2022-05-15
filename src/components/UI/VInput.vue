<template>
	<input
		type="text"
		class="input"
		autocomplete="off"
		:value="modelValue"
		@input="updateValue"
	/>
</template>

<script>
export default {
	name: 'VInput',

	props: {
		modelValue: [String, Number],
	},

	methods: {
		updateValue(e) {
			this.$emit('update:modelValue', e.target.value)
		},
	},
}
</script>
