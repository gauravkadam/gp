import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   openNav() {
    document.getElementById("nav").style.transform = "translateX(0)";
  }
  
   closeNav() {
    document.getElementById("nav").style.transform = "translateX(-100%)";
  }

}
