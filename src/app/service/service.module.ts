import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ 
        CommonModule,
        HttpClientModule
    ],
    exports: [HttpClientModule],
    providers: [LoginService],
})
export class ServiceModule {}