import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTEURL } from '../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() currentPage: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  returnToPreviousPage(): void {
    if(this.currentPage === ROUTEURL.plant) {
      this.router.navigateByUrl(ROUTEURL.paList);
    } else {
      this.router.navigateByUrl(ROUTEURL.function);
    }
  }

  returnToHome(): void {
    this.router.navigateByUrl(ROUTEURL.function);
  }

}
