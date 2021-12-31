import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footercomponent',
  templateUrl: './footercomponent.component.html',
  styleUrls: ['./footercomponent.component.css']
})
export class FootercomponentComponent implements OnInit {
textobasico = 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. ';
importantlinks = 'Important Links ';
importantlinksarray = [
  'About Us',
  'Support',
  'Contact Us',
  'Our Products',
  'Payment Methods'
]
usefullinks = 'Useful Links';
usefullinksarray = [
  'Useful Links',
  'Cases',
  'White Papers',
  'FAQ',
  'Blog' 
]
getintouch = 'Get in Touch';
getintoucharray = [
  'Email: contact@conneqt.com',
  'Phone: 469-844-8261' 

]

  constructor() { }

  ngOnInit(): void {
  }

}
