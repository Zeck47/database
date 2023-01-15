// Livrarias essenciais,
const fs = require("fs");
var db = {};
try {
    var Arquivo = fs.readFileSync("./database.json")
} catch {
    console.log('Destino inexistente, arquivo JSON em falta.')
    return
}
var Valor = JSON.parse(Arquivo);

try {
    // Observar se o destino existe,
    Arquivos = require('./database.json');
    let Existente = Arquivos[0].MyArray[0];
} catch {
    // Retorno cujo destino não exista,
    Valor.push({
        "MyArray": [
            {
                "NUMBER": 0
            }
        ]
    },);
    // Atualizar o arquivo de destino,
    return fs.writeFile("./database.json", JSON.stringify(Valor, null, 4), (err) => { if (err) return console.log(err); console.log("Destino vazio, substituído por um novo arquivo."); });
}

// Alterar valor de destino,
setInterval(() => {
    let NovoValor = JSON.parse(fs.readFileSync('./database.json', 'utf8'));
    NovoValor[0].MyArray[0].NUMBER +=1;
    fs.writeFileSync('./database.json', JSON.stringify(NovoValor, null, 4));
    Destino = NovoValor[0].MyArray[0].NUMBER;
    return console.log('Seu destino:', Destino);
}, 1000);
