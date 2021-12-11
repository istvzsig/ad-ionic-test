import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Camera } from '@ionic-native/camera/ngx';
// import { CameraV2 } from './camerav2';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage {
    constructor(
        private camera: Camera,
        private sanitizer: DomSanitizer) {}

    ngOnInit() {
        // buttons
        const sideMenuButton = document.getElementById('openSideMenu');
        // const el = document.getElementByClassName('cordova-camera-capture')[0];
        document.addEventListener('deviceready', event => {

        });
    }

    openSideMenu() {
        const HIDE = 'show-side-menu';
        const sideMenu = document.getElementById('side_menu');

        if(sideMenu.classList.contains(HIDE)) {
            sideMenu.classList.remove(HIDE);
        } else {
            sideMenu.classList.add(HIDE);
        }
    }

    closeSideMenu() {
        const HIDE = 'show-side-menu';
        const closeButton = document.getElementById('close_side_menu_button');
        const sideMenu = document.getElementById('side_menu');

        if(sideMenu.classList.contains(HIDE)) {
            sideMenu.classList.remove(HIDE);
        } else {
            sideMenu.classList.add(HIDE);
        }
    }

    // onSucess(imageData) {
    //     return new Promise(resolve => {
    //         const photoImage = new Image();
    //         photoImage.addEventListener('load', event => resolve(photoImage););
    //         photoImage.src =  "data:image/jpeg;base64," + imageData;
    //         // imageGalleryContainer.append(photoImage);
    //         console.log(photoImage);
    //     })
    
    // }

    async openCamera() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true,
        }
        await this.camera.getPicture(options)
        // .then(imageData => console.log(imageData));
        // console.log(this.camera)
    }
}




