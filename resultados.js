function operacion(){
    var opuesto=parseFloat(document.calculostriangulo.opuesto.value);
    var adyacente=parseFloat(document.calculostriangulo.adyacente.value);
    var hipotenusa= Math.sqrt(Math.pow(opuesto,2)+Math.pow(adyacente,2));
    var alpha = Math.asin(opuesto/hipotenusa)*(180/Math.PI);
    var beta = 180 - 90 - alpha;
    resul1=document.getElementById("resultado1");
    resul2=document.getElementById("resultado2");
    resul3=document.getElementById("resultado3");
    resul1.innerHTML=hipotenusa;
    resul2.innerHTML=alpha;
    resul3.innerHTML=beta;
}