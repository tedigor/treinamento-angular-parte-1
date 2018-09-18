import { expect } from "chai";
import { Before, Given, Then } from "cucumber";
import { browser, by, element, ExpectedConditions } from 'protractor';
import { AppPage } from '../app.po';

let appPage: AppPage

let mensagem = element(by.tagName('p'));
let arrayDeFotos = element.all(by.css('.img-thumbnail'));

Before((() => { appPage = new AppPage(); }));

Given('que acessei o link {string}', function (url) {
    return appPage.navigateTo(url);
});



Then('As fotos serão carregadas', function () {
    return browser.wait(ExpectedConditions.presenceOf(appPage.fotos), 5000);
});



Given('que passei o {string} de busca', function (dados) {
    
    return appPage.passarDadosParaBusca(dados);
});



Then('serão apresentadas {int} imagens na tela', function (int) {
    
    return arrayDeFotos
    .then((fotos) => {
        return expect(fotos).to.have.lengthOf(int);
    });
});



Then('a descrição das fotos conterá na descrição o {string} passado', function (descricao) {
    return arrayDeFotos.map(function(elem,index){
        return elem.getAttribute('alt')
        .then((atributo) => {
            expect(atributo.toLowerCase()).to.have.string(descricao);
        })
    })

    
});

// Cenário verificar mensagem de erro
Given('que passei o parâmetro {string}', function (string) {

    return appPage.passarDadosParaBusca(string);
});

Given('aguardei a mensagem de erro', function () {
    
    return browser.wait(ExpectedConditions.visibilityOf(mensagem), 5000);
});

Then('a mensagem será igual a {string}', function (string) {
    return mensagem.getText()
    .then((mensagem) => {
        expect(mensagem).to.equal(string);
    });
});