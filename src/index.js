import demo from './components/demo.vue'

demo.install = Vue => Vue.component(demo.name, demo)

export default demo