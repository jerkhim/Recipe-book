document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function() {
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const messageInput = document.getElementById('message') as HTMLTextAreaElement;

        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful form submission response
            console.log('Form submitted successfully:', data);
            // You can redirect or show a success message here
        })
        .catch(error => {
            // Handle errors during form submission
            console.error('There was a problem with the form submission:', error.message);
            // You can display an error message to the user here
        });
    });
});
