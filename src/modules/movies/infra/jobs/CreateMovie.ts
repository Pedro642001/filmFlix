import { CreateMovieUseCase } from "@modules/movies/useCases/createMovie/createMovieUseCase";
import { container } from "tsyringe";

import { Movie } from "../typeorm/entities/movie";

export default {
    key: "createMovie",
    async handle(movies: Omit<Movie[], "id">) {
        const createMovieUseCase = container.resolve(CreateMovieUseCase);
        movies.forEach(async (data) => {
            await createMovieUseCase.execute({
                imdbID: data.imdbID,
                poster: data.poster,
                title: data.title,
                type: data.type,
                year: data.year,
            });
        });
    },
};
