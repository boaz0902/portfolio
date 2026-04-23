// Contact Form Handler with EmailJS
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    // Check if form exists before adding event listener
    if (!contactForm || !formMessage) {
        console.error('Contact form or form message element not found in HTML');
        return;
    }

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Check if EmailJS is available
        if (typeof emailjs === 'undefined') {
            showMessage('Email service is not loaded. Please refresh the page.', 'error');
            return;
        }

        // Prevent spam submissions
        if (!window.canSubmitForm || !window.canSubmitForm()) {
            showMessage('Please wait before submitting again.', 'error');
            return;
        }

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form
        if (!name || !email || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }

        // Validate email format
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Sending...';

        try {
            // Send email using EmailJS
            const response = await emailjs.send(
                'service_rmk6ny5', // Your EmailJS service ID
                'template_h7b06hu', // Your EmailJS template ID
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                    reply_to: email // Allow recipient to reply directly to sender
                }
            );

            if (response.status === 200) {
                showMessage(
                    'Message sent successfully! I\'ll get back to you soon. 🎉',
                    'success'
                );
                contactForm.reset();
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);

            // Show specific error messages
            if (error.text && error.text.includes('Invalid service')) {
                showMessage('Service ID is incorrect. Please check your EmailJS dashboard.', 'error');
            } else if (error.text && error.text.includes('Invalid template')) {
                showMessage('Template ID is incorrect. Please check your EmailJS dashboard.', 'error');
            } else if (error.text && error.text.includes('The public key is not valid')) {
                showMessage('EmailJS public key is incorrect. Please update it in contact.js.', 'error');
            } else if (error.message && error.message.includes('Network')) {
                showMessage('Network error. Please check your internet connection and try again.', 'error');
            } else {
                showMessage(
                    'There was an error sending your message. Please try again or contact me directly at 09plasabas@gmail.com',
                    'error'
                );
            }
        } finally {
            // Reset submit button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    // Show message function
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `p-4 rounded-lg text-center ${
            type === 'success'
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
        }`;
        formMessage.classList.remove('hidden');

        // Auto-hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
