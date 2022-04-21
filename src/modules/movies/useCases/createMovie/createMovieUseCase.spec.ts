import { MoviesRepository } from "@modules/movies/infra/typeorm/repositories/MoviesRepository";

import { CreateMovieUseCase } from "./createMovieUseCase";

let moviesRepository: MoviesRepository;
let createMovieUseCase: CreateMovieUseCase;

describe("create Movie", () => {
    beforeEach(() => {
        moviesRepository = new MoviesRepository();
        createMovieUseCase = new CreateMovieUseCase(moviesRepository);
    });
    it("Should be able to create a new movie", async () => {
        const movie = await createMovieUseCase.execute({
            title: "Test Title",
            year: "2024",
            imdbID: "Id_imdb",
            type: "movie",
            poster: "link_image_poster",
        });
        expect(movie).toHaveProperty("id");
    });
});
