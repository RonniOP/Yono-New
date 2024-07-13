document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="http"], a[href^="https"]').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Prevent the default click behavior

            const url = link.getAttribute('href');
            // Open the URL in the default browser
            window.open(url, '_system', 'location=yes');
        });
    });
});