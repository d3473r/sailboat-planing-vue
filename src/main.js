import Vue from 'vue'
import App from './App.vue'
import UUID from 'vue-uuid';
import 'leaflet/dist/leaflet.css'

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.use(UUID)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')