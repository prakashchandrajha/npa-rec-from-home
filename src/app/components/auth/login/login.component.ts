import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login({ 
      username: this.username, 
      password: this.password 
    }).subscribe({
      next: (response: any) => {
        console.log('Role:', response.role);
        console.log('Token:', response.token);
        alert('Login successful!');
      },
      error: (error: any) => {
        console.error('Login failed:', error);
        alert('Login failed!');
      }
    });
  }
}
