import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public isMobile: boolean = false;
  public lang: string = 'cn-ZH';
  constructor(public router: Router) {}

}
