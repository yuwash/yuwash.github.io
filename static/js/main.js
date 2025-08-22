$(document).ready(function() {
    // Replace "[at]" with "@" for email obfuscation.
    // This is in addition to the CSS so it makes copying easier.
    $('.replace-at').each(function() {
        $(this).replaceWith('@');
    });
});
