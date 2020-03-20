import { Vertex } from './../../../data-structures/graph/vertex';
import { Graph } from '../../../data-structures/graph/graph';

export function breadthFirstSearch(graph: Graph, from: Vertex, to: Vertex): { previousVertices: {} } | null {
    const previousVertices = {};
    const visitedVertices = {};
    const queue = [];

    // Initialize
    queue.push(from);

    // Run
    while (queue.length > 0) {
        const visitingVertex: Vertex = queue.shift();

        const neighbours = graph.getNeighbourEdges(visitingVertex).map(edge => edge.end);

        for (const neighbour of neighbours) {
            if (neighbour === to) {
                previousVertices[neighbour.name] = visitingVertex.name;
                return { previousVertices };
            }

            if (!visitedVertices[neighbour.name]) {
                queue.push(neighbour);
                previousVertices[neighbour.name] = visitingVertex.name;
            }
        }

        visitedVertices[visitingVertex.name] = true;
    }

    return null;
}
