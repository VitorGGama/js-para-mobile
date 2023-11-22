# js-para-mobile

 Revisão e recursos novos de JS para mobile

 ## principais tópicos de atenção e estudos

 ### Variáveis e Contantes

 `let` e `const` possuem escopo de **Bloco** quando 
 declarado dentro de blocos (condicionais, loops), e escopo 
 **GLOBAL** quando declarado fora dos blocos.

 `var` possui escopo **GLOBAL** mesmo quando declarado 
 dentro de blocos. portanto, é acessível em praticamente
 qualquer lugar dentro da aplicação.

 `const` obrigatoriamente precisa ser inicializada com algum valor/expressão, 
 e este valor/expressão **nao pode ser modificado**. 

 ### Funções 

 Blocos de código reaprovetaveis que podem ser criadas de pelo 
 menos 3 formas:

 -Função nomeada/declarada
 -Função anônima
 -Arrow Function

 Nas bibliotecas e frameworks as sintaxes mais comuns são 
 Arrow Fuction e nomeada.
  

**Obs.:** Caso utilize as sintaxes anônimas ou arrow, 
certifique-se de **primeiro** declarar a função só depois chama-la.  

### Template Literal/String

Forma mais moderna de manipular dados estáticos e dinamicos, além
de permitir de uma forma mais fácil executar operações dentro de strings/códigos.
lembre-se do uso das **crases** e do bloco `${}` para execuções de código dinâmico
(variáveis, constantes e funções, etc).