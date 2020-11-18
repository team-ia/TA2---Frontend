import { Disease } from './disease.model';

export interface TypeOfDisease {
  nombre?: string;
  diseases?: Disease[];
  img?: string;
}
