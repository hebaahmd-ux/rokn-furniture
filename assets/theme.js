(() => {
  try { document.documentElement.dataset.theme = localStorage.getItem('rokn-theme') || 'light'; }
  catch { document.documentElement.dataset.theme = 'light'; }
})();
