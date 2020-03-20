import { Vertex } from './vertex';
import { Edge } from './edge';

export class Graph {
    // Implement Hash for quick lookup
    private edges: { [key: string]: Edge } = {};
    private vertices: { [key: string]: Vertex } = {};

    addEdge(edge: Edge): Graph {
        this.edges[edge.getId()] = edge;

        this.addVertex(edge.start);
        this.addVertex(edge.end);

        return this;
    }

    addVertex(vertex: Vertex): Graph {
        this.vertices[vertex.name] = vertex;
        return this;
    }

    getEdges(): Edge[] {
        return Object.values(this.edges).map(edge => Object.assign({}, edge));
    }

    getNeighbourEdges(vertex: Vertex): Edge[] {
        return Object.values(this.edges).filter(edge => edge.hasStart(vertex));
    }

    getVertices(): Vertex[] {
        return Object.values(this.vertices).map(vertex => Object.assign({}, vertex));
    }
}
