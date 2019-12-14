import { Component, ViewEncapsulation } from '@angular/core';
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
    public isMobile: boolean = false;

    constructor(private homeService: HomeService) { }
    gridSizeChangedCallback(GridsterComponent) {
        if (window.innerWidth <= 480) {
            this.isMobile = true;
            this.dashboard = this.dashboardMobile;
        } else {
            this.isMobile = false;
            this.dashboard = this.dashboardDesktop;
        }
    }

    public itemResize(item, itemComponent) {
        console.log('item resized', item, itemComponent);
        if (window.innerWidth <= 480) {
            this.isMobile = true;
            this.dashboard = this.dashboardMobile;
        } else {
            this.isMobile = false;
            this.dashboard = this.dashboardDesktop;
        }
    }

    public initCallBack() {
        if (window.innerWidth <= 480) {
            this.isMobile = true;
            this.dashboard = this.dashboardMobile;
        } else {
            this.isMobile = false;
            this.dashboard = this.dashboardDesktop;
        }
    }

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
            swap: true,
            gridSizeChangedCallback: this.gridSizeChangedCallback,
            itemResizeCallback: this.itemResize,
            initCallback: this.initCallBack
        };
        this.dashboard = [
            { cols: 2, rows: 2, y: 0, x: 0, type: '精选中餐', background: './assets/background/selected_chinese.jpg' },
            { cols: 2, rows: 2, y: 0, x: 2, type: '精选西餐', background: './assets/background/selected_dish.jpg' },
            { cols: 1, rows: 1, y: 1, x: 0, type: '白领早餐', background: './assets/background/breakfast.jpg' },
            { cols: 1, rows: 1, y: 1, x: 1, type: '烘焙', background: './assets/background/baking.jpg' },
            { cols: 1, rows: 1, y: 1, x: 2, type: '妈妈宝宝', background: './assets/background/mother.jpg' },
            { cols: 1, rows: 1, y: 1, x: 3, type: '找食材', background: './assets/background/food.jpg' }
        ];
    }

    changeOptions() {
        this.options.api.optionsChanged();
    }
}
