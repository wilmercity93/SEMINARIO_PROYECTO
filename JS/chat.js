$(function(){

var objFirebase = new Firebase("https://chatwilmer.firebaseio.com/");

	$('#enviar').click(clickEnvio);
	$('#login').click(clickAutenticarTwitter);
	$('#login2').click(clickAutenticarFB);



	function clickAutenticarTwitter()
	{

		objFirebase.authWithOAuthPopup("twitter",function(error, authData){

			if (error) {
				console.log("Login Failed", error);
			}else{
				console.log("Exito!!!", authData);
			}
		});
	}
function clickAutenticarFB()
{
	objFirebase.authWithOAuthPopup("Facebook", function(error, authData){

	if(error){
		console.log("Login Failed", error);

	}else{
		console.log("Exitos!!!", authData);
	}

	});

}


	function clickEnvio(){

		var mensaje = $('#usermsg').val();		
		
		$('#usermsg').val('');

		objFierebase.push({
				autor: "wilmer",
				mensaje: mensaje

				}
		);

	}

	objFirebase.on("child_added", function(data){
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
