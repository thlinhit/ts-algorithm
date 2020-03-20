import { Vertex } from './vertex';

export class Edge {
    constructor(
        public start: Vertex,
        public end: Vertex,
        public weight?: number
    ) {}

    hasStart(vertex: Vertex): boolean {
        return !!vertex ? vertex.name === this.start.name : false;
    }

    getId(): string {
        return `${this.start.name}_${this.end.name}`;
    }

    isWeighted(): boolean {
        return !!this.weight;
    }
}
