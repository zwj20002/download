import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setLanguage } from './utils/language';

// 只在localStorage没有语言设置时才检测浏览器语言
if (!localStorage.getItem('lang')) {
  const browserLang = navigator.language.split('-')[0];
  setLanguage(['zh', 'en'].includes(browserLang) ? browserLang : 'en');
}

createApp(App).mount('#app')