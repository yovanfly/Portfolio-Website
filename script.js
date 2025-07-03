function validateForm() {
  const phone = document.getElementById('phone').value;
  if (!/^\d{10}$/.test(phone)) {
    alert('Phone number must be 10 digits.');
    return false;
  }
  return true;
}
