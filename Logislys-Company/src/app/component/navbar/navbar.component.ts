import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  email:string = 'Sales@Logislys.com'
  @ViewChild('mySideBar') myElement!:ElementRef

  showElement():void{
    this.myElement.nativeElement.classList.add("active")
  }

  closeElement():void{
    this.myElement.nativeElement.classList.remove("active")
  }
}
