const form = document.querySelector('#myform');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('object');
  });
}

function toggleMenuScroll() {

  if (window.location.hash === '#menu') {
    document.body.classList.add('page--has-open-menu');
  } else {
    document.body.classList.remove('page--has-open-menu');
  }
}

toggleMenuScroll();

window.addEventListener('hashchange', toggleMenuScroll);
