<p align="center">
  <img src="https://i.imgur.com/rCKBR0t.png"
            alt="RoadMap CC Logo">
</p>

<p align="center">
  <a href="https://travis-ci.com/OpenDevUFCG/roadmap-cc">
        <img src="https://travis-ci.com/OpenDevUFCG/roadmap-cc.svg?branch=development"
            alt="Build Status"></a>
  <a href="https://github.com/facebook/jest">
        <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg"
            alt="testado com jest"></a>
  <a href="https://discordapp.com/invite/vFFGGEE">
        <img src="https://img.shields.io/discord/558293573494112257.svg?logo=discord"
            alt="chat on Discord"></a>
<p>
  
Roadmap para se tornar uma cientista da computação na UFCG.

## Motivação

Durante a graduação, o estudante de computação entrará em contato com diversas áreas de estudo com
diversas frentes de atuação. As disciplinas obrigatórias introduzem essas frentes com conceitos
fundamentais que são exploradas posteriormente em detalhes nas disciplinas optativas. Isso acaba
criando relações de dependência entre as cadeiras do curso e o estudante precisa se planejar com
antecedência para analisar fatores como quantidade de vagas, frequência que é ofertada a cadeira e
até mesmo dicas prévias de como funciona essa disciplina.

Pensando nisso, o roadmap-CC atua como uma visualização que auxiliará o estudante a conhecer melhor
as disciplinas, suas dependências e as principais áreas de conhecimento que ele poderá trilhar em
sua graduação.

## Como contribuir?

_Quer sugerir alguma mudança no mapa? Criar uma nova ordem de cadeiras?
Abra uma [issue] e conversa com a gente!_

O roadmap-cc tem uma longa lista de atividades a serem desenvolvidas e você pode contribuir de 
várias formas. Se você não está acostumado com as tecnologias utilizadas no roadmap terá a opção
de contribuir com a atualização dos dados. Mantemos um diretório chamado __data__ que contém os
principais dados utilizados para a construção da visualização. Você pode sugerir uma alteração
ou faze-la você mesmo seguindo as instruções disponíveis no _[guia de contribuição](CONTRIBUTING.md)_.

Se você já tem conhecimento sobre as tecnologias utilizadas, sinta-se convidado a desenvolver
alguma de nossas features. Mantemos as principais atividades a serem desenvolvidas na aba _[issue](https://github.com/OpenDevUFCG/roadmap-cc/issues)_. Também convidamos você a sugerir melhorias na 
nossa documentação, adicionando dúvidas que tiverem através de issues, ou se preferir, através do
nosso canal no [discord](https://discordapp.com/channels/558293573494112257/558367503030681608). 

## Configuração de Instalação

Se você deseja utilizar o roadmap-cc em modo de desenvolvimento, siga as seguintes instruções
no seu terminal para instalar o ambiente para desenvolver:

``` bash
# clonando o repositório
$ git clone https://github.com/OpenDevUFCG/roadmap-cc.git
$ cd roadmap-cc

# instalar dependências
$ yarn install

# servindo localmente com "hot reload" em localhost:8080
$ yarn run serve

# construindo para produção e inicializando servidor
$ yarn run build
$ yarn start

# gerando projeto estático
$ yarn run generate
```

Para explicação detalhada de como as coisas funcionam, verifique a [documentação do Vue.js].

## Dados

Tem interesse em saber como conseguimos esses dados? Acesse nossa [wiki]

## Versionamento

Cada versão nossa, tem o seguinte formato:  
`MAJOR.MINOR.PATCH`  
Por exemplo: `1.0.0`  
Alteramos a versão Maior(MAJOR), quando fazemos mudanças incompatíveis na API existente,  
Alteramos a versão Menor(MINOR), quando adicionamos funcionalidades mantendo compatibilidade com o que existe,   
Alteramos a versão de Correção(PATCH), quando corrigimos falhas mantendo a compatibilidade.

Nos baseamos no [SemVer], verifique o link para mais informações.  
Para visualizar as versões disponíveis, veja as [tags] do nosso repositório.

[documentação do vue.js]: https://vuejs.org/
[wiki]: https://github.com/OpenDevUFCG/roadmap-cc/wiki/RoadMap-CC---Wiki
[tags]: https://github.com/OpenDevUFCG/roadmap-cc/tags
[SemVer]: https://semver.org/lang/pt-BR/
[issue]: https://github.com/OpenDevUFCG/roadmap-cc/issues/new
