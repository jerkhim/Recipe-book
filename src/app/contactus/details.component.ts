import { Component } from '@angular/core';
import { AccountService } from '@app/_services';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

@Component({
    templateUrl: 'details.component.html'
})
export class DetailsComponent {
    account = this.accountService.accountValue;

    constructor(private accountService: AccountService) { }

    sendContactForm(data: ContactFormData): void {
        // You can replace this with your actual API endpoint
        const apiUrl = 'https://your-api-endpoint.com/contact';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Handle success here, maybe show a success message to the user
        })
        .catch(error => {
            // Handle errors here, maybe show an error message to the user
            console.error('Error sending contact form:', error);
        });
    }

    onSubmit(contactForm: HTMLFormElement): void {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(contactForm);
        const data: ContactFormData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        };

        // Send form data
        this.sendContactForm(data);
    }
}
