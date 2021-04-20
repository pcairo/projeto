({
	inserirLivro: function (component, event, helper) {
        var action = component.get("c.insertLivro");

        var nome = component.get("v.newLivro.Name");
        var autor = component.get("v.newLivro.Autores__c");
        var editora = component.get("v.newLivro.Editora__c");
        var pais = component.get("v.newLivro.Pais__c");
        var ano = component.get("v.newLivro.Ano__c");

        action.setParams({
            nome: nome,
            autor: autor,
            editora: editora,
            pais: pais,
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