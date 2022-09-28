import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  exibeFooter: boolean = true;

  constructor() { }

  ngOnInit() {
    let pathName = window.location.pathname;

    if(pathName === '/login'){
      this.exibeFooter = false;
    }
  }

}
