// src/firebase/analytics.js
import { logEvent } from "firebase/analytics";
import { analytics } from "./firebase";

// 记录页面访问
export const trackPageView = (pageName) => {
  if (analytics) {
    logEvent(analytics, "page_view", {
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
};

// 记录自定义事件
export const trackCustomEvent = (eventName, eventParams) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};
