import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  
  campoBusca: ElementFinder = element(by.tagName('input'));
  fotos: ElementFinder = element(by.tagName('img'))
  
    
  navigateTo(url: string) {
    return browser.get(url);
  }

  imagemPorDescricao(descricao: string) {
    return element(by.css('img[alt="' + descricao + '"]'));
  }

  passarDadosParaBusca(dados: string) {
    return this.campoBusca.sendKeys(dados);
  }


}
