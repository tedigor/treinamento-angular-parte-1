# language: pt
Funcionalidade: teste inicial do alurapic
    Realizar testes com diversos cenários
        
    Contexto: acessar o perfil do usuário flávio
        Dado que acessei o link '/user/flavio'
        Então As fotos serão carregadas

    Esquema do Cenário: verificação de busca
        Dado que passei o "<parametro>" de busca
        Então serão apresentadas <quantidade> imagens na tela
        E a descrição das fotos conterá na descrição o "<parametro>" passado
        Exemplos:
        | parametro | quantidade |
        | farol     |     2      |
        | barco     |     1      |  
        
    Cenário: verificar mensagem de erro ao buscar uma descrição inexistente
        Dado que passei o parâmetro "ted"
        E aguardei a mensagem de erro
        Então a mensagem será igual a "Sorry, no photos"