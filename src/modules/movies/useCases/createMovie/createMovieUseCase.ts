import { ICreateMovieDTO } from "@modules/movies/dtos/CreateMovieDTO";
import { Movie } from "@modules/movies/infra/typeorm/entities/movie";
import { IMoviesRepository } from "@modules/movies/repositories/IMoviesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateMovieUseCase {
    constructor(
        @inject("MoviesRepository")
        private moviesRepository: IMoviesRepository
    ) {}
    async execute({
        imdbID,
        title,
        poster,
        year,
        type,
    }: ICreateMovieDTO): Promise<Movie> {
        const movie = await this.moviesRepository.createMovie({
            title,
            imdbID,
            poster,
            type,
            year,
        });

        return movie;
    }
}
