let faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {

    faq.addEventListener('click', () => {
        faq.classList.toggle("active");

        let toggleSign = faq.querySelector('.toggle-sign');
        if (faq.classList.contains('active')) {
            toggleSign.textContent = '-';
        } else {
            toggleSign.textContent = '+';
        }
    });
});