import { Movie } from "@modules/movies/infra/typeorm/entities/movie";
import { IMoviesRepository } from "@modules/movies/repositories/IMoviesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListMoviesByTitleUseCase {
    constructor(
        @inject("MoviesRepository")
        private moviesRepository: IMoviesRepository
    ) {}
    async execute(title: string): Promise<Movie[]> {
        const movies = await this.moviesRepository.findByTitle(title);

        return movies;
    }
}
