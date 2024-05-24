import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService, AlertService } from '@app/_services';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html'
})
export class AddEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  selectedFile: File;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required],
      image: [null, Validators.required]
    });

    if (!this.isAddMode) {
      this.recipeService.getById(this.id).subscribe(x => {
        this.form.patchValue(x);
      });
    }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createRecipe();
    } else {
      this.updateRecipe();
    }
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.form.patchValue({ image: this.selectedFile });
    }
  }

  private createRecipe() {
    const formData = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('description', this.form.get('description').value);
    formData.append('ingredients', this.form.get('ingredients').value);
    formData.append('instructions', this.form.get('instructions').value);
    formData.append('image', this.selectedFile);

    this.recipeService.createRecipe(formData).subscribe(() => {
      this.router.navigate(['/admin/recipes']);
    });
  }

  private updateRecipe() {
    const formData = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('description', this.form.get('description').value);
    formData.append('ingredients', this.form.get('ingredients').value);
    formData.append('instructions', this.form.get('instructions').value);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.recipeService.updateRecipe(this.id, formData).subscribe(() => {
      this.router.navigate(['/admin/recipes']);
    });
  }

  onCancel() {
    this.router.navigate(['/admin/recipes']);
  }

  toggleMode() {
    this.isAddMode = !this.isAddMode;
    if (this.isAddMode) {
      this.form.reset();
      this.selectedFile = null; // Clear selected file in add mode
    } else {
      // Load data for editing if in edit mode
      this.recipeService.getById(this.id).subscribe(x => {
        this.form.patchValue(x);
      });
    }
  }
}
