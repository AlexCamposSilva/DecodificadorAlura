const textArea = document.querySelector(".text-area");
const messenger = document.querySelector(".messenger");


function btnEncriotar(){
    const textoEncriptado = encriptar (textArea.value);
    messenger.value = textoEncriptado;
    textArea.value = "";
}


function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo [i] [0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo [i][1]);
        }
    }

    return stringEncriptada;
}


function btnDesencriptar(){
    const textoDesencriptado = Desencriptar (textArea.value);
    messenger.value = textoDesencriptado;
        textArea.value = "";
}


function Desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo [i] [1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo [i][0]);
        }
    }


    return stringDesencriptada;
}

function copiarTexto(){
    const textCopiado = messenger.value;
    messenger.value= "";

    if(navigator.clipboard.writeText(textCopiado)){
        document.querySelector('.btn-copiar').textContent = "COPIADO!";
        document.querySelector('.btn-copiar').style.background = "#0A3871";
        document.querySelector('.btn-copiar').style.color = "white"
        
    
    }         


    setInterval(function(){
        document.querySelector('.btn-copiar').textContent = "Copiar";
        document.querySelector('.btn-copiar').style.background = "#D8DFEB";
        document.querySelector('.btn-copiar').style.color = "#0A3871";
        



    }, 2000

    )
}

textMensagem()



