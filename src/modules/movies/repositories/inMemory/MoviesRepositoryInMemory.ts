import { ICreateMovieDTO } from "@modules/movies/dtos/CreateMovieDTO";
import { Movie } from "@modules/movies/infra/typeorm/entities/movie";

import { IMoviesRepository } from "../IMoviesRepository";

export class MoviesRepositoryInMemory implements IMoviesRepository {
    movies: Movie[] = [];

    async createMovie({
        title,
        type,
        imdbID,
        poster,
        year,
    }: ICreateMovieDTO): Promise<Movie> {
        const movie = new Movie();

        Object.assign(movie, { title, type, imdbID, poster, year });

        this.movies.push(movie);

        return movie;
    }
    async findByTitle(title: string): Promise<Movie[]> {
        const movies = this.movies.filter((movie) =>
            movie.title.includes(title)
        );
        return movies;
    }
}
