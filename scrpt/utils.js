
//toggle de hiden e icono pago con tarjeta para stripe
var $check1 = 'right';
document.getElementById('tarjeta').onclick = function(){
            //mostrando texto
    var $togHidden = document.getElementById('bl1');
    $togHidden.classList.toggle('hidden');
    
            //cambiando icono
    if ($check1 === 'right' ) {
        document.getElementById('arrow').firstElementChild.className = "fas fa-chevron-down txt-section4 pr-3";
       document.getElementById('ppbtn').setAttribute("disabled", "");
       document.getElementById('ppbtn').className = "h-8 ml-8 flex-shrink-0 ppdisabled";
       document.getElementById('tarjeta').className = "bg-gray-100 rounded flex-shrink-0 h-8 pl-2 pr-5 ml-1 font-semibold text-sm border border-gray-500 inline-block back-gra-btn";
        $check1 = 'down';

    } else {
        document.getElementById('arrow').firstElementChild.className = "fas fa-chevron-right text-gray-500 pr-3";
        document.getElementById('ppbtn').removeAttribute("disabled");
        document.getElementById('ppbtn').className = "h-8 ml-8 flex-shrink-0";
        document.getElementById('tarjeta').className = "bg-gray-100 rounded flex-shrink-0 h-8 pl-2 pr-5 ml-1 font-semibold text-sm border border-gray-500 inline-block";
        $check1 = 'right';

    }
}; // function end

