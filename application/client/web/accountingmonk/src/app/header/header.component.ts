import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
    private jwtToken: String | null | undefined = '';
    constructor (
    ) { }

    ngOnInit() {
        this.userId = sessionStorage.getItem('Id') || null;
                                                            this.UserName = sessionStorage.getItem('Name') || null;
                                                            this.images = sessionStorage.getItem('Image') || null;
    }

}