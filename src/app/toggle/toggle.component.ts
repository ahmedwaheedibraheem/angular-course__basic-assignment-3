import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  clickNumber = -1;
  clicksNumbersArr = [];
  showParagraph = false;

  constructor() {}

  ngOnInit() {}

  onToggle() {
    this.clickNumber++;
    this.clicksNumbersArr.push(this.clickNumber);
    this.showParagraph = !this.showParagraph;
  }
}
