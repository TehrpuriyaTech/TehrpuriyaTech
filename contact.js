/*
  IMPORTANT: Set this to the Tehrpuriya Tech WhatsApp number before publishing.
  Use country code + number only, digits only. Example format: 919876543210
*/
const WHATSAPP_NUMBER = '919499138024';

const whatsappCta = document.getElementById('whatsappCta');
const whatsappHint = document.getElementById('whatsappHint');
const inquiryForm = document.getElementById('inquiryForm');
const formStatus = document.getElementById('formStatus');

function openWhatsApp(message) {
  if (!WHATSAPP_NUMBER || !/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    if (formStatus) {
      formStatus.textContent = 'WhatsApp is configured yet..';
      formStatus.classList.remove('hidden');
    }
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

if (whatsappCta) {
  whatsappCta.addEventListener('click', (event) => {
    event.preventDefault();
    openWhatsApp('Hello Tehrpuriya Tech, I would like to know more about your services.');
  });
  if (WHATSAPP_NUMBER && /^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    whatsappCta.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    if (whatsappHint) whatsappHint.textContent = 'Message us directly on WhatsApp.';
  }
}

if (inquiryForm) {
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;

    const data = new FormData(inquiryForm);
    const message = [
      'Hello Tehrpuriya Tech, I would like to make an inquiry.',
      '',
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone') || 'Not provided'}`,
      `Service: ${data.get('service')}`,
      `Subject: ${data.get('subject') || 'Not provided'}`,
      '',
      'Requirement:',
      data.get('message')
    ].join('\n');

    openWhatsApp(message);
  });
}
