    class User{
        constructor(id, nome, email, senha, endereco, telefone, cpf){
            this.id = id; // id do user
            this.nome = nome; // nome do user
            this.email = email; //email do usuario
            this.senha = senha;
            this.endereco = endereco;
            this.telefone = telefone;
            this.cpf = cpf;


        }
    }


    module.exports = User; // exportar o modulo