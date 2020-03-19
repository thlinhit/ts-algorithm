import { Vertex } from './vertex';

export class WeightedEdge {
    constructor(
        public from: Vertex,
        public to: Vertex,
        public weight: number
    ) {}
}
