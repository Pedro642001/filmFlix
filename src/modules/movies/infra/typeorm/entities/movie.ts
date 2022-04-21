import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
export class Movie {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    year: string;

    @Column()
    imdbID: string;

    @Column()
    type: string;

    @Column()
    poster: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
