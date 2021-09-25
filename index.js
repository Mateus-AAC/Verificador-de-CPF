const cpf = require('cpf')
const readline = require('readline-sync')
const fs = require('fs')
const database = require('./database/database.json')

console.log('//////////////////////////////')
console.log('/                            /')
console.log('/                            /')
console.log('/     verificador de cpf     /')
console.log('/                            /')
console.log('/                            /')
console.log('//////////////////////////////')

const opcao = readline.question('informe o cpf:')

function verificador(opcao){
    if (cpf.isValid(opcao)){
        console.clear()
        console.log(`o cpf ${opcao} e valido`)

        database.push(opcao)
        fs.writeFileSync('./database/database.json', JSON.stringify(database))
    }else{
        console.clear()
        console.log(`o cpf ${opcao} e invalido, por favor informe um valido`)
    }
}

verificador(opcao)