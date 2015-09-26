$(function(){

	$('#submitmsg').click(clickEnvio);

var objFierebase = new Firebase("https://chatucc.firebaseio.com/");

	function clickEnvio(){

		var mensaje = $('#usermsg').val();		
		
		$('#usermsg').val('');

		objFierebase.push({
				autor: "wilmer",
				mensaje: mensaje

				}
		);

	}

	objFierebase.on("child_added", function(data){
		var registro = data.val();
		var plantilla = getPlantilla(registro.autor, registro.mensaje);

		$('#chatbox').append(plantilla);		

	});

	
	function getPlantilla(autor,mensaje)
	{
		var plantilla = '<div>'+autor+'-->'+mensaje+'</div>';
		return plantilla;
	}



});
