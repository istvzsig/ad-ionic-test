import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SidemenuService {
  #HIDE = 'show-side-menu';
    constructor() {
        this.sideMenuElement = document.getElementById('side_menu');
        this.closeSideMenuButton = document.getElementById('close_side_menu_button'); 
    }
    
    open() {
        if(this.sideMenuElement.classList.contains(this.#HIDE)) {
            this.sideMenuElement.classList.remove(this.#HIDE);
        } else {
            this.sideMenuElement.classList.add(this.#HIDE);
        }
    }

    close() {
        if(this.sideMenuElement.classList.contains(this.#HIDE)) {
            this.sideMenuElement.classList.remove(this.#HIDE);
        } else {
            this.sideMenuElement.classList.add(this.#HIDE);
        }
    }


}
