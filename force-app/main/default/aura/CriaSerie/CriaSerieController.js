({
	inserirSerie: function (component, event, helper) {
        var action = component.get("c.insertSerie");

        var nome = component.get("v.newSerie.Name");
        var diretor = component.get("v.newSerie.Diretor__c");
        var elencoPrincipal = component.get("v.newSerie.ElencoPrincipal__c");
        var pais = component.get("v.newSerie.Pais__c");
		var temporadas = component.get("v.newSerie.Temporadas__c");
        var ano = component.get("v.newSerie.Ano__c");

        action.setParams({
            nome: nome,
            diretor: diretor,
            elencoPrincipal: elencoPrincipal,
            pais: pais,
			temporadas: temporadas,
            ano: ano
        });

        action.setCallback(this, function (response) {
            var state = response.getState();
            var response = response.getReturnValue();
            if (component.isValid() && state === "SUCCESS") {
                console.log("SUCESSO GAROTA");
                console.log("state: " + state);
            } else {
                console.log("Failed with state: " + state);
                console.log("DEU RUIM BIXO");
            }
        })
        $A.enqueueAction(action);
    }

})