# Guia de Contribuição

## Contato

Quer contribuir para o roadmap-cc? Estamos abertos a sugestões, melhorias,
soluções de bugs e qualquer outra contribuição que você tenha a nos apresentar.
Para realizar sua contribuição, entre em contato conosco através de uma
[nova issue] e siga os passos da próxima sessão. Essa é a melhor forma 
para você nos contactar formalmente, mas também usamos o [gitter], chat 
open source que você pode entrar em contato para ter uma resposta mais rápida
e informal por lá. Contudo, reforçamos que o gitter é uma ferramenta de teor
informal, precisamos centralizar todas as issues no repositório para manter
a transparência e coerência das features.

## Como sugerir uma nova feature, melhoria ou correçāo de bug?

### Passo 1

Ao criar uma [nova issue], você terá dois templates que poderão ser usados 
para preencher as informações que esperamos da sua issue. Qualquer informação
que ajude a entender melhor sua issue, poderá ser feita nela.

### Passo 2

É necessário que você adicione em "Projects" o projeto de "Taskboard" para 
que os mantedores do repositório possam filtrar as issues que cabem na versão
atual do repositório ou vão para uma versão futura. 

![taskboard]

É pedido que você não assine
a issue até que tenha tido feedback de um mantedor e for implementar sua 
solução. Para mais detalhes, você poderá checar a sessão abaixo para saber
como contribuir.

### Passo 3

Tente adicionar as labels que melhor descreva a sua issue. Temos as seguintes
labels que podem ser utilizadas:

| tags               | quando utilizar                                 |
| ------------------ |:-----------------------------------------------:|
| documentação       | precisa melhorar uma documentação               |
| bug                | funcionalidade está retornando valor inesperado |
| duplicada          | já foi sugerida em outra issue                  |
| em progresso       | está sendo feita por outra pessoa               |
| "good first issue" | é uma issue simples para iniciantes             |
| invalido           | algo que você acha estar incerto no projeto     |
| necessita atenção  | poderá ser um problema futuramente              |
| projeto            | envolve projetar ideias para novas tasks        |
| "standby"          | está parada por hora                            |
| sugestão           | poderia ser feito essa melhoria                 |
| wontfix            | alguma interface que não esteja funcionando     |

Adiciona a tag "standby" para ajudar aos contribuidores a filtrarem as issues
ainda não avaliadas. Se não conseguir identificar as outras tags corretamente,
não tem problemas, os mantedores irão fazer isso ao avaliar sua issue.

### Passo 4

Por fim, um mantedor avaliará a sua issue e verá a possibilidade de executar
na versão atual ou congelar sua issue para a próxima versão. Se a issue
for adicionada ao projeto, será possível ver ela no [taskboard] das próximas
ações. 

## Como contribuir?

### Passo 1

O repositório tem a aba [issue] com as principais atividades que precisamos
de contribuição. Se você deseja resolver uma issue, certifique que ela não
esteja com a label "standby" nem "em andamento". Essas issues, respectivamente,
não foram avaliadas pelos mantedores ou ainda não poderão ser implementadas; e 
já estão sendo resolvidas por outros contribuidores.

#### Observação para Iniciante

Para os iniciantes que quiserem ingressar em alguma issue é recomendado 
que ele filtre as issues com a tag "[good first issue]". Nela você verá 
issues mais simples de serem resolvidas.

### Passo 2

Para resolver uma issue, pedimos ao contribuidor que crie um fork do 
repositório como mostra o gif abaixo:

![fork]

Isso é importante, pois ajuda a movimentar o repositório e ajuda a propagar
que você está contribuindo para um projeto open source :smile:. 

### Passo 3

Pedimos que ao iniciar uma resolução de issue, assine ela para que outras
pessoas não tentem resolver também. Além disso, pedimos para adicionar a 
tag "em andamento" para que seja possível filtrar as issues que já estão
sendo resolvidas em [issue]. 

### Passo 4

Ao finalizar sua contribuição, realize o Pull Request para a branch "development".
Nela mantemos sempre uma versão de desenvolvimento que, ao final das implementações
esperadas para aquela versão, será lançada para produção na branch "master".

![pr]

### Passo 4

Ao ser avaliado, a PR passará por um revisor do repositório e ele poderá
realizar sugestões de melhorias, e, após avaliado, o código passará a 
fazer parte do repositório.

## Criação e uso das branchs

1. Padronização nos nomes das branchs: `num_issue-breve-descricao-da-issue`  
Por exemplo: `26-adiciona_readme`

2. Branchs seguras: Temos duas branchs principais, a `master`, e a `development`,   
é a partir dessa  que criamos as outras branchs para desenvolvimento de features,  
correção de bugs etc, e vamos trabalhando nessas coisas, quando o código delas  
estiver pronto, pedimos merge para `development`. Finalmente, quando uma versão do  
projeto estiver finalizada os próprios maintainers irão mesclar a `master`. 

*Obs*: Tomamos essa decisão para garantir que a branch `master` sempre contenha uma versão completa, estável e funcional.



[nova issue]: https://github.com/OpenDevUFCG/roadmap-cc/issues/new/choose
[gitter]: https://gitter.im/OpenDevUFCG/roadmap-cc
[issue]: https://github.com/OpenDevUFCG/roadmap-cc/issues
[good first issue]: https://github.com/OpenDevUFCG/roadmap-cc/issues?q=is%3Aopen+is%3Aissue+label%3A%22%5C%22good+first+issue%5C%22%22
[fork]: .github/GIFS/fork.gif
[pr]: .github/GIFS/pr.gif
[taskboard]: .github/GIFS/taskboard.gif
