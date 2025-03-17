import { effect, Injectable, signal } from '@angular/core';

export interface Theme {
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  color: string;
  backgroundColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalThemeService {

  fontSize = signal("16px");
  fontFamily = signal('Arial');
  fontWeight = signal('normal');
  color = signal('#000000');
  backgroundColor = signal('#ffffff');
  backgroundColorList = signal([
    {name: 'White', value: '#ffffff'},
    {name: 'Black', value: '#000000'},
    {name: 'Blue', value: '#0000ff'},
    {name: 'Green', value: '#00ff00'},
    {name: 'Red', value: '#ff0000'},
    {name: 'Yellow', value: '#ffff00'},
  ]);

  constructor() { 
    this.loadStoredTheme();
    this.applyTheme();
  }

  setTheme(theme: Theme) {
    this.fontSize.set(theme.fontSize);
    this.fontFamily.set(theme.fontFamily);
    this.fontWeight.set(theme.fontWeight);
    this.color.set(theme.color);
    this.backgroundColor.set(theme.backgroundColor);
  }

  loadStoredTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.setTheme(JSON.parse(theme));
    }
  }

  saveTheme():void {
    const theme : Theme = {
      fontSize: this.fontSize(),
      fontFamily: this.fontFamily(),
      fontWeight: this.fontWeight(),
      color: this.color(),
      backgroundColor: this.backgroundColor()
    }

    var themeParse = JSON.stringify(theme);
    localStorage.setItem('theme', themeParse);
  }

  applyTheme() {
    effect(() => {
      // document.body.style.fontSize = this.fontSize() + 'px';
      document.body.style.fontFamily = this.fontFamily();
      document.body.style.fontWeight = this.fontWeight();
      document.body.style.color = this.color();
      // document.body.style.backgroundColor = this.backgroundColor();
      document.documentElement.style.setProperty('--font-size', this.fontSize() + 'px');
      document.documentElement.style.setProperty('--background-color', this.backgroundColor());
    });
  }

  setFontSize(fontSize: string) {
    this.fontSize.set(fontSize);
  }

  setBackgroundColor(color: string) {
    this.backgroundColor.set(color);
  }



}
