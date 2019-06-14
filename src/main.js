import Vue from 'vue'
import App from './App' 
import { Button, Select } from 'element-ui';
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
Vue.use(Button)
app.$mount()
