import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GlobalThemeService } from './services/global-theme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'theme-change-signals';

  themeService = inject(GlobalThemeService);

  setFont(event: any){
    const value = event.target as HTMLInputElement;
    this.themeService.setFontSize(value.value);
  }

  setBackgroundColor(event: any){
    const value = event.target as HTMLInputElement;
    this.themeService.setBackgroundColor(value.value);
  }


}
