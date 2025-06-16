import { Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';

export const routes: Routes = [

    {
        path:"upload", component:UploadComponent
    },
    {
        path:"gallery", component: PhotoGalleryComponent
    },
    {
        path:"*",
        redirectTo: "gallery"
    },
    {
        path:"**",
        redirectTo: "gallery"
    }
];
