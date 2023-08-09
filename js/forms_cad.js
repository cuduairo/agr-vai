const navLinks = document.querySelectorAll('.nav-link');
const forms = document.querySelectorAll('.form');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const formId = link.getAttribute('data-form');

        forms.forEach(form => {
            if (form.id === formId) {
                form.classList.add('active-form');
            } else {
                form.classList.remove('active-form');
            }
        });
    });
});