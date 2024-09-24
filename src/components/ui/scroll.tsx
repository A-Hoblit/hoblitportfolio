const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

export function scrollToBottom() {
  if (!isBrowser()) return;
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

export function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
