import CreateMovie from "@modules/movies/infra/jobs/CreateMovie";
import Queue from "@modules/movies/infra/jobs/CreateQueue";

Queue.process(CreateMovie.handle);
