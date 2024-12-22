document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form');
    const submitButton = form.querySelector('button[type="submit"]');
    const formStatus = document.createElement('div');
    formStatus.className = 'mt-4 text-center';
    form.appendChild(formStatus);

    function showMessage(message, isError = false) {
        formStatus.textContent = message;
        formStatus.className = `mt-4 text-center ${isError ? 'text-red-500' : 'text-green-500'}`;
        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateForm(data) {
        if (!data.name.trim()) {
            throw new Error('Please enter your name');
        }
        if (!data.email.trim() || !validateEmail(data.email)) {
            throw new Error('Please enter a valid email address');
        }
        if (!data.message.trim()) {
            throw new Error('Please enter your message');
        }
    }

    async function sendEmail(data) {
        // In a real implementation, this would send to your backend
        // For demo, we'll simulate a successful send
        return new Promise((resolve) => {
            setTimeout(() => {
                // Send to console for demo purposes
                console.log('Form submission:', data);
                resolve();
            }, 1000);
        });
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: form.querySelector('#name').value,
            email: form.querySelector('#email').value,
            message: form.querySelector('#message').value
        };

        try {
            // Validate form
            validateForm(formData);

            // Disable submit button and show loading state
            submitButton.disabled = true;
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';

            // Send email
            await sendEmail(formData);

            // Show success message
            showMessage('Thank you! Your message has been sent successfully.');

            // Reset form
            form.reset();

        } catch (error) {
            // Show error message
            showMessage(error.message, true);
        } finally {
            // Re-enable submit button and restore text
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            try {
                const data = {
                    name: form.querySelector('#name').value,
                    email: form.querySelector('#email').value,
                    message: form.querySelector('#message').value
                };

                // Only validate the current field
                switch (input.id) {
                    case 'name':
                        if (!data.name.trim()) {
                            input.classList.add('border-red-500');
                            throw new Error('Please enter your name');
                        }
                        break;
                    case 'email':
                        if (!data.email.trim() || !validateEmail(data.email)) {
                            input.classList.add('border-red-500');
                            throw new Error('Please enter a valid email address');
                        }
                        break;
                    case 'message':
                        if (!data.message.trim()) {
                            input.classList.add('border-red-500');
                            throw new Error('Please enter your message');
                        }
                        break;
                }

                // Clear error state if validation passes
                input.classList.remove('border-red-500');
                formStatus.textContent = '';

            } catch (error) {
                showMessage(error.message, true);
            }
        });
    });
});