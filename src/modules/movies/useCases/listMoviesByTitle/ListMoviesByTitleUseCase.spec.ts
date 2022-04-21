import { MoviesRepositoryInMemory } from "@modules/movies/repositories/inMemory/MoviesRepositoryInMemory";

import { ListMoviesByTitleUseCase } from "./ListMoviesByTitleUseCase";

let moviesRepositoryInMemory: MoviesRepositoryInMemory;
let listMoviesByTitleUseCase: ListMoviesByTitleUseCase;

describe("List Movies By Title", () => {
    beforeEach(() => {
        moviesRepositoryInMemory = new MoviesRepositoryInMemory();
        listMoviesByTitleUseCase = new ListMoviesByTitleUseCase(
            moviesRepositoryInMemory
        );
    });

    it("Should be able to list movies", async () => {
        const movie1 = await moviesRepositoryInMemory.createMovie({
            title: "Test Title",
            year: "2024",
            imdbID: "Id_imdb",
            type: "movie",
            poster: "link_image_poster",
        });

        const movie2 = await moviesRepositoryInMemory.createMovie({
            title: "Test Title 1",
            year: "2024",
            imdbID: "Id_imdb",
            type: "movie",
            poster: "link_image_poster",
        });

        const title = "Test";
        const listMovies = await listMoviesByTitleUseCase.execute(title);

        expect(listMovies).toEqual([movie1, movie2]);
    });
});
