

'''
ESPECIFICAÇÕES:
    - Os dados base foram tirados da primeira versão do roadmap
    - Os pré-requisitos obrigatórios foram atualizados conforme o Projeto Pedagógico do Curso de Computação@UFCG
    - Os códigos das disciplinas foram atualizados com base no Controle Acadêmico. Acesso em: 23/11/2021
'''


import pandas as pd 
import numpy as np
import ast

# lendo dados
df = pd.read_csv("https://raw.githubusercontent.com/OpenDevUFCG/roadmap-cc/development/data/disciplinas-ppc-2017.csv")
# removendo a coluna "quantidade de vagas"
df = df.drop(["quantidade_vagas"], axis=1)
# renomeando colunas
df = df.rename(columns={'pre_requisitos': 'pre_requisito', 'areas': 'trilha', 'dicas': 'dica'})

# substituindo todos os - por NaN
df = df.replace('-', np.nan, regex=True)
# tirando aspas duplas e transformando coluna em lista (sem espaço em branco nas strings da lista)
df['pre_requisito'] = df['pre_requisito'].str.strip('"').str.split(',\s')

# renomeando trilha
df['trilha'] = df['trilha'].str.replace('Dev','Engenharia de Software', regex=True)
df['trilha'] = df['trilha'].str.replace('Infra','Infraestrutura', regex=True)
df['trilha'] = df['trilha'].str.replace('Inteligência','Ciência de Dados', regex=True)
# [SUSPENDED] colocando geral em todas as cadeiras
# df['trilha'] = df['trilha'].replace('Geral', np.nan, regex=True)
# df['trilha'] = df['trilha'].apply(lambda x: ['Geral'] if pd.isnull(x) else ['Geral', x])

# adicionando BD na trilha Engenharia de Software
df.loc[df.nome == 'Banco de dados I', 'trilha'] = "Engenharia de Software"

''' MUDANÇAS NAS CADEIRAS '''
# adiciona nome em cadeira que ta com nome NaN
df.loc[df.nome.isna() == True, 'nome'] = 'Interface Homem-Máquina'

# muda o nome de cadeira TECC
df.loc[df.nome == 'TECC(Verificação e Validação de Software)', 'nome'] = 'Verificação e Validação de Software'

# remove todas as TECC
df = df[~df.nome.str.contains("TECC")]

# adiciona a cadeira 'Visão Computacional'
new_row = {'codigo': 1411344, 
            'nome':'Visão Computacional', 
            'categoria': 'Optativa Específica', 
            'creditos': 4,
            'pre_requisito': np.nan,
            'periodo': np.nan,
            'trilha': ['Geral', 'Ciência de Dados'],
            'dica': np.nan,
            'sigla': np.nan}
df = df.append(new_row, ignore_index=True)

# alterando o código cálculo 1 (de 1109103 pra 1109126) nas colunas 'codigo' e 'pre-requisitos'
df['codigo'] = df['codigo'].astype(str).str.replace("1109103", "1109126").astype(int)
df['pre_requisito'] = df['pre_requisito'].astype(str).str.replace("1109103", "1109126").str.replace("'", "")
# alterando o código cálculo 2 (de 1109053 pra 1109131) nas colunas 'codigo' e 'pre-requisitos'
df['codigo'] = df['codigo'].astype(str).str.replace("1109053", "1109131").astype(int)
df['pre_requisito'] = df['pre_requisito'].astype(str).str.replace("1109053", "1109131").str.replace("'", "")


''' mudando os pré-requisitos inconsistentes, com base no PCC '''
def perfectEval(anonstring):
        try:
            ev = ast.literal_eval(anonstring)
            return ev
        except ValueError:
            corrected = "\'" + anonstring + "\'"
            ev = ast.literal_eval(corrected)
            return ev 

df.pre_requisito = df.pre_requisito.replace(np.nan, '[]', regex=True).apply(lambda x: perfectEval(x))

# tirando LOAC(1411182) dos pré-requisitos de SO
so = df.nome == 'Sistemas Operacionais'
df.loc[so, 'pre_requisito'] = df[so].apply(lambda row: [i for i in row.pre_requisito if i != 1411182], axis=1)

# trocando PLP(1411309) por TC(1411171) nos pré-requisitos de IA
ia = df.nome == 'Inteligência Artificial'
df.loc[ia, 'pre_requisito'] = df[ia].apply(lambda row: [1411171 if i == 1411309 else i for i in row.pre_requisito], axis=1)

# tirar EDA(1411305) dos pré-requisitos de DACA
daca = df.nome == 'Desenvolvimento de Aplicações Corporativas Avançadas'
df.loc[daca, 'pre_requisito'] = df[daca].apply(lambda row: [i for i in row.pre_requisito if i != 1411305], axis=1)

# trocando LINEAR(1109049) por ESTATÍSTICA(1114222) nos pré-requisitos de RPRN
rprn = df.nome == 'Reconhecimento de Padrões e Redes Neurais'
df.loc[rprn, 'pre_requisito'] = df[rprn].apply(lambda row: [1114222 if i == 1109049 else i for i in row.pre_requisito], axis=1)

# tirando os pré-requisitos dessas cadeiras
df.loc[df.nome == 'Metodologia Científica', 'pre_requisito'] = np.nan
df.loc[df.nome == 'Administração de Sistemas', 'pre_requisito'] = np.nan
df.loc[df.nome == 'Algoritmos Avançados I', 'pre_requisito'] = np.nan
df.loc[df.nome == 'Algoritmos Avançados II', 'pre_requisito'] = np.nan
df.loc[df.nome == 'Algoritmos Avançados III', 'pre_requisito'] = np.nan
df.loc[df.nome == 'Algoritmos Avançados IV', 'pre_requisito'] = np.nan
df.loc[df.nome == 'Economia de Tecnologia da Informação', 'pre_requisito'] = np.nan
df.loc[df.nome == 'Recuperação da Informação e Busca na Web', 'pre_requisito'] = np.nan
df.loc[df.nome == 'Sistemas de Apoio à Decisão', 'pre_requisito'] = np.nan
df.loc[df.nome == 'Sistemas Distribuídos', 'pre_requisito'] = np.nan

# salvando o dataframe modificado com todas as trilhas
df.to_json("../data/new-data/roadmap-data.json", orient="records")

# salvando a trilha 'Infraestrutura'
df.query("trilha == 'Infraestrutura'").to_json("../data/new-data/trilha-infra-data.json", orient="records")
# salvando a trilha 'Engenharia de Software'
df.query("trilha == 'Engenharia de Software'").to_json("../data/new-data/trilha-eng-software-data.json", orient="records")
# salvando a trilha 'Ciência de Dados'
df.query("trilha == 'Ciência de Dados'").to_json("../data/new-data/trilha-dados-data.json", orient="records")


