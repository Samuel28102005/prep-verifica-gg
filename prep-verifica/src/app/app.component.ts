import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>()
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    let cont=Number (link.value)
    for (let i:number=0;i<cont;i++){
      this.articles.push(title.value);
    }
  return false;
  }

  title = 'prep-verifica';
}


