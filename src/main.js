import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setLanguage } from './utils/language';

// 初始化时检测浏览器语言
const browserLang = navigator.language.split('-')[0];
setLanguage(['zh', 'en'].includes(browserLang) ? browserLang : 'en');
createApp(App).mount('#app')
