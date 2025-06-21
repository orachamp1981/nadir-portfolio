function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  const navLinks = document.querySelectorAll('.nav-tabs a');
  navLinks.forEach(link => link.classList.remove('active'));

  const clickedLink = document.querySelector(`.nav-tabs a[onclick="showTab('${tabId}')"]`);
  if (clickedLink) clickedLink.classList.add('active');
}

window.onload = () => {
  showTab('home');
};
