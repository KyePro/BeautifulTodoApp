import { createApp } from 'vue'
import store from './store'
import components from '@/components/UI'
import App from './App.vue'

const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
})

app.use(store)
app.mount('#app')


