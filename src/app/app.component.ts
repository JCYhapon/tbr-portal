import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend_angular';

  // async onSave(){
  //   const response = await axios.post("http://localhost/backend_php/login.php", {email:"john@thebackroomop.com", password:"tbr123"})
  //   console.log(response)
  // }
  
}


