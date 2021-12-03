import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Pages/home/home.component";
import { AboutUsComponent } from "./Pages/about-us/about-us.component";
import { ContactUSComponent } from "./Pages/contact-us/contact-us.component";

const routes:Routes=[
    {path:'',component:HomeComponent},  
    {path:'contact',component:ContactUSComponent},
    {path:'aboutus',component:AboutUsComponent},
];

@NgModule({
    declarations:[
        AboutUsComponent,
        ContactUSComponent,
        HomeComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports:[RouterModule],
    providers:[],
})

export class  HomeModule{
    

} 