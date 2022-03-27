let qntHomens = document.getElementById("homens")
let qntMulheres = document.getElementById("mulheres")
let qntCriancas = document.getElementById("criancas")
let qntduracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")

function calcular() {

    let homens = qntHomens.value
    let mulheres = qntMulheres.value
    let criancas = qntCriancas.value
    let duracao = qntduracao.value

    let qcerva = homens * cervaH(duracao) + mulheres * cervaM(duracao)
    let qcarne = homens * carneH(duracao) + mulheres * carneM(duracao) + (carneH(duracao) / 2 * criancas)
    let qfrango = homens * frangoH(duracao) + mulheres * frangoM(duracao) + (frangoH(duracao) / 2 * criancas)
    let qlinguica = homens * linguicaT(duracao) + mulheres * linguicaT(duracao) + (linguicaT(duracao) / 2 * criancas)
    let qpao = homens * paoT(duracao) + mulheres * paoT(duracao) + (paoT(duracao) / 2 * criancas)
    let qbebida = homens * bebidaA(duracao) + mulheres * bebidaA(duracao) + criancas * bebidaC(duracao)

    resultado.innerHTML = `<p>- É necessário ${Math.ceil(qcerva/350)} latas de cerveja</p>`
    resultado.innerHTML += `<p>- É necessário ${Math.ceil(qcarne/1000)} Kg de carne</p>`
    resultado.innerHTML += `<p>- É necessário ${Math.ceil(qfrango)} gramas de frango</p>`
    resultado.innerHTML += `<p>- É necessário ${Math.ceil(qlinguica)} gramas de linguiça</p>`
    resultado.innerHTML += `<p>- É necessário ${Math.ceil(qpao/400)} pacotes de pão de alho</p>`
    resultado.innerHTML += `<p>- É necessário ${Math.ceil(qbebida/2000)} garrafas de 2 litros de refrigerante</p>`

}

function cervaH(duracao) {
    if (duracao >= 5) {
        return 3150
    } else {
        return 2100
    }

}

function cervaM(duracao) {
    if (duracao >= 5) {
        return 2450
    } else {
        return 1750
    }
}

function carneH(duracao) {
    if (duracao >= 5) {
        return 500
    } else {
        return 300
    }

}

function carneM(duracao) {
    if (duracao >= 5) {
        return 400
    } else {
        return 250
    }

}

function frangoH(duracao) {
    if (duracao >= 5) {
        return 300
    } else {
        return 150
    }

}

function frangoM(duracao) {
    if (duracao >= 5) {
        return 200
    } else {
        return 100
    }

}

function linguicaT(duracao) {
    if (duracao >= 5) {
        return 200
    } else {
        return 100
    }

}

function paoT(duracao) {
    if (duracao >= 5) {
        return 300
    } else {
        return 150
    }

}

function bebidaA(duracao) {
    if (duracao >= 5) {
        return 900
    } else {
        return 500
    }

}

function bebidaC(duracao) {
    if (duracao >= 5) {
        return 1200
    } else {
        return 800
    }

}