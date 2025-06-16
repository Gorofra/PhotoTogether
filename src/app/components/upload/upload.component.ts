import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


/* Autor: Francesco Gorini , github: https://github.com/Gorofra */
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class UploadComponent {
  selectedFile: File | null = null;
  uploadStatus: string = "";

  constructor(private photoservice: PhotoService){
  }

  onFileSelected(event: Event):void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0 ) {
      this.selectedFile = input.files[0];
      this.uploadStatus = `File selezionato: ${this.selectedFile.name}`
    }
  }
  onUpload(): void{
    if(!this.selectedFile){
      return;
    }
    this.uploadStatus = 'Caricamento in corso...'
    
    this.photoservice.uploadPhoto(this.selectedFile).subscribe({
      next: (response) => {
        this.uploadStatus = "File caricato consuccesso ! <3"
      },
      error: (error) => {
        this.uploadStatus = "Errore nel caricamento";
        console.error(error);
      }
    })
  }
}
