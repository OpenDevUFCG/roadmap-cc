<p align="center">
  <img src="https://i.imgur.com/rCKBR0t.png"
            alt="RoadMap CC Logo">
</p>


  
Roadmap para se tornar uma cientista da computação na UFCG.

## :pencil: Motivação

Durante a graduação, o estudante de computação entrará em contato com diversas áreas de estudo com
diversas frentes de atuação. As disciplinas obrigatórias introduzem essas frentes com conceitos
fundamentais que são exploradas posteriormente em detalhes nas disciplinas optativas. Isso acaba
criando relações de dependência entre as cadeiras do curso e o estudante precisa se planejar com
antecedência para analisar fatores como quantidade de vagas, frequência que é ofertada a cadeira e
até mesmo dicas prévias de como funciona essa disciplina.

Pensando nisso, o roadmap-CC atua como uma aplicação que auxiliará o estudante a conhecer melhor
as disciplinas, suas dependências e as principais áreas de conhecimento que ele poderá trilhar em
sua graduação.

## :question: Como contribuir?

_Quer sugerir alguma mudança no mapa? Criar uma nova ordem de cadeiras?
Abra uma [issue](https://github.com/OpenDevUFCG/roadmap-cc/issues/new/choose) e conversa com a gente!_

O roadmap-cc tem uma longa lista de atividades a serem desenvolvidas e você pode contribuir de 
várias formas. Se você não está acostumado com as tecnologias utilizadas no roadmap terá a opção
de contribuir com a atualização dos dados. Você pode sugerir uma alteração
ou faze-la você mesmo seguindo as instruções disponíveis no _[guia de contribuição](CONTRIBUTING.md)_.

Se você já tem conhecimento sobre as tecnologias utilizadas, sinta-se convidado a desenvolver
alguma de nossas features. Mantemos as principais atividades a serem desenvolvidas na aba _[issues](https://github.com/OpenDevUFCG/roadmap-cc/issues)_. Também convidamos você a sugerir melhorias na 
nossa documentação, adicionando dúvidas que tiverem através de issues, ou se preferir, através do
nosso canal no [discord](https://discordapp.com/channels/558293573494112257/558367503030681608). 

## :scroll: Configuração de Instalação

Se você deseja utilizar o roadmap-cc em modo de desenvolvimento, siga as seguintes instruções
no seu terminal para instalar o ambiente para desenvolver:

``` bash
# clonando o repositório
$ git clone https://github.com/OpenDevUFCG/roadmap-cc.git
$ cd roadmap-cc

# instalar dependências
$ npm install
ou
$ yarn

# servindo localmente com "hot reload" em localhost:3000
$ npm run dev
ou
$ yarn dev

```

## :bookmark_tabs: Tecnologias utilizadas

O Roadmap utiliza de tecnologias open-source para seu desenvolvimento, e as principais são:
* [NextJS](https://nextjs.org): Biblioteca inspirada em React para geração de páginas estáticas e ferramentas de SEO, usando Static Side Generation (SSG) e Server-Side Rendering (SSR);
* [Styled Components](https://styled-components.com): Ferramenta usada para construir componentes React mais estilizáveis e ativos; 
* [i18n](https://www.i18next.com): Internacionalização utilizando a ferramenta mais difundida atualmente. Com suporte a Português, Inglês e Espanhol. 
* [React Icons](https://react-icons.github.io/react-icons/): Biblioteca que agrega ícones de diversas fontes populares (não apenas FontAwesome ou Material Design), permitindo uma diversidade maior de representações.