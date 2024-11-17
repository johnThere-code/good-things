// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// 替换为你的 Firebase 项目配置
const firebaseConfig = {
    apiKey: "AIzaSyAeyPm-7yIifAac13sWoznknwM9aPewNxI",
    authDomain: "good-things-well.firebaseapp.com",
    projectId: "good-things-well",
    storageBucket: "good-things-well.firebasestorage.app",
    messagingSenderId: "667744190089",
    appId: "1:667744190089:web:c719e99258e794825bd058",
    measurementId: "G-LP1JBPTLTZ"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 定义 analytics 的类型
let analytics: Analytics | undefined = undefined;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
