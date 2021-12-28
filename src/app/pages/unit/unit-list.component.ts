import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { DxDataGridModule } from "devextreme-angular";
import DataSource from "devextreme/data/data_source";
import { UnitStoreService } from "src/app/stores";

@Component({
    selector: 'app-unit-list',
    templateUrl: './unit-list.component.html',
    styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent {
    dataSource: DataSource;
    constructor(
        unitStoreService: UnitStoreService) {
        this.dataSource = new DataSource({
            store: unitStoreService.store
        });
    }
}

@NgModule({
    imports: [CommonModule, DxDataGridModule],
    declarations: [UnitListComponent],
    exports: [UnitListComponent]
})
export class UnitListModule {

}