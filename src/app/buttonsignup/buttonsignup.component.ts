import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonsignup',
  templateUrl: './buttonsignup.component.html',
  styleUrls: ['./buttonsignup.component.css']
})
export class ButtonsignupComponent implements OnInit {
  buttonSignUp = 'Sign Up For A Free Trial';

  constructor() { }

  ngOnInit(): void {
  }

}
