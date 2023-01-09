import { Title } from '@angular/platform-browser';

/* eslint-disable @typescript-eslint/naming-convention */
export interface IExercicioApi {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_linguage?: string;
  title?: string;
  backdrop_path?: string;
  video?: boolean;
  vote_average?: number;
}

export interface IListaExercicios {

page: number;
results: IExercicioApi[];
total_results: number;
total_pages: number;

}
