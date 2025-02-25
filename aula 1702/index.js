
class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha; 
    }

    #senha; 

    autenticar(senha) {
        return senha === this.senha;
    }

    alterarSenha(novaSenha) {
        this.senha = novaSenha;
        console.log('Senha alterada com sucesso');
    }
}

// Classe Admin que herda de Usuario
class Admin extends Usuario {
    constructor(nome, email, senha, nivelAcesso) {
        super(nome, email, senha); 
        this.nivelAcesso = nivelAcesso;
    }

    banirUsuario(usuario) {
        console.log(`${usuario.nome} foi banido pelo admin ${this.nome}`);
    }

    // Polimorfismo: Sobrescrevendo o método autenticar
    autenticar(senha) {
        return senha === this.senha && this.nivelAcesso === 'alto';
    }
}

// Exemplo de uso
const usuario1 = new Usuario('Julia', 'Miranda@gmail.com', '3536');
const usuario2 = new Admin('Jéssica', 'Lohanny@gmail.com', '1111', 'alto');

console.log(usuario1.autenticar('3536')); 
console.log(usuario2.autenticar('1111')); 
usuario2.banirUsuario(usuario1); // Julia foi banida por Jessica