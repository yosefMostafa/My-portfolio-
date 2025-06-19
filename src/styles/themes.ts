// theme.ts
export function setTheme(theme: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

export function getSavedTheme(): 'light' | 'dark' | null {
  return localStorage.getItem('theme') as 'light' | 'dark' | null;
}
