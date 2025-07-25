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
