import { Vertex } from './vertex';
import { WeightedEdge } from './weighted-edge';

export class Graph {
    private edges: WeightedEdge[];
    private vertices: Vertex[] = [];

    constructor(edges: WeightedEdge[]) {
        this.edges = edges || [];
        for (const edge of edges) {
            this.vertices.push(...[edge.to, edge.from]);
            this.vertices = [...new Set(this.vertices)];
        }
    }

    getEdges(): WeightedEdge[] {
        return this.edges;
    }

    getNeighbourEdges(vertex: Vertex): WeightedEdge[] {
        return this.edges.filter(edge => edge.from === vertex);
    }

    getVertices(): Vertex[] {
        return this.vertices;
    }

    static builder(): Graph.Builder {
        return new Graph.Builder();
    }
}

export namespace Graph {
    export class Builder {
        private edges: WeightedEdge[] = [];

        addEdge(edge: WeightedEdge): Builder {
            this.edges.push(edge);
            return this;
        }

        build(): Graph {
            return new Graph(this.edges);
        }
    }
}
