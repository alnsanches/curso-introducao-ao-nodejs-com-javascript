# Introdução ao NodeJs com JavaScript

Curso realizado na plataforma da DIO que teve como objetivo fazer uma breve introdução ao NodeJS e NPM e durante as aulas foi feita a criação de uma aplicação utilizando o Node.js com o JavaScript que gerencia o uso de memória RAM.


## O que é o Node.JS?
O NodeJs é um ambiente de execução do JavaScript em server-side. Isso significa que ele nos dá a possibilidade de rodar localmente o JavaScript fora do navegador por exemplo.
O NodeJs surgiu em 2009 e foi criado por Ryan Dahl a partir do V8 do Chrome.

### Vamos falar um pouco sobre:

Todo navegador possui um Interpretador de JavaScript rodando ali por trás dos panos para fazer as coisas funcionarem direitinho:

Safari - Nitro
Mozilla - SpiderMonkey
Edge - Chakra
Chrome - V8


Com a criação do NodeJS, temos a possibilidade de rodar o JavaScript sem precisar de um navegador, diminuindo o processamento e trabalhando com interpretação just-in-time, em tempo real meus amigos.
O NodeJs, diferente de outros interpretadores, trabalha com single-thread, ou seja, imagina que cada requisição é um pedido de delivery... vai chegar uma hora que o quadro de pedidos vai estar cheio e se tiver um pedido que ainda não foi produzido e entregue, ele vai bloquear a passagem dos outros pedidos, gerando insatisfação dos clientes. Coitado do entregador.
O NodeJs trabalha com requisições assíncronas, ou seja, não precisa esperar todos os pedidos, vai entregando o que for ficando pronto. Assim todo mundo sai feliz. Assim, o processamento é não-bloqueante(non-blocking), pois funciona mesmo sem uma requisição estar pronta, do contrário seria bloqueante(blocking) e tudo ficaria parado.


Consequentemente, o entregador não precisa mais ficar preocupado e entrega o pedido assim que o mesmo for finalizado, depois volta no quadro de pedidos, pega os que faltaram e entrega logo após. Chamamos isso de Event-Loop.

Isso tudo em tempo real 😮😮😮.

### NPM (Node package manager)
Com a criação do NodeJS também surgiu o NPM. que é uma ferramenta de gerenciamento de pacotes do Node, serve pra gente dar um upgrade nos nossos projetos usando frameworks e bibliotecas.



* Exemplo do servidor local:
http://localhost:3000

![x2](https://user-images.githubusercontent.com/96800792/191110793-5ecf5d99-8c00-4021-9ee6-25497c5f2c5d.jpg)



Exemplo:

![V](https://user-images.githubusercontent.com/96800792/191110282-1da3f90f-6e49-4725-8336-6276e8f80cd0.jpg)


## Tecnologias 
- JavaScript 
- NodeJs
