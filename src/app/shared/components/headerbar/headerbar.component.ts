import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  AboutUs(){
    this.router.navigate(['/about-us'])
  }

  ITconsult(){
    this.router.navigate(['/it-consultancy'])
  }

  Brokersure(){
    this.router.navigate(['/brokersure'])
  }

  RSS(){
    this.router.navigate(['/return-submission-solution'])
  }

  Partners(){
    this.router.navigate(['/partners'])
  }

  Ms365Packs(){
    this.router.navigate(['/ms-365-packs'])
  }

  MsDynamics(){
    this.router.navigate(['/ms-dynamics'])
  }
  MsAzure(){
    this.router.navigate(['/ms-azure'])
  }
  BI(){
    this.router.navigate(['/business-intelligence'])
  }

  OfficeProd(){
    this.router.navigate(['/office-productivity'])
  }
Infras(){
  this.router.navigate(['/infrastructure'])
}
Finstar(){
  this.router.navigate(['/finstar'])
}
Msbi(){
  this.router.navigate(['/ms-power-BI'])
}

Backpower(){
this.router.navigate(['/backpower'])
}
MsOs(){
this.router.navigate(['/ms-operating-system'])
}
Digi(){
  this.router.navigate(['/digisation'])
}
CoreB(){
  this.router.navigate(['/corebanking-sys'])

}
Bsysintegration(){
  this.router.navigate(['/business-sys-integration'])
}
}
