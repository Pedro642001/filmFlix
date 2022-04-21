import { ICreateMovieDTO } from "@modules/movies/dtos/CreateMovieDTO";
import { IMoviesRepository } from "@modules/movies/repositories/IMoviesRepository";
import { getRepository, Repository } from "typeorm";

import { Movie } from "../entities/movie";

export class MoviesRepository implements IMoviesRepository {
    private repository: Repository<Movie>;

    constructor() {
        this.repository = getRepository(Movie);
    }

    async createMovie({
        title,
        year,
        imdbID,
        type,
        poster,
    }: ICreateMovieDTO): Promise<Movie> {
        const newMovie = this.repository.create({
            title,
            year,
            imdbID,
            type,
            poster,
        });

        await this.repository.save(newMovie);

        return newMovie;
    }

    async findByTitle(title: string): Promise<Movie[]> {
        const movieQuery = this.repository
            .createQueryBuilder("c")
            .where("title = :title", { title });

        const movies = await movieQuery.getMany();

        return movies;
    }
}
