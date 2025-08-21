let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

emailjs.init("L9awsTtjAmgPB3O-T"); // Get this from EmailJS dashboard

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitBtn = document.querySelector('input[type="submit"]');
    const originalText = submitBtn.value;
    submitBtn.value = 'Sending...';
    submitBtn.disabled = true;
    
    emailjs.sendForm('service_5kedacz', 'template_3orj4ug', this)
        .then(function() {
            alert('Message sent successfully! I will get back to you soon.');
            document.getElementById('contact-form').reset();
            submitBtn.value = originalText;
            submitBtn.disabled = false;
        }, function(error) {
            alert('Failed to send message. Please try again or contact me directly.');
            console.log('Error:', error);
            submitBtn.value = originalText;
            submitBtn.disabled = false;
        });
});