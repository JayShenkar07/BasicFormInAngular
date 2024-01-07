import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatInputModule,MatFormFieldModule,FormsModule,MatSelectModule,MatRadioModule,MatCheckboxModule,ButtonsModule,MatIconModule,MatDividerModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MarvellousForm';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'PPA'},
    {value: 'pizza-1', viewValue: 'LB'},
    {value: 'tacos-2', viewValue: 'Angular'},
  ];

}
