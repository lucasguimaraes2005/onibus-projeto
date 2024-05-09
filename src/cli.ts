// cli.ts
import readline from 'readline';
import { DB } from './db';
import { Passageiro, Reserva } from './classes';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const db = new DB('reservations.json');

rl.question('Você gostaria de ver todas as reservas? (s/n) ', async (resposta) => {
    if (resposta.toLowerCase() === 's') {
        const reservas = await db.getAllReservations();
        console.log(reservas);
    } else {
        rl.question('Qual é o seu nome? ', (nome) => {
            rl.question('Qual é o seu CPF? ', (cpf) => {
                rl.question('Qual é o seu email? ', (email) => {
                    rl.question('Qual é a sua cidade de origem? ', (origem) => {
                        rl.question('Qual é o seu destino? ', (destino) => {
                            rl.question('Qual é a data da viagem? ', (dataViagem) => {
                                rl.question('Qual é a hora da viagem? ', async (horaViagem) => {
                                    const passageiro = new Passageiro(nome, cpf, email);
                                    const reserva = new Reserva(passageiro, origem, destino, new Date(dataViagem), horaViagem);
                                    await db.addReservation(reserva);
                                    console.log(`Reserva feita com sucesso para ${nome} para ${destino}`);
                                    rl.close();
                                });
                            });
                        });
                    });
                });
            });
        });
    }
});



