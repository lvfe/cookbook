import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { GridsterConfig, GridsterItem, DisplayGrid, GridType, GridsterComponent } from 'angular-gridster2';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
    options: GridsterConfig;
    dashboard: Array<GridsterItem>;
    dashboardDesktop: Array<GridsterItem>;
    dashboardMobile: Array<GridsterItem>;
   

    constructor(private homeService: HomeService, private router:Router) { }

    ngOnInit() {
        this.options = {
            gridType: GridType.Fit,
            displayGrid: DisplayGrid.None,
            disableWindowResize: false,
            scrollToNewItem: false,
            disableWarnings: false,
            ignoreMarginInRow: false,
            mobileBreakpoint: 640,
            keepFixedHeightInMobile: true,
            fixedRowHeight: 100,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            swap: true
        };
        this.dashboard = [
            { cols: 2, rows: 2, y: 0, x: 0, type: '精选中餐', background: './assets/background/selected_chinese.jpg', url: '/tabs/section/selected_chinese' },
            { cols: 2, rows: 2, y: 0, x: 2, type: '精选西餐', background: './assets/background/selected_dish.jpg', url: '/tabs/section/selected_dish' },
            { cols: 1, rows: 1, y: 1, x: 0, type: '白领早餐', background: './assets/background/breakfast.jpg', url: '/tabs/section/breakfast' },
            { cols: 1, rows: 1, y: 1, x: 1, type: '烘焙', background: './assets/background/baking.jpg', url: '/tabs/section/baking' },
            { cols: 1, rows: 1, y: 1, x: 2, type: '妈妈宝宝', background: './assets/background/mother.jpg', url: '/tabs/section/mother' },
            { cols: 1, rows: 1, y: 1, x: 3, type: '找食材', background: './assets/background/food.jpg', url: '/tabs/section/food' }
        ];
    }

    changeOptions() {
        this.options.api.optionsChanged();
    }

    nav(item) {
        this.router.navigate([item.url]);
    }
    
}
