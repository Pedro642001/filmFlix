import { MoviesRepository } from "@modules/movies/infra/typeorm/repositories/MoviesRepository";
import { IMoviesRepository } from "@modules/movies/repositories/IMoviesRepository";
import { container } from "tsyringe";

container.registerSingleton<IMoviesRepository>(
    "MoviesRepository",
    MoviesRepository
);
