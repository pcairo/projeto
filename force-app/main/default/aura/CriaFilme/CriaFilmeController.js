({
    inserirFilme: function (component, event, helper) {
        var action = component.get("c.insertFilme");

        var nome = component.get("v.newFilme.Name");
        var diretor = component.get("v.newFilme.Diretor__c");
        var elencoPrincipal = component.get("v.newFilme.ElencoPrincipal__c");
        var pais = component.get("v.newFilme.Pais__c");
        var ano = component.get("v.newFilme.Ano__c");

        action.setParams({
            nome: nome,
            diretor: diretor,
            elencoPrincipal: elencoPrincipal,
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