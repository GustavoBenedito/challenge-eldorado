import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {
makingdistances = 'Making distances a meaningless thing.';
weare = 'we are ';
conneqt = 'conneqt';
youteam = 'Your team aways connected';
yourteamarray = [
  'One on one and group meetings',
  'Record Meetings',
  'Screen share',
  'Share control over screens',
  'Schedule and send remindes'
] ;
getafreetrial = 'Get a free trial';
seehowconneqt = 'See how Conneqt can solve your communication needs.';
seehowhidden = 'See how Conneqt can solve your';
communicationneeds = 'communication needs.';
startatrialnow = 'Start a trial now';
orpurchasealicenca = 'Or purchase a license';
contactyourlocal = 'Contact your local reseller to request a license trial or purchase Conneqt';
globalreseller = 'Global Reseller';
authorizedreseller = 'John Appleseed - Authorized Reseller';
companywebsite = 'Company Website';
tef = '469-844-8261';
brazil = 'Brazil';
brazilresellers = [
  'Ultratech Revendedora',
  'BlueFin',
  'Gold Comm Sistemas',
  'Centraltek'
]
buttonLogin = 'Login';

constructor() { }

  ngOnInit(): void {
    console.log(this.yourteamarray)
  }

}
