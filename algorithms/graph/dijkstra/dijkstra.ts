import { Graph } from '../../../data-structures/graph/graph';
import { Vertex } from '../../../data-structures/graph/vertex';
import { WeightedEdge } from '../../../data-structures/graph/weighted-edge';

export function dijkstra(graph: Graph, start: Vertex): { costs: {}; previousVertices: {} } {
    const previousVertices = {};
    const costs = {};
    const visitedVertices = {};
    const queue = [];

    // Initialize
    graph.getVertices().forEach(vertex => {
        previousVertices[vertex.name] = null;
        costs[vertex.name] = Infinity;
    });

    costs[start.name] = 0;

    queue.push({ vertex: start, cost: costs[start.name] });

    // Run
    while (queue.length > 0) {
        const visitingVertex: Vertex = pollClosestVertex(queue);

        if (!visitedVertices[visitingVertex.name]) {
            visitedVertices[visitingVertex.name] = true;

            const neighbourEdges: WeightedEdge[] = graph.getNeighbourEdges(visitingVertex);

            for (const edge of neighbourEdges) {
                const neighbour = edge.end;
                const costToNeighbour = costs[visitingVertex.name] + edge.weight;
                if (costs[neighbour.name] > costToNeighbour) {
                    costs[neighbour.name] = costToNeighbour;
                    previousVertices[neighbour.name] = visitingVertex.name;
                }

                queue.push({ vertex: neighbour, cost: costs[neighbour.name] });
            }
        }
    }

    return {
        costs,
        previousVertices,
    };
}

// TODO: find out more about PriorityQueue and refactor
function pollClosestVertex(queue: { vertex: Vertex; cost: number }[]): Vertex {
    let result: { vertex: Vertex; cost: number };
    for (const element of queue) {
        if (!result) {
            result = element;
        } else if (result.cost > element.cost) {
            result = element;
        }
    }

    // remove element out of queue
    queue.splice(queue.indexOf(result), 1);

    return result.vertex;
}
