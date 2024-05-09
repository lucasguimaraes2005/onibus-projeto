import fs from 'fs';
import { Reserva } from './classes';

export class DB {
    filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    async addReservation(reserva: Reserva) {
        let data = [];
        try {
            data = JSON.parse(fs.readFileSync(this.filename, 'utf8'));
        } catch (error) {
            console.error('Erro ao ler o arquivo:', error);
        }
        data.push(reserva);
        try {
            fs.writeFileSync(this.filename, JSON.stringify(data));
        } catch (error) {
            console.error('Erro ao escrever no arquivo:', error);
        }
    }

    async getAllReservations() {
        let data = [];
        try {
            data = JSON.parse(fs.readFileSync(this.filename, 'utf8'));
        } catch (error) {
            console.error('Erro ao ler o arquivo:', error);
        }
        return data;
    }
}