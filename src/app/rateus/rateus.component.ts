import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rateus',
  templateUrl: './rateus.component.html',
  styleUrls: ['./rateus.component.css']
})
export class RateUsComponent {
  ratingForm: FormGroup;
  ratingMessage: string = '';
  userFeedback: string = '';

  constructor(private fb: FormBuilder) {
    this.ratingForm = this.fb.group({
      rating: ['', Validators.required],
      name: ['', Validators.required],
      feedback: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.ratingForm.invalid) {
      this.ratingMessage = 'Please fill out all fields.';
      return;
    }

    const { rating, name, feedback } = this.ratingForm.value;

    this.userFeedback = `
      <h2>Thank you for your feedback!</h2>
      <p><strong>Rating:</strong> ${rating} star(s)</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Feedback:</strong> ${feedback}</p>
    `;

    this.ratingForm.reset();
    this.ratingMessage = '';
  }
}
