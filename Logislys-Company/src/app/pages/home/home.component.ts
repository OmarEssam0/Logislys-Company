import { Component } from '@angular/core';
import { SliderComponent } from '../../component/slider/slider.component';
import { AboutUSComponent } from "../../component/about-us/about-us.component";
import { ServicesComponent } from "../../component/services-section/services.component";
import { TechnologyComponent } from "../../component/technology/technology.component";
import { TRANSITTIMEComponent } from "../../component/transit-time/transit-time.component";
import { TrustedByComponent } from "../../component/trusted-by/trusted-by.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, AboutUSComponent, ServicesComponent, TechnologyComponent, TRANSITTIMEComponent, TrustedByComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
