import { FormsModule } from '@angular/forms';
import { LoginRoutingModule} from './login-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [ CommonModule, LoginRoutingModule, FormsModule ],
    declarations: [ LoginRoutingModule.components ]
})
export class LoginModule { }