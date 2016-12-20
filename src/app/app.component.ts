import { Component } from '@angular/core';
 
@Component({
    //moduleId: module.id,
    selector: 'my-app',
    template: `
       <nav>
        <a routerLink="/dashboard">dashboard</a>
        <a routerLink="/heroes">Heroes</a>
       </nav>
        <router-outlet></router-outlet>
        `
})
export class AppComponent { }
