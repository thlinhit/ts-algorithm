export interface Vertex {
    name: string;
}

export interface WeightEdge {
    from: Vertex;
    to: Vertex;
    weight: number;
}
``;

export interface Graph {
    edges: WeightEdge[];
}

function dijkstra(graph: Graph, start: Vertex): string {
    const found = graph.edges.find(edge => edge.from === start);
    return !!found ? 'ok' : 'not found';
}

// run
export function test(): void {
    const graph = { edges: [] } as Graph;
    const bookVertex = { name: 'Book' } as Vertex;
    const rareLPVertex = { name: 'Rare LP' } as Vertex;
    const posterVertex = { name: 'Poster' } as Vertex;
    const drumSetVertex = { name: 'Drum Set' } as Vertex;
    const bassGuitarVertex = { name: 'Bass Guitar' } as Vertex;
    const pianoVertex = { name: 'Piano' } as Vertex;

    graph.edges.push({ from: bookVertex, to: rareLPVertex, weight: 5 });
    graph.edges.push({ from: bookVertex, to: posterVertex, weight: 0 });
    graph.edges.push({ from: rareLPVertex, to: bassGuitarVertex, weight: 15 });
    graph.edges.push({ from: rareLPVertex, to: drumSetVertex, weight: 20 });
    graph.edges.push({ from: posterVertex, to: drumSetVertex, weight: 35 });
    graph.edges.push({ from: posterVertex, to: bassGuitarVertex, weight: 30 });
    graph.edges.push({ from: bassGuitarVertex, to: pianoVertex, weight: 20 });
    graph.edges.push({ from: drumSetVertex, to: pianoVertex, weight: 10 });

    console.log(dijkstra(graph, bookVertex));
}
