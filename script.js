function validateForm() {
  const phone = document.getElementById('phone').value;
  if (!/^\d{10}$/.test(phone)) {
    alert('Phone number must be 10 digits.');
    return false;
  }
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  const data = {
    sonic: {
      title: 'Light Mode',
      desc: 'The initial view of the website. In view  is: a contact form, a dark mode toggle, and a transparent background',
      img: 'images/Sonic-1.png',
      alt: 'Home page of the website'
    },
    shadow: {
      title: 'Dark Mode',
      desc: 'Dark mode of the initial view. Instead  of having Sonic as the background  image, this version has Shadow.  There is a consistent change to  maintain readability across all  elements on the website. A product display wheel that  dynamically changes the image given  the button clicked. The description  below the image also changes',
      img: 'images/Sonic-2.png',
      alt: 'Dark mode of the website'
    }
  };

  const titleEl = document.getElementById('sonic-title');
  const descEl  = document.getElementById('sonic-desc');
  const imgEl   = document.getElementById('sonic-img');
  const buttons = document.querySelectorAll('.sonic-btn');

  function loadContent(key) {
    const item = data[key];
    titleEl.textContent = item.title;
    descEl.textContent = item.desc;
    imgEl.src = item.img;
    imgEl.alt = item.alt;
    buttons.forEach(b => b.classList.toggle('active', b.dataset.key === key));
  }

  buttons.forEach(btn =>
    btn.addEventListener('click', () => loadContent(btn.dataset.key))
  );

  loadContent('sonic');
});