
class Semaphore{	
	constructor(id,time,pred=[]){
		this.id=id;
		if(time<1000){
			time*=1000;
		}		
		this.time=time;
		this.pred=pred;
	}

	saludo(){
		return "Se esta ejecutando el semaforo #: "+this.id;//" y su espera es de: "+this.espera());// y estas viendo disney channel		
	}
	despido(){
		return "El semaforo #: "+this.id+" a finalizado su ejecucion";
	}
	tiempo(){
		return this.time;
	}
	predecesores(){
		return this.pred;
	}

	espera(){				
		if(this.pred.length==0){			
			return 0;
		}
		var mayor=0;
		var t=0;
		for(var i=0; i<this.pred.length;i++){
			var p =this.pred[i];
			t =arrsema.find(function(element) {
  					return element.id==p;
				});
			if(t==null){
				alert("el proceso #"+this.id+" tiene un predecesor: "+p+" El cual no existe");
				bloquear();
				break;
			}
			t=t.espera()+t.time;
			if(t>mayor){
				mayor=t;
			}
		}
		return mayor;
	}
}





