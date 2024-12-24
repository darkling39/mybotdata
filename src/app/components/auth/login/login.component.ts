import { Component } from '@angular/core';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Checkbox } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [IconField, InputIcon, InputTextModule, Checkbox, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
