
me.options = [


{
"label":"X",
"toolTip":"Ajustar à escala X",
"action":"csvScaleX",
"argument":"x",
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
"label":"Y",
"toolTip":"Ajustar à escala Y",
"action":"csvScaleY",
"argument":"y",
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
"label":"C",
"toolTip":"Próxima paleta de cores",
"action":"csvColorPalette",
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
"label":"P",
"toolTip":"Modo de plotagem",
"action":"csvPloter",
"argument":"p",
"children":[]
},

{
"label":"G",
"toolTip":"Exibir/ocultar grade",
"action":"csvDisplayGrid",
"children":[

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

];
