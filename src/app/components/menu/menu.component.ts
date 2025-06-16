import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';


/* Autor: Francesco Gorini , github: https://github.com/Gorofra */
@Component({
  selector: 'app-menu',
  imports: [CommonModule, MatMenuModule, MatIconModule, MatButtonModule, RouterModule,MatDividerModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})


export class MenuComponent {

}
