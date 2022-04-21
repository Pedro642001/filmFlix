import { ICreateMovieDTO } from "../dtos/CreateMovieDTO";
import { Movie } from "../infra/typeorm/entities/movie";

export interface IMoviesRepository {
    findByTitle(title: string): Promise<Movie[]>;
    createMovie(data: ICreateMovieDTO): Promise<Movie>;
}
