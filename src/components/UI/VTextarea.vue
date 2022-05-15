<template>
	<textarea
		@input="updateValue"
		class="textarea"
		autocomplete="off"
		:value="modelValue"
	></textarea>
</template>

<script>
export default {
	name: 'VTextarea',

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
