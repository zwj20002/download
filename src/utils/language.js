import { ref, watchEffect } from "vue";

// 1. 加载语言资源
const locales = {
  en: () => import("../locales/en.json").then((m) => m.default),
  zh: () => import("../locales/zh.json").then((m) => m.default),
};

// 2. 当前语言（响应式变量）
const currentLang = ref(
  localStorage.getItem("lang") || navigator.language.split("-")[0] || "en"
);
const messages = ref({});

// 3. 动态加载语言文件
watchEffect(async () => {
  const lang = currentLang.value;
  messages.value = (await locales[lang]?.()) || {};
  // 自动更新页面标题（使用默认的 'pageTitle' 键名）
  if (messages.value.pageTitle) {
    document.title = messages.value.pageTitle;
  }
});

// 4. 切换语言函数
const setLanguage = (lang) => {
  currentLang.value = lang;
  localStorage.setItem("lang", lang); // 持久化存储
};

// 5. 翻译函数
const t = (key) => {
  return messages.value[key] || key; // 找不到key时返回原key
};

export { currentLang, messages, setLanguage, t };
