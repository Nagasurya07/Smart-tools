// Highlight active tool in sidebar
const sidebarLinks = document.querySelectorAll("nav a");

sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidebarLinks.forEach(l => l.classList.remove("bg-green-700"));
    link.classList.add("bg-green-700");
  });
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission
 
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate form submission
  const responseMessage = document.getElementById('responseMessage');
  responseMessage.textContent = `Thank you, ${name}! Your message has been sent successfully. We'll get back to you at ${email}.`;
  responseMessage.style.color="green"
  // Reset the form
  this.reset();
});
