import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-tutoriel',
  templateUrl: './tutoriel.component.html',
  styleUrls: ['./tutoriel.component.css']
})

export class TutorielComponent implements OnInit {
  myParam: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.myParam = params.id;
      console.log(this.myParam);
    });

  }
}
