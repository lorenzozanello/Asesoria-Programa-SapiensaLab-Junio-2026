import { diagnostico } from './diagnostico';
import { benchmarking } from './benchmarking';
import { redefinicion } from './redefinicion';
import { modelo } from './modelo';
import { segmentacion } from './segmentacion';
import { rutas } from './rutas';
import { curriculo } from './curriculo';

export const documents = [
  {
    id: 'diagnostico',
    title: '1. Diagnóstico del programa actual',
    content: diagnostico
  },
  {
    id: 'benchmarking',
    title: '2. Benchmarking nacional e internacional',
    content: benchmarking
  },
  {
    id: 'redefinicion',
    title: '3. Redefinición de la propuesta de valor',
    content: redefinicion
  },
  {
    id: 'modelo',
    title: '4. Diseño del modelo de programa',
    content: modelo
  },
  {
    id: 'segmentacion',
    title: '5. Segmentación de públicos',
    content: segmentacion
  },
  {
    id: 'rutas',
    title: '6. Diseño de rutas por madurez',
    content: rutas
  },
  {
    id: 'curriculo',
    title: '7. Rediseño curricular por sprints',
    content: curriculo
  }
];

export function getDocument(id: string) {
  return documents.find(d => d.id === id);
}
