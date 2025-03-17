import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-example-01',
  imports: [],
  template: `
  
  <div class="w-full flex flex-col items-center justify-center h-full">
    <h1>Example 01</h1>
    <p class="text-justify letter-spacing" >Example 01 is a simple example of a lazy-loaded Angular
      component. This component is loaded asynchronously when the
      user navigates to the /example1 route.</p>
  </div>
  
  `,
  styleUrl: './example-01.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example01Component { }
