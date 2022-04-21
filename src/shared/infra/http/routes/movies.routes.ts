import { ListMoviesByTitleController } from "@modules/movies/useCases/listMoviesByTitle/ListMoviesByTitleController";
import { Router } from "express";

const moviesRoutes = Router();

const listMoviesByTitleController = new ListMoviesByTitleController();

moviesRoutes.get("/query", listMoviesByTitleController.handle);
moviesRoutes.get("/history", listMoviesByTitleController.handle);

export { moviesRoutes };
