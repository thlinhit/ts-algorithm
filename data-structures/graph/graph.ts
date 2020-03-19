import { Vertex } from './vertex';
import { WeightedEdge } from './weighted-edge';

export class Graph {
    // Implement Hash for quick lookup
    private edges: { [key: string]: WeightedEdge } = {};
    private vertices: { [key: string]: Vertex } = {};

    addEdge(edge: WeightedEdge): Graph {
        this.edges[edge.getId()] = edge;

        this.addVertex(edge.start);
        this.addVertex(edge.end);

        return this;
    }

    addVertex(vertex: Vertex): Graph {
        this.vertices[vertex.name] = vertex;
        return this;
    }

    getEdges(): WeightedEdge[] {
        return Object.values(this.edges).map(edge => Object.assign({}, edge));
    }

    getNeighbourEdges(vertex: Vertex): WeightedEdge[] {
        return Object.values(this.edges).filter(edge => edge.hasStart(vertex));
    }

    getVertices(): Vertex[] {
        return Object.values(this.vertices).map(vertex => Object.assign({}, vertex));
    }
}
