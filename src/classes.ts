export class Passageiro {
    nome: string;
    cpf: string;
    email: string;

    constructor(nome: string, cpf: string, email: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }
}

export class Reserva {
    passageiro: Passageiro;
    origem: string;
    destino: string;
    dataViagem: Date;
    horaViagem: string;

    constructor(passageiro: Passageiro, origem: string, destino: string, dataViagem: Date, horaViagem: string) {
        this.passageiro = passageiro;
        this.origem = origem;
        this.destino = destino;
        this.dataViagem = dataViagem;
        this.horaViagem = horaViagem;
    }
}
