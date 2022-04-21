import { Request, Response } from "express";
import { container } from "tsyringe";

import { api } from "@shared/infra/http/api";

import Queue from "../../infra/jobs/CreateQueue";
import { ListMoviesByTitleUseCase } from "./ListMoviesByTitleUseCase";

export class ListMoviesByTitleController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title } = request.body;
        const listMoviesByTitleUseCase = container.resolve(
            ListMoviesByTitleUseCase
        );
        const searchQueryInDatabase = await listMoviesByTitleUseCase.execute(
            title
        );

        if (searchQueryInDatabase.length < 0) {
            return response.status(200).json(searchQueryInDatabase);
        }

        const { data } = await api.get("", { params: { s: title } });
        const movies = data.Search;

        await Queue.add({ movies });

        return response.status(200).json(movies);
    }
}
