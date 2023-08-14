import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const formData = this.loginForm.value;

    try {
      const response = await axios.post('http://localhost/backend_php/login.php', formData);
      // Handle success, navigate to dashboard
      console.log('Login successful');
      this.router.navigate(['/dashboard']); // Adjust the route to your dashboard
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error('Login error:', error);
    }
  }
}
