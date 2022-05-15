<template>
	<div class="create">
		<div class="container">
			<div class="create__wrapper">
				<form
					class="form"
					@submit.prevent="addNote"
				>
					<div class="form__field">
						<VInput
							placeholder="Your title"
							v-model.trim="formData.title"
							class="form__input"
						/>
						<span
							class="form__field-error"
							:class="{
								show: v$.formData.title.$error,
							}"
						>
							{{ v$.formData.title.required.$message }}
						</span>
					</div>
					<div class="form__field">
						<VTextarea
							placeholder="Your description"
							v-model.trim="formData.desc"
							class="form__input form__textarea"
						/>
						<span
							class="form__field-error"
							:class="{
								show: v$.formData.desc.$error,
							}"
						>
							{{ v$.formData.desc.required.$message }}
						</span>
					</div>
					<VButton class="form__submit"> Create </VButton>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
	name: 'CreateForm',

	setup() {
		return { v$: useVuelidate() }
	},

	data() {
		return {
			errorMessages: {
				empty: 'Empty field',
			},
			formData: {
				title: '',
				desc: '',
			},
		}
	},

	validations() {
		return {
			formData: {
				title: { required },
				desc: { required },
			},
		}
	},

	methods: {
		addNote() {
			this.v$.formData.$validate()

			let response = this.v$.$error

			console.log(response)

			if (!response) {
				this.$emit('addNote', this.currentNote)
				this.resetForm()
			} else {
				console.log(this.v$.$errors)
			}
		},

		resetForm() {
			this.v$.formData.$reset()

			this.formData = {
				title: '',
				desc: '',
			}
		},
	},

	computed: {
		currentNote() {
			return {
				id: Date.now(),
				title: this.formData.title,
				desc: this.formData.desc,
			}
		},
	},
}
</script>
