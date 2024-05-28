import { Component } from '@angular/core';

interface RatingFormData {
  rating: string;
  name: string;
  feedback: string;
}

@Component({
  selector: 'app-rateus',
  templateUrl: './rateus.component.html',
  styleUrls: ['./rateus.component.css']
})
export class RateUsComponent {
  formData: RatingFormData = {
    rating: '',
    name: '',
    feedback: ''
  };
  ratingMessage: string = '';
  userFeedback: string = '';

  submitRatingForm(event: Event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form elements
    const form = document.getElementById('ratingForm') as HTMLFormElement;
    const ratingInputs = form.querySelectorAll('input[name="rating"]:checked') as NodeListOf<HTMLInputElement>;
    const nameInput = form.querySelector('#name') as HTMLInputElement;
    const feedbackInput = form.querySelector('#feedback') as HTMLTextAreaElement;

    // Initialize rating data object
    this.formData = {
      rating: '',
      name: nameInput.value.trim(),
      feedback: feedbackInput.value.trim()
    };

    // Retrieve selected rating
    if (ratingInputs.length > 0) {
      this.formData.rating = ratingInputs[0].value;
    }

    // Validate form inputs
    if (!this.formData.rating || !this.formData.name || !this.formData.feedback) {
      this.displayRatingMessage('Please fill in all fields.', 'error');
      return;
    }

    // Display success message
    this.displayRatingMessage('Thank you for your feedback!', 'success');

    // Display user feedback
    this.userFeedback = `
      <h2>User Feedback:</h2>
      <p><strong>Name:</strong> ${this.formData.name}</p>
      <p><strong>Rating:</strong> ${this.formData.rating}</p>
      <p><strong>Feedback:</strong> ${this.formData.feedback}</p>
    `;

    // Clear form inputs
    form.reset();
  }

  displayRatingMessage(message: string, messageType: 'success' | 'error') {
    this.ratingMessage = message;
    // You can handle the styling in your CSS file
  }
}
