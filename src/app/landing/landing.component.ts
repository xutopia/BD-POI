import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  title: string = 'Background Map';
  lat: number = 41.0157;
  lng: number = -74.20911;
  zoom: number = 12;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(): void {
    this.router.navigate(['/search'])
  }

}
