import { dijkstra } from './dijkstra';
import { Graph } from '../../../data-structures/graph/graph';
import { Vertex } from '../../../data-structures/graph/vertex';
import { Edge } from '../../../data-structures/graph/edge';

describe('Dijkstra', () => {
    let graph: Graph;
    const bookVertex = { name: 'Book' } as Vertex;
    const rareLPVertex = { name: 'Rare LP' } as Vertex;
    const posterVertex = { name: 'Poster' } as Vertex;
    const drumSetVertex = { name: 'Drum Set' } as Vertex;
    const bassGuitarVertex = { name: 'Bass Guitar' } as Vertex;
    const pianoVertex = { name: 'Piano' } as Vertex;

    beforeEach(() => {
        graph = new Graph()
            .addEdge(new Edge(bookVertex, rareLPVertex, 5))
            .addEdge(new Edge(bookVertex, posterVertex, 0))
            .addEdge(new Edge(rareLPVertex, bassGuitarVertex, 15))
            .addEdge(new Edge(rareLPVertex, drumSetVertex, 20))
            .addEdge(new Edge(posterVertex, drumSetVertex, 35))
            .addEdge(new Edge(posterVertex, bassGuitarVertex, 30))
            .addEdge(new Edge(bassGuitarVertex, pianoVertex, 20))
            .addEdge(new Edge(drumSetVertex, pianoVertex, 10));
    });

    test('should build the closest paths from start to others', () => {
        const { costs, previousVertices } = dijkstra(graph, bookVertex);

        expect(costs[pianoVertex.name]).toBe(35);
        expect(previousVertices[pianoVertex.name]).toBe(drumSetVertex.name);

        expect(costs[drumSetVertex.name]).toBe(25);
        expect(previousVertices[drumSetVertex.name]).toBe(rareLPVertex.name);

        expect(costs[bassGuitarVertex.name]).toBe(20);
        expect(previousVertices[bassGuitarVertex.name]).toBe(rareLPVertex.name);

        expect(costs[rareLPVertex.name]).toBe(5);
        expect(previousVertices[rareLPVertex.name]).toBe(bookVertex.name);

        expect(costs[posterVertex.name]).toBe(0);
        expect(previousVertices[posterVertex.name]).toBe(bookVertex.name);
    });

    test('negative weighted edge should not work properly', () => {
        graph.addEdge(new Edge(rareLPVertex, posterVertex, -25));

        const { costs, previousVertices } = dijkstra(graph, bookVertex);

        expect(costs[pianoVertex.name]).toBe(35);
        expect(previousVertices[pianoVertex.name]).toBe(drumSetVertex.name);

        expect(costs[drumSetVertex.name]).toBe(25);
        expect(previousVertices[drumSetVertex.name]).toBe(rareLPVertex.name);

        expect(costs[bassGuitarVertex.name]).toBe(20);
        expect(previousVertices[bassGuitarVertex.name]).toBe(rareLPVertex.name);

        expect(costs[rareLPVertex.name]).toBe(5);
        expect(previousVertices[rareLPVertex.name]).toBe(bookVertex.name);

        // Only this path is affected but do not affect other => so the path to Piano in this case is not the closest
        expect(costs[posterVertex.name]).toBe(-20);
        expect(previousVertices[posterVertex.name]).toBe(rareLPVertex.name);
    });
});
