// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', e=>{
const href=a.getAttribute('href');
if(href.length>1){
e.preventDefault();
document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'});
}
});
});

// Contact form submission with validation and status messages
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

form?.addEventListener('submit', async (e) => {
e.preventDefault();
statusEl.textContent = 'Sending...';
const data = new FormData(form);

// client validation
const name = data.get('name')?.toString().trim();
const email = data.get('_replyto')?.toString().trim();
const message = data.get('message')?.toString().trim();
if (!name || !email || !message) {
statusEl.textContent = 'Please fill name, email, and message.';
return;
}

try {
const res = await fetch(form.action, {
method: 'POST',
headers: { 'Accept': 'application/json' },
body: data
});
if (res.ok) {
form.reset();
statusEl.textContent = 'Thanks! Your message has been sent.';
} else {
statusEl.textContent = 'Something went wrong. Please email kamsysitech@gmail.com.';
}
} catch {
statusEl.textContent = 'Network error. Please email kamsysitech@gmail.com.';
}
});
