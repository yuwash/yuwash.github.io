document.addEventListener('DOMContentLoaded', function() {
    // Replace "[at]" with "@" for email obfuscation.
    // This is in addition to the CSS so it makes copying easier.
    document.querySelectorAll('.replace-at').forEach(function(element) {
        element.replaceWith('@');
    })

    // Handle hamburger menu
    document.querySelector('.navbar-burger').addEventListener('click', function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        document.querySelector('.navbar-burger').classList.toggle('is-active');
        document.querySelector('#navbarTogglerCollapse').classList.toggle('is-active');
    });
});
