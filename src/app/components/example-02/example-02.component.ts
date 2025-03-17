import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-example-02',
  imports: [],
  template: `
  
  <div class="container">
    <h1>Example 02</h1>
    <p>Example 02 is a simple example of a lazy-loaded Angular
      component. This component is loaded asynchronously when the
      user navigates to the /example2 route.</p>
  </div>
  `,
  styleUrl: './example-02.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example02Component { }
