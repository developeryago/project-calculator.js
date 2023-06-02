# project-calculator.js
 Calculadora criada com a utilização de HTML5, CSS3 e Javascript (vanilla)
 
 Olá, como vai?

Venho compartilhar através deste repositório uma calculadora responsiva com várias opções de cálculo, ela respeita ordem de precedência de acordo com os parênteses, calcula resto da divisão e possui uma área "copy" tornando possível copiar o resultado diretamente para a área de transferências do usuário.Vou dissertar um pouco sobre foi o processo de criação da mesma.

No princípio restringir a área principal de input para que aceitasse apenas caracteres compatíveis com as teclas, então criei um array "allowedKeys" contendo todos os caracteres que minha calculadora iria possuir e posteriormente uma função "keydown" para que fossem aceitas apenas as teclas precionadas com valores compatíveis com os que estivessem no array "allowedKeys". <br>
Após, capturei todos os botões ".chakKey" utilizando o .forEach e adicionei um evento do click que adiciona ao input o valor do atributo Html dataset do botão clicado. <br>
Para resolver o cálculo já inserido no input atrasvés dos valores dataset utilizei uma função que chamei de "calculate" e dentro dela fiz uma verificação simples de erro atribuindo previamente ao input desabilitado da área inferior informações de erro que serão rapidamente substituídas pelo resultado se o método eval() possa resolver a função inserida, caso contrário a mensagem de erro permanece e acaba sendo exibida no campo inferior. <br>
Quanto ao botão "copy" fiz uso do 'navigator.clipboard.writeText()' e dento dele coloquei o valor do campo de exibição do resultado.
<br>
Link: https://developeryago.github.io/project-calculator.js/
<br>
Espero que goste!
