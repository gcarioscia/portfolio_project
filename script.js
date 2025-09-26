const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const contactLink = document.querySelector('main a');
const icon = themeToggle.querySelector('i'); // Assuming the icon is an <i> tag

// Check for saved theme preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  header.classList.add(savedTheme);
    footer.classList.add(savedTheme);
  contactLink.classList.add(savedTheme);
  if (savedTheme === 'dark-theme') {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
} else {
  // Default to light theme if no preference is saved
  body.classList.add('light-theme');
}

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    header.classList.remove('light-theme');
    footer.classList.remove('light-theme');
    contactLink.classList.remove('light-theme');
    body.classList.add('dark-theme');
    header.classList.add('dark-theme');
    footer.classList.add('dark-theme');
    contactLink.classList.add('dark-theme');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.remove('dark-theme');
    header.classList.remove('dark-theme');
    footer.classList.remove('dark-theme');
    contactLink.classList.remove('dark-theme');
    body.classList.add('light-theme');
    header.classList.add('light-theme');
    footer.classList.add('light-theme');
    contactLink.classList.add('light-theme');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light-theme');
  }
});