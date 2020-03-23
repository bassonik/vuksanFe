import { Klijent } from './klijent';
import { TipRacuna } from './tip_racuna';

export class Racun {
    id: number;
    naziv: string;
    opis: string;
    oznaka: string;
    tipRacuna: TipRacuna;
    klijent: Klijent;
}