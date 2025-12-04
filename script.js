document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const mailBody = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

  window.location.href = `mailto:hello@vnratelier.com?subject=New Project&body=${mailBody}`;
});

