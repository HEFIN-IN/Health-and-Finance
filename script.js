const sendOtp = document.getElementById('sendOtp'),
      verifyOtp = document.getElementById('verifyOtp'),
      otpSection = document.getElementById('otpSection'),
      loginBtn = document.getElementById('loginBtn');

sendOtp.addEventListener('click', () => {
  // trigger OTP via SMS API → mock here:
  otpSection.classList.remove('hidden');
  alert('OTP sent to ' + document.getElementById('phone').value);
});

verifyOtp.addEventListener('click', () => {
  const code = document.getElementById('otp').value;
  if (code === '123456') {  // replace with real validation
    alert('OTP verified');
    loginBtn.removeAttribute('disabled');
  } else {
    alert('Invalid OTP');
  }
});

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Logged in as ' + document.getElementById('username').value);
});

// Google callback
function handleGoogleCredential(response) {
  console.log('Google ID token:', response.credential);
  alert('Signed in with Google!');
}
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  // reset errors
  document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

  if (name.value.trim().length < 3) {
    showError('nameError', 'Enter at least 3 characters');
    valid = false;
  }
  const mailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!mailRe.test(email.value.trim())) {
    showError('emailError', 'Enter valid email');
    valid = false;
  }
  if (subject.value.trim().length < 5) {
    showError('subjectError', 'Subject at least 5 chars');
    valid = false;
  }
  if (message.value.trim().length < 20) {
    showError('messageError', 'Message at least 20 chars');
    valid = false;
  }

  if (valid) {
    alert('Thank you! Your message has been submitted.');
    this.reset();
  }
});

function showError(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.display = 'block';
}
