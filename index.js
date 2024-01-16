function ranking(Vitorias, Derrotas){

    let saldoVitorias = (Vitorias - Derrotas)
      let nivel
    
        if (saldoVitorias <10){
            nivel = "Ferro"
        }
        else if (saldoVitorias <20){
            nivel = "Bronze"
        }
        else if (saldoVitorias <50){
            nivel = "Prata"
        }
        else if (saldoVitorias <80){
            nivel = "Ouro"
        }
        else if (saldoVitorias <90){
            nivel = "Diamante"
        }
        else if (saldoVitorias <100){
            nivel = "Lendário"
        }
        else if (saldoVitorias >=101){
            nivel = "Imortal"
        }
      return console.log("O herói tem um saldo de " + saldoVitorias +" e está no nível " + nivel)
    }
    
    ranking(151,36)
    