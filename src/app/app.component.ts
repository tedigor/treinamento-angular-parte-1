import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'http://cdn01.justificando.cartacapital.com.br/wp-content/uploads/2017/06/09155558/bolsonaro.png',
      description: 'bolsomito'
    },
    {
      url: 'https://cdn-images-1.medium.com/max/645/1*OqoJL4hclVsoQwBgqoZnHg.jpeg',
      description: 'mito'
    },
    {
      url: 'https://i2.wp.com/gigadicas.com/v2/wp-content/uploads/2017/08/bolsomito.jpg?fit=900%2C450',
      description: 'mitoAmor'
    }
  ];
}
