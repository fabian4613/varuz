function hamburguesa() {
    var menu = document.getElementById('btn_principal_mobile')

    if (menu.style.display == 'grid') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'grid'
    }
}

function imgTransition() {
    var cajaImgTransition = document.getElementById('img_transition')
    cajaImgTransition.src = "/img/img03.jpg"
}

function imgTransition2() {
    var cajaImgTransition2 = document.getElementById('img_transition')

    cajaImgTransition2.src = "/img/img01.jpg"
}

function colorText() {
    var cajaColorText = document.getElementById('txt_derecha')
    cajaColorText.style.backgroundColor = '#e6dcb1'
}

function colorTextNone() {
    var cajaColorTextNone = document.getElementById('txt_derecha')
    cajaColorTextNone.style.backgroundColor = '#00000'
}