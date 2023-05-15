window.addEventListener('load', function(){

	console.log("js cargado");
	
		var datos = document.querySelector("#datos");
		var suma = document.querySelector("#suma span");
		var total = document.querySelector("#total span");		
		var sumaValores;		

		datos.addEventListener('submit', function(){
			console.log('suma ejecutada');

			var valor1 = parseInt(document.querySelector("#valor1").value);
				if (isNaN(valor1)) valor1 = 0;
			var valor2 = parseInt(document.querySelector("#valor2").value);
				if (isNaN(valor2)) valor2 = 0;
			var valor3 = parseInt(document.querySelector("#valor3").value);
				if (isNaN(valor3)) valor3 = 0;
		
			sumaValores = valor1 + valor2 + valor3;
			suma.innerHTML = sumaValores;

			return false;
		});


		var calculo = document.querySelector("#calculo");

		calculo.addEventListener('submit',function(){
			console.log('Cálculo ejecutado');

			var tiempo = document.querySelector("#tiempo").value;	
			var tasa = document.querySelector("#tasa").value;
			var valorAcumulado = sumaValores;
			var meses = tiempo*12;	

			for(let i=0; i<meses; i++){
				valorAcumulado = valorAcumulado+(valorAcumulado*tasa/100);
			}

			if (isNaN(valorAcumulado)){
				alert("Antes de calcular el ahorro total, debe realizar la suma de los gastos mensuales a reducir.")
			}else if (valorAcumulado <= 0){
				alert("La suma de los gastos mensuales a reducir debe ser mayor a $0.00.")
			}else{
				total.innerHTML = (valorAcumulado.toFixed(2));
			}
		});
});
