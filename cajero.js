class Billete
{


	constructor(v,c)
	{
		this.valor = v;
		this.cantidad = c;
	}
}

function entregarDinero() {
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);

	for(var b of cajas){
		if(dinero > 0)
		{
			div = Math.floor(dinero/b.valor);
			if(div > b.cantidad)
			{
				papeles = b.cantidad;
			}
			else
			{
				papeles = div;
			}

			entregado.push(new Billete(b.valor, papeles));
			dinero = dinero - (b.valor * papeles);
		}
	}
	if(dinero > 0)
	{
		resultado.innerHTML = "Soy un cajero malo y no te puedo dar esa cantidad de dinero";
	}
	else
	{
		for (var e of entregado)
		{
			if(e.cantidad>0)
			{
			resultado.innerHTML +=  e.cantidad + " billetes de $" + e.valor + "<br>";
			}
		}	
	}
	
}

var cajas = [];
var entregado = [];
cajas.push(new Billete(100,10));
cajas.push(new Billete(50,10));
cajas.push(new Billete(20,30));
cajas.push(new Billete(10,10));
cajas.push(new Billete(5,10));


var dinero = 0;

var div = 0;
var papeles = 0;

var b = document.getElementById("Extraer");
var resultado = document.getElementById("resultado");
b.addEventListener("click", entregarDinero);