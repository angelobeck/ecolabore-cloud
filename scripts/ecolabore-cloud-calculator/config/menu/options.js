
me.options = [

{
"type":"menu",
"label":"Operações",
"shortcut":"Alt_o",
"action":"menuOpen",
"argument":"operations",
"children":[

{
"label":"Somar",
"falseShortcut":"+",
"action":"calculatorOperation",
"argument":"+"
},

{
"label":"Subtrair",
"falseShortcut":"-",
"action":"calculatorOperation",
"argument":"-"
},

{
"label":"Multiplicar",
"falseShortcut":"*",
"action":"calculatorOperation",
"argument":"*"
},

{
"label":"Dividir",
"falseShortcut":"/",
"action":"calculatorOperation",
"argument":"/"
},

{
"label":"Inverter sinal (+/-)",
"falseShortcut":"i",
"action":"calculatorUnaryOperation",
"argument":"i"
},

{
"label":"Inverso (1/X)",
"falseShortcut":"r",
"action":"calculatorUnaryOperation",
"argument":"r"
},

{
"label":"Obter o valor de Pi",
"falseShortcut":"p",
"action":"calculatorUnaryOperation",
"argument":"p"
},


{
"label":"Seno",
"falseShortcut":"s",
"action":"calculatorUnaryOperation",
"argument":"s"
},


{
"label":"Cosseno",
"falseShortcut":"o",
"action":"calculatorUnaryOperation",
"argument":"o"
},

{
"label":"Tangente",
"falseShortcut":"t",
"action":"calculatorUnaryOperation",
"argument":"t"
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
}

]
}

];
