// Mobile sidebar nav — works on every page since header markup is identical
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    // Create a backdrop element for tap-outside-to-close
    const backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);

    function openNav() {
      nav.classList.add('open');
      backdrop.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    function closeNav() {
      nav.classList.remove('open');
      backdrop.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
      if (nav.classList.contains('open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    backdrop.addEventListener('click', closeNav);

    // Close menu when a nav link is tapped (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }
});

// Form handling: contact.html and appointment.html post directly to Formspree
// via the form's action attribute — no JS needed for submission.
// booking.html uses Calendly's own embed script (loaded in that page directly).// booking.html uses Calendly's own embed script (loaded in that page directly).