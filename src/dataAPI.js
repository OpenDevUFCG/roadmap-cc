// Os dados de cada trilha estão descritos em formato de grafo aqui mas
// eles devem ser servidos por uma API para melhor modularização do código.
// Enquanto a API não existe e por se tratar de pouco volume de dados
// eles são mantidos aqui.

// Os dados foram gerados a partir da pasta data/new-data e não estão lá
// pois o react tem bloqueios sobre import com dados fora do domínio de /src

let infraData = [
    {   
        codigo:1411174,
        nome:"Introdu\u00e7\u00e3o \u00e0 Computa\u00e7\u00e3o",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:"nan",
        periodo:"1",
        trilha:"Infraestrutura",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/ic",
        sigla:"IC",
        child: "IC",
        parents: []
    },

    {
        codigo:1411327,
        nome:"Desenvolvimento de Software Integrado \u00e0 Infraestrutura",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1411308],
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:null,
        child: "Dev. de Soft",
        parents: []
    },
    {
        codigo:1411222,
        nome:"Sistemas Distribui\u0301dos",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:null,
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:"SD",
        child: "SD",
        parents: []
    },
    {
        codigo:1411310,
        nome:"Organiza\u00e7\u00e3o e Arquitetura de Computadores",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411174],
        periodo:"4",
        trilha:"Infraestrutura",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/oac",
        sigla:"OAC",
        child: "OAC",
        parents: ["IC"]
    },
    {
        codigo:1411182,
        nome:"Laborat\u00f3rio de Organiza\u00e7\u00e3o e Arquitetura de Computadores",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411174],
        periodo:"4",
        trilha:"Infraestrutura",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/loac",
        sigla:"LOAC",
        child: "LOAC",
        parents: ["IC"]
    },
    {
        codigo:1411190,
        nome:"Redes de Computadores",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411174],
        periodo:"5",
        trilha:"Infraestrutura",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/redes",
        sigla:"REDES",
        child: "REDES",
        parents: ["IC"]
    },
    {
        codigo:1411192,
        nome:"Sistemas Operacionais",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411310],
        periodo:"5",
        trilha:"Infraestrutura",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/so",
        sigla:"SO",
        child: "SO",
        parents: ["OAC", "LOAC"]
    },
    {
        codigo:1411315,
        nome:"Programa\u00e7\u00e3o Concorrente",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411192],
        periodo:"6",
        trilha:"Infraestrutura",
        dica:null,
        sigla:"CONCO",
        child: "CONCO",
        parents: ["SO"]
    },
    {
        codigo:1411330,
        nome:"Gere\u0302ncia de Redes",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1411190],
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:"GR",
        child: "GR",
        parents: ["REDES"]
    },
    {
        codigo:1411340,
        nome:"Seguranc\u0327a de Sistemas",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1411192,1411190],
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:null,
        child: "Seg. de Sis.",
        parents: ["SO", "REDES"]
    },
    {
        codigo:1411331,
        nome:"Interconexa\u0303o de Redes de Computadores",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1411190],
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:"IRC",
        child: "IRC",
        parents: ["REDES"]
    },
    {
        codigo:1411217,nome:"Projeto de Redes de Computadores",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1411190],
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:null,
        child: "Proj. Redes",
        parents: ["REDES"]
    },
    {
        codigo:1411337,
        nome:"Provisionamento e Operac\u0327a\u0303o de Infraestrutura",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1411192],
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:null,
        child: "POI",
        parents: ["SO"]
    } 
]

let ciencDadosData = [
    {
        codigo:1411311,
        nome:"Fundamentos de Matem\u00e1tica para Ci\u00eancia da Computa\u00e7\u00e3o I",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:"nan",
        periodo:"1",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/fmcc1",
        sigla:"FMCC1",
        child: "FMCC1",
        parents: []
    },
    {
        codigo:1411312,
        nome:"Fundamentos de Matem\u00e1tica para Ci\u00eancia da Computa\u00e7\u00e3o II",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411311],
        periodo:"2",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/fmcc2",
        sigla:"FMCC2",
        child: "FMCC2",
        parents: ["FMCC1"]
    },
    {
        codigo:1109126,
        nome:"Ca\u0301lculo Diferencial e Integral I",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411311],
        periodo:"2",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/calculo1",
        sigla:"CALC1",
        child: "CALC1",
        parents: ["FMCC1"]
    },
    {
        codigo:1109049,
        nome:"\u00c1lgebra Linear I",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411312],
        periodo:"3",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/linear",
        sigla:"LINEAR",
        child: "LINEAR",
        parents: ["FMCC2"]
    },
    {
        codigo:1109131,
        nome:"Ca\u0301lculo Diferencial e Integral II",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1109126],
        periodo:"3",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/calculo2",
        sigla:"CALC2",
        child: "CALC2",
        parents: ["CALC1"]
    },
    {
        codigo:1411307,
        nome:"L\u00f3gica para Computa\u00e7\u00e3o",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411312],
        periodo:"3",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/logica",
        sigla:"LOG",
        child: "LOG",
        parents: ["FMCC2"]
    },
    {
        codigo:1114129,
        nome:"Introdu\u00e7\u00e3o \u00e0 Probabilidade",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1109126,1411312],
        periodo:"4",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/probabilidade",
        sigla:"PROB",
        child: "PROB",
        parents: ["CALC1", "FMCC2"]
    },
    {
        codigo:1114222,
        nome:"Estat\u00edstica Aplicada",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1114129],
        periodo:"5",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/estatistica",
        sigla:"ESTAT",
        child: "ESTAT",
        parents: ["PROB"]
    },
    {
        codigo:1411171,
        nome:"Teoria da Computa\u00e7\u00e3o",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411309], // falar com leandra sobre isso
        periodo:"5",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/tc",
        sigla:"TC",
        child: "TC",
        parents: []
    },
    {
        codigo:1411316,
        nome:"Intelig\u00eancia Artificial",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411171],
        periodo:"6",
        trilha:"Ci\u00eancia de Dados",
        dica:null,
        sigla:"IA",
        child: "IA",
        parents: ["TC"]
    },
    {
        codigo:1411338,
        nome:"Reconhecimento de Padro\u0303es e Redes Neurais",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1114222,1411187],
        periodo:null,
        trilha:"Ci\u00eancia de Dados",
        dica:null,
        sigla:null,
        child: "Rec. de Pad. e Redes Neurais",
        parents: ["ESTAT"]
    },
    {
        codigo:1411339,
        nome:"Recuperac\u0327a\u0303o da Informac\u0327a\u0303o e Busca na Web",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:null,
        periodo:null,
        trilha:"Ci\u00eancia de Dados",
        dica:null,
        sigla:null,
        child: "Recup... Busca na Web",
        parents: []
    },
    {
        codigo:1411342,
        nome:"Sistemas de Apoio a\u0300 Decisa\u0303o",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:null,
        periodo:null,
        trilha:"Ci\u00eancia de Dados",
        dica:null,
        sigla:"SAD",
        child: "SAD",
        parents: []
    }
]

export default {infraData, ciencDadosData};