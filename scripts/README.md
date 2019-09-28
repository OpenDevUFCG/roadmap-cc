# Scripts

Esta pasta contém scripts para auxiliar no desenvolvimento
de algumas funcionalidades.


## gera-relacionamento-disciplinas-ppc2017.ipynb

### Objetivo

Lê [arquivo de disciplinas do ppc 2017] e gera as relações de dependência entre disciplinas.
A necessidade desse script se dá, pois o campo de pre requisitos do csv está em forma de lista,
e, para gerar um grafo que descreva essas relações, é necessário mapear o id da disciplina e a
sua dependência. Abaixo segue um exemplo do mapeamento que é feito no script:

Formato origem:

codigo | nome | categoria | creditos | pre_requisitos | periodo | quantidade_vagas | areas | dicas | sigla
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
1411168 | Programação II | Obrigatório | 4 | "1411167, 1411180" | 2 | "95, 100" | https://github.com/OpenDevUFCG/Tamburetei/tree/master/prog2 | P2

Formato destino:

| cod_disciplina |  cod_pre_requisito
| :--: | :--: | 
| 1411168 | 1411167 
| 1411168 | 1411180 

### Descrição

O script é feito em [Jupyter Notebook] (python3) e importa os pacotes [pandas] e [numpy].


[arquivo de disciplinas do ppc 2017]: ../data/disciplinas-ppc-2017.csv
[Jupyter Notebook]: https://jupyter.org/
[pandas]: https://pandas.pydata.org/
[numpy]: http://www.numpy.org/