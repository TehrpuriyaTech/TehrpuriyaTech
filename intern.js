// Add your official WhatsApp number with country code and digits only.
// Example format: 919876543210. Leave blank until the number is confirmed.
const INTERN_WHATSAPP_NUMBER = '919499138024';

document.getElementById('internForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    'Web Development Internship Application - Tehrpuriya Tech',
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Phone: ${data.get('phone')}`,
    `Education: ${data.get('education')}`,
    `Skill level: ${data.get('level')}`,
    `Why joining: ${data.get('reason')}`
  ].join('\n');
  const status = document.getElementById('formMessage');
  if (!/^\d{10,15}$/.test(INTERN_WHATSAPP_NUMBER)) {
    status.textContent = 'Application form is ready, but submissions are not connected yet. Add your official WhatsApp number in intern.js or connect a Google Form/backend before publishing.';
    status.className = 'mt-4 text-sm font-semibold text-red-600';
    return;
  }
  window.open(`https://wa.me/${INTERN_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  status.textContent = 'Your application message has been prepared in WhatsApp. Send it there to complete your application.';
  status.className = 'mt-4 text-sm font-semibold text-green-700';
});
