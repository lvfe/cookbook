import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GridsterConfig, GridsterItem, DisplayGrid, GridType, GridsterComponent } from 'angular-gridster2';
import { SectionService } from './section.service';

@Component({
    selector: 'app-section',
    templateUrl: 'section.component.html',
    styleUrls: ['section.component.scss']
})
export class SectionComponent implements OnInit{
    public businessId: string;
    public options;
    public items = [];
    public itemsHead = [];
    public isMobile;
    constructor(private router: Router, private route: ActivatedRoute, private sectionService: SectionService) {
        this.businessId = route.snapshot.paramMap.get('id');
        this.sectionService.get(this.businessId).subscribe(res => {
            this.itemsHead = res.filter(item=>item.head==true);
            this.items = [...res,...res].map((item, index) => {
                //  { cols: 2, rows: 2, y: 0, x: 0,
                item.rows = 1;
                item.cols = 1;
                item.y=0;
                item.x=index;
                return item;

            });
            
        });
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
            maxCols: 4,
            margin:30,
            gridSizeChangedCallback:this.gridSizeChangedCallback,
            initCallback:this.initCallback
        };
        this.isMobile = window.innerWidth<640?true:false;
    }
    gridSizeChangedCallback(){
        this.isMobile = window.innerWidth<640?true:false;
    }
    initCallback() {
        this.isMobile = window.innerWidth<640?true:false;
    }
    
    changeEvent(e) {
        console.log(e);
    }
    editByme(e) {
        console.log(e);
    }
    detail(e) {
        console.log(e);
    }
}
