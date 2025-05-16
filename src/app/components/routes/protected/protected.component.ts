import { Component } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.scss'
})
export class ProtectedComponent {
  parejaOpcion: string='';
  alergiaOpcion:string='';
  necesidadOpcion:string='';

 
 
  constructor(private appService: AppService) {}
 }
