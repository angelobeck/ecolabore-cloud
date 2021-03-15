
me.options = [

{
"type":"menu",
"label":"Arquivo",
"shortcut":"Alt_a",
"action":"menuOpen",
"argument":"file",
"children":[

{
"label":"Carregar dados de teste",
"children":[

]
},

{
"label":"Abrir arquivo local",
"shortcut":"o",
"action":"fileOpenLocal"
}

]
},

{
"type":"menu",
"label":"Exibir",
"shortcut":"Alt_e",
"action":"menuOpen",
"argument":"view",
"children":[

{
"label":"Modo de plotagem",
"children":[

{
"label":"Próximo modo",
"falseShortcut":"P",
"action":"csvPloter",
"argument":"p"
}

]
},

{
"label":"Escala X",
"children":[

{
"label":"Aumentar zoom",
"falseShortcut":"ArrowUp",
"action":"csvScaleX",
"argument":"ArrowUp"
},

{
"label":"Diminuir zoom",
"falseShortcut":"ArrowDown",
"action":"csvScaleX",
"argument":"ArrowDown"
},

{
"label":"Tudo",
"falseShortcut":"X",
"action":"csvScaleX",
"argument":"x"
},

{
"label":"1:1",
"falseShortcut":"Z",
"action":"csvScaleX",
"argument":"z"
}

]
},

{
"label":"Escala Y",
"children":[

{
"label":"Aumentar zoom",
"falseShortcut":"+",
"action":"csvScaleY",
"argument":"+"
},

{
"label":"Diminuir zoom",
"falseShortcut":"-",
"action":"csvScaleY",
"argument":"-"
},

{
"label":"Ajustar",
"falseShortcut":"Y",
"action":"csvScaleY",
"argument":"y"
}

]
},

{
"label":"Posição X",
"children":[

{
"label":"Deslocar à direita",
"falseShortcut":"ArrowRight",
"action":"csvOffsetX",
"argument":"ArrowRight"
},

{
"label":"Deslocar à esquerda",
"falseShortcut":"ArrowLeft",
"action":"csvOffsetX",
"argument":"ArrowLeft"
},

{
"label":"Próximo quadro",
"falseShortcut":"PageDown",
"action":"csvOffsetX",
"argument":"PageDown"
},

{
"label":"Quadro anterior",
"falseShortcut":"PageUp",
"action":"csvOffsetX",
"argument":"PageUp"
},

{
"label":"Início",
"falseShortcut":"Home",
"action":"csvOffsetX",
"argument":"Home"
},

{
"label":"Fim",
"falseShortcut":"End",
"action":"csvOffsetX",
"argument":"End"
}

]
},

{
"label":"Colunas",
"children":[

{
"label":"Primeira coluna",
"falseShortcut":"1",
"action":"csvDisplayColumn",
"argument":"1"
},

{
"label":"Segunda coluna",
"falseShortcut":"2",
"action":"csvDisplayColumn",
"argument":"2"
},

{
"label":"Terceira coluna",
"falseShortcut":"3",
"action":"csvDisplayColumn",
"argument":"3"
},

{
"label":"Quarta coluna",
"falseShortcut":"4",
"action":"csvDisplayColumn",
"argument":"4"
},

{
"label":"Quinta coluna",
"falseShortcut":"5",
"action":"csvDisplayColumn",
"argument":"5"
},

{
"label":"Sexta coluna",
"falseShortcut":"6",
"action":"csvDisplayColumn",
"argument":"6"
},

{
"label":"Sétima coluna",
"falseShortcut":"7",
"action":"csvDisplayColumn",
"argument":"7"
},

{
"label":"Oitava coluna",
"falseShortcut":"8",
"action":"csvDisplayColumn",
"argument":"8"
}

]
},

{
"label":"Cores",
"children":[

{
"label":"Próxima paleta de cores",
"falseShortcut":"C",
"action":"csvColorPalette"
},

{
"label":"Alternar preto e branco",
"falseShortcut":"V",
"action":"csvColorScheme"
},

{
"label":"Alternar segundo plano",
"falseShortcut":"B",
"action":"csvColorBackground"
}

]
},

{
"label":"Grade",
"children":[

{
"label":"Exibir/ocultar grade",
"falseShortcut":"G",
"action":"csvDisplayGrid"
},

{
"label":"Ocultar grade",
"action":"csvDisplayGrid",
"argument":"0"
},

{
"label":"Exibir grade simples",
"action":"csvDisplayGrid",
"argument":"1"
},

{
"label":"Exibir grade detalhada",
"action":"csvDisplayGrid",
"argument":"2"
}

]
}

]
},


{
"type":"menu",
"label":"Ajuda",
"shortcut":"Alt_a",
"action":"menuOpen",
"argument":"help",
"children":[

{
"label":"Índice da ajuda",
"key":"i",
"shortcut":"F1",
"action":"applicationOpen",
"argument":"ecolabore_help"
},

{
"label":"Iniciar rotinas de teste",
"action":"testStart"
},

{
"label":"Atualizar relatório de testes",
"action":"testRefresh"
}

]
}

];
