import { FormsModule } from '@angular/forms';
import { TableRoutingModule} from './table-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [ CommonModule, TableRoutingModule, FormsModule ],
    declarations: [ TableRoutingModule.components ]
})
export class TableModule { }