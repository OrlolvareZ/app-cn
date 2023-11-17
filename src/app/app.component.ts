import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'app-cn';
    users: any[] = [];
    

    constructor(
        private db: AngularFirestore,
    ) {
        
    }

    ngOnInit(): void {
        this.db.collection('mi-pack').valueChanges().subscribe(res => {
            this.users = res;
            console.log(this.users);
        });
    }

}
