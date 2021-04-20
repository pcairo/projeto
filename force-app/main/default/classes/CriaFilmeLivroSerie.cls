public class CriaFilmeLivroSerie {
    
    @AuraEnabled
    public static void insertFilme(String nome, String diretor, String elencoPrincipal, String pais, Integer ano) {
        Filme__c filme = new Filme__c();
            filme.Name = nome;
            filme.Diretor__c = diretor;
            filme.ElencoPrincipal__c = elencoPrincipal;
            filme.Pais__c = pais;
            filme.Ano__c = ano;
        
        insert filme;
        
        system.debug(filme);
    }

    @AuraEnabled
    public static void insertSerie(String nome, String diretor, String elencoPrincipal, String pais, Integer temporadas, Integer ano) {
        Serie__c serie = new Serie__c();
            serie.Name = nome;
            serie.Diretor__c = diretor;
            serie.ElencoPrincipal__c = elencoPrincipal;
            serie.Pais__c = pais;
            serie.Temporadas__c = temporadas;
            serie.Ano__c = ano;
        
        insert serie;
    }

    @AuraEnabled
    public static void insertLivro(String nome, String autor, String editora, String pais, Integer ano) {
        Livro__c livro = new Livro__c();
            livro.Name = nome;
            livro.Autores__c = autor;
            livro.Editora__c = editora;
            livro.Pais__c = pais;
            livro.Ano__c = ano;
        
        insert livro;
    }
}