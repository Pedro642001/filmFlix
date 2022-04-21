import Queue from "bull";

import CreateMovie from "./CreateMovie";

const CreateMovieQueue = new Queue(CreateMovie.key);

export default CreateMovieQueue;
