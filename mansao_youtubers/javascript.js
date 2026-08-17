function goTo(cena) {
    salvaFalas();
    document.getElementById("tela_jogo").innerHTML = document.getElementById(cena).innerHTML;
    SNome();
}



function trocarfundo(fundo) {
    const tela = document.getElementById("tela_jogo");
    tela.className = "";
    tela.classList.add(fundo);
}

function goatualmente(atualmente) {
    document.getElementById("atualmente").innerHTML = document.getElementById(atualmente).innerHTML;
}

setTimeout(goatualmente("atualmente2"), 1000);



function atualizarBarras(id, personagem) {
    document.getElementById('barraAfeto' + id).style.width = personagem.afeto + '%';
    document.getElementById('barraConfianca' + id).style.width = personagem.confianca + '%';
    document.getElementById('barraInteresse' + id).style.width = personagem.interesse + '%';
    document.getElementById('barraQuimica' + id).style.width = personagem.quimica + '%';
}



let Febatista = {
    afeto: 60,
    confianca: 60,
    interesse: 60,
    quimica: 70
};

let Cellbit = { 
    afeto: 20,
    confianca: 10,
    interesse: 0,
    quimica: 60
};

let Authentic = {
    afeto: 30,
    confianca: 10,
    interesse: 25,
    quimica: 30
};

let Felps = {
    afeto: 50,
    confianca: 20,
    interesse: 20,
    quimica: 70
};

let jazzghost = {
    afeto: 25,
    confianca: 20,
    interesse: 20,
    quimica: 70
};

let Malena = {
    afeto: 50,
    confianca: 20,
    interesse: 20,
    quimica: 70
};

let Mike = {
    afeto: 70,
    confianca: 20,
    interesse: 20,
    quimica: 70
};

let Pac = {
    afeto: 80,
    confianca: 20,
    interesse: 20,
    quimica: 70
};

let Rezendeevil = {
    afeto: 60,
    confianca: 25,
    interesse: 25,
    quimica: 70
};

let Spok = {
    afeto: 80,
    confianca: 25,
    interesse: 25,
    quimica: 70
};





let personagens = [Febatista, Cellbit, Authentic, Felps, jazzghost, Malena, Mike, Pac, Rezendeevil, Spok];



function aleatorio(max) {
    return Math.floor(Math.random() * max);
}


function fofoca() {
    let i = aleatorio(10)
    personagens[i].interesse += 5
    atualizarTodosStatus()
}

setInterval(fofoca, 10 * 1000);

function atualizarStatus(id, personagem) {
    document.getElementById("afeto" + id).textContent = personagem.afeto + "%";
    document.getElementById("confianca" + id).textContent = personagem.confianca + "%";
    document.getElementById("interesse" + id).textContent = personagem.interesse + "%";
    document.getElementById("quimica" + id).textContent = personagem.quimica + "%";
    if (personagem.afeto > 100) {
        personagem.afeto = 100
    }
    if (personagem.confianca > 100) {
        personagem.confianca = 100
    }
    if (personagem.interesse > 100) {
        personagem.interesse = 100
    }
    if (personagem.quimica > 100) {
        personagem.quimica = 100
    }


}

function atualizarTodosStatus() {
    for (let i = 0; i < personagens.length; i++) {
        atualizarStatus(i + 1, personagens[i]);
        atualizarBarras(i + 1, personagens[i]);
        atualizaHud();
    }
}

setInterval((atualizarTodosStatus), 1000)

moedas = 200;

function ganharMoedas() {
    moedas++;
    if (moedas > 1000) {
        clearInterval(ponteiro);
    }
    atualizaHud();
}

function atualizaHud() {
    document.getElementById("moedas").innerHTML = moedas;
}

setInterval(ganharMoedas, 1 * 1000);



function SNome() {

    const nomeInput = document.getElementById("nome");
    if (nomeInput) {
        nomeProtagonista = nomeInput.value.trim() || "Protagonista";
    }


    const tela = document.getElementById("tela_jogo");
    if (tela) {
        tela.innerHTML = tela.innerHTML.replace(/\[NomeProtagonista\]/g, nomeProtagonista);
    }
}


function aumentar(personagem, val) {
    personagem.afeto += val;
    personagem.confianca += val;
    personagem.interesse += val;
    if (personagem.afeto > 100) {
        personagem.afeto = 100
    }
    if (personagem.confianca > 100) {
        personagem.confianca = 100
    }
    if (personagem.interesse > 100) {
        personagem.interesse = 100
    }
    if (personagem.quimica > 100) {
        personagem.quimica = 100
    }
}

function aumentarT(valor) {
    for (let i = 0; i < personagens.length; i++) {
        aumentar(personagens[i], valor)
    }

}

let capaceteC = false
function comprarCapacete() {
    if (capaceteC) {
        alert("Você ja comprou este item!");
        return;
    }
    if (moedas > 20) {
        moedas -= 20;
        aumentarT(2);
        atualizarTodosStatus();
        capaceteC = true;
    }
    else {
        alert("Dinheiro insuficiente!")
    }
}

let BotasC = false
function comprarBotas() {
    if (BotasC) {
        alert("Você ja comprou este item!");
        return;
    }
    if (moedas > 25) {
        moedas -= 25;
        aumentarT(2);
        atualizarTodosStatus();
        BotasC = true;
    }
    else {
        alert("Dinheiro insuficiente!")
    }
}


let CalcasC = false
function comprarCalcas() {
    if (CalcasC) {
        alert("Você ja comprou este item!");
        return;
    }
    if (moedas > 30) {
        moedas -= 30;
        aumentarT(3);
        atualizarTodosStatus();
        CalcasC = true;
    }
    else {
        alert("Dinheiro insuficiente!")
    }
}

let PeitoralC = false
function comprarPeitoral() {
    if (PeitoralC) {
        alert("Você ja comprou este item!");
        return;
    }
    if (moedas > 50) {
        moedas -= 50;
        aumentarT(5);
        atualizarTodosStatus();
        PeitoralC = true;
    }
    else {
        alert("Dinheiro insuficiente!")
    }
}

let PorcoC = false
function comprarPorco() {
    if (PorcoC) {
        alert("Você ja comprou este item!");
        return;
    }
    if (moedas > 70) {
        moedas -= 70;
        aumentarT(10);
        atualizarTodosStatus();
        PorcoC = true;
    }
    else {
        alert("Dinheiro insuficiente!")
    }
}

let ZumbiC = false
function comprarZumbi() {
    if (ZumbiC) {
        alert("Você ja comprou este item!");
        return;
    }
    if (moedas > 100) {
        moedas -= 100;
        aumentarT(20);
        atualizarTodosStatus();
        ZumbiC = true;
    }
    else {
        alert("Dinheiro insuficiente!")
    }
}

let nolog = true
function abrirLog() {
    if (nolog) {
        const salva = document.getElementById("salva");
        const tela = document.getElementById("tela_jogo");
        salva.innerHTML = tela.innerHTML
        salva.className = tela.className;
        trocarfundo('fundo_log');
        goToLog();
        nolog = false;
    }
}


function goToLog() {
    if (nolog) {
        document.getElementById("tela_jogo").innerHTML = document.getElementById('Slog').innerHTML;
        SNome();
    }
}


function goToS() {
    const salva = document.getElementById("salva");
    const tela = document.getElementById("tela_jogo");
    tela.innerHTML = salva.innerHTML;
    tela.className = salva.className;
    SNome();
    nolog = true;
}

function salvaFalas() {
    const falas = document.querySelector("#tela_jogo .falas");
    const log = document.getElementById("tela_log");

    if (falas) {
        log.innerHTML += "<p><br>" + falas.innerText + "</p>";
    }
}






































//coisa do Eduardo 

document.addEventListener('DOMContentLoaded', function() {
    const capaceteBtn = document.getElementById('capacete');
    const infoCapacete = document.getElementById('infoCapacete');
    
    if (capaceteBtn && infoCapacete) {
        capaceteBtn.addEventListener('mouseenter', function() {
            infoCapacete.style.display = 'block';
        });
        
        capaceteBtn.addEventListener('mouseleave', function() {
            infoCapacete.style.display = 'none';
        });
        
        capaceteBtn.addEventListener('mousemove', function(e) {
            // Posiciona a caixa próxima ao cursor
            infoCapacete.style.left = (e.pageX + 15) + 'px';
            infoCapacete.style.top = (e.pageY + 15) + 'px';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const botasBtn = document.getElementById('botas');
    const infoBotas = document.getElementById('infoBotas');
    
    if (botasBtn && infoBotas) {
        botasBtn.addEventListener('mouseenter', function() {
            infoBotas.style.display = 'block';
        });
        
        botasBtn.addEventListener('mouseleave', function() {
            infoBotas.style.display = 'none';
        });
        
        botasBtn.addEventListener('mousemove', function(e) {
            // Posiciona a caixa próxima ao cursor
            infoBotas.style.left = (e.pageX + 15) + 'px';
            infoBotas.style.top = (e.pageY + 15) + 'px';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const calcasBtn = document.getElementById('calças');
    const infoCalcas = document.getElementById('infoCalcas');
    
    if (calcasBtn && infoCalcas) {
        calcasBtn.addEventListener('mouseenter', function() {
            infoCalcas.style.display = 'block';
        });
        
        calcasBtn.addEventListener('mouseleave', function() {
            infoCalcas.style.display = 'none';
        });
        
        calcasBtn.addEventListener('mousemove', function(e) {
            // Posiciona a caixa próxima ao cursor
            infoCalcas.style.left = (e.pageX + 15) + 'px';
            infoCalcas.style.top = (e.pageY + 15) + 'px';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const peitoralBtn = document.getElementById('peitoral');
    const infoPeitoral = document.getElementById('infoPeitoral');
    
    if (peitoralBtn && infoPeitoral) {
        peitoralBtn.addEventListener('mouseenter', function() {
            infoPeitoral.style.display = 'block';
        });
        
        peitoralBtn.addEventListener('mouseleave', function() {
            infoPeitoral.style.display = 'none';
        });
        
        peitoralBtn.addEventListener('mousemove', function(e) {
            // Posiciona a caixa próxima ao cursor
            infoPeitoral.style.left = (e.pageX + 15) + 'px';
            infoPeitoral.style.top = (e.pageY + 15) + 'px';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const porcoBtn = document.getElementById('porco');
    const infoPorco = document.getElementById('infoPorco');
    
    if (porcoBtn && infoPorco) {
        porcoBtn.addEventListener('mouseenter', function() {
            infoPorco.style.display = 'block';
        });
        
        porcoBtn.addEventListener('mouseleave', function() {
            infoPorco.style.display = 'none';
        });
        
        porcoBtn.addEventListener('mousemove', function(e) {
            // Posiciona a caixa próxima ao cursor
            infoPorco.style.left = (e.pageX + 15) + 'px';
            infoPorco.style.top = (e.pageY + 15) + 'px';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const zumbiBtn = document.getElementById('zumbi');
    const infoJockey = document.getElementById('infoJockey');
    
    if (zumbiBtn && infoJockey) {
        zumbiBtn.addEventListener('mouseenter', function() {
            infoJockey.style.display = 'block';
        });
        
        zumbiBtn.addEventListener('mouseleave', function() {
            infoJockey.style.display = 'none';
        });
        
        zumbiBtn.addEventListener('mousemove', function(e) {
            // Posiciona a caixa próxima ao cursor
            infoJockey.style.left = (e.pageX + 15) + 'px';
            infoJockey.style.top = (e.pageY + 15) + 'px';
        });
    }
});




function atualizarEscolhaFinal() {
    for (let i = 0; i < personagens.length; i++) {
        let botao = document.getElementById("b" + (i + 1));

        if (personagens[i].afeto === 100) {
            botao.style.display = "block";  // aparece
        } else {
            botao.style.display = "none";   // some
        }
    }
};

// Atualiza a cada 1 segundo junto com o resto do jogo
setInterval(atualizarEscolhaFinal, 1000);