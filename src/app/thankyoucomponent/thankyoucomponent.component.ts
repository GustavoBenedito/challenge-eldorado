import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyoucomponent',
  templateUrl: './thankyoucomponent.component.html',
  styleUrls: ['./thankyoucomponent.component.css']
})
export class ThankyoucomponentComponent implements OnInit {
thankyou = 'Thank you for Signing Up!';
getstarted = 'Get started and experience Conneqt today.';
confirmationemail = 'A confiramtion email with your credentials was sent to your email addres.';
button = 'Get Started With Conneqt';
  constructor() { }

  ngOnInit(): void {
  }

}
