import { Component } from '@angular/core';

@Component({
  selector: 'app-samplecomponent',
  standalone: true,
  imports: [],
  templateUrl: './samplecomponent.component.html',
  styleUrl: './samplecomponent.component.css'
})
export class SamplecomponentComponent {
title="Meta scifor technology"
}

// @Component({
//   selector: 'app-samplecomponent',
//   templateUrl: './samplecomponent.component.html',
//   styleUrl:'./samplecomponent.component.css'
// })
// export class SamplecomponentComponent{
//   title = 'Welcome to Angular';
//   description = 'This is a simple example of interpolation.';
// }