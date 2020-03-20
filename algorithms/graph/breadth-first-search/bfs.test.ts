import { Vertex } from './../../../data-structures/graph/vertex';
import { Graph } from './../../../data-structures/graph/graph';
import { Edge } from '../../../data-structures/graph/edge';
import { breadthFirstSearch } from './bfs';

describe('bfs', () => {
    let graph: Graph;

    const YOU = new Vertex('You');
    const BOB = new Vertex('Bob');
    const CLAIRE = new Vertex('Claire');
    const ALICE = new Vertex('Alice');
    const ANUJ = new Vertex('Anuj');
    const PEGGY = new Vertex('Peggy');
    const THOM = new Vertex('Thom');
    const JONNY = new Vertex('Jonny');

    beforeEach(() => {
        graph = new Graph()
          .addEdges(
            Edge.oneToManyBuilder()
              .from(YOU)
              .to(BOB)
              .to(CLAIRE)
              .to(ALICE)
              .build(),
          )
          .addEdges(
            Edge.oneToManyBuilder()
              .from(BOB)
              .to(ANUJ)
              .to(PEGGY)
              .to(YOU)
              .build(),
          )
          .addEdge(new Edge(ANUJ, BOB))
          .addEdges(
            Edge.oneToManyBuilder()
              .from(PEGGY)
              .to(BOB)
              .to(ALICE)
              .build(),
          )
          .addEdges(
            Edge.oneToManyBuilder()
              .from(ALICE)
              .to(PEGGY)
              .to(YOU)
              .build(),
          )
          .addEdges(
            Edge.oneToManyBuilder()
              .from(CLAIRE)
              .to(THOM)
              .to(YOU)
              .to(JONNY)
              .build(),
          )
          .addEdge(new Edge(THOM, CLAIRE))
          .addEdge(new Edge(JONNY, CLAIRE));
    });

    test('should find relationship YOU and THOM', () => {
        const { previousVertices }  = breadthFirstSearch(graph, YOU, THOM);

        expect(previousVertices[THOM.name]).toBe(CLAIRE.name);
        expect(previousVertices[CLAIRE.name]).toBe(YOU.name);
    });

     test('should find relationship ANUJ and THOM', () => {
       const { previousVertices } = breadthFirstSearch(graph, ANUJ, THOM);

       expect(previousVertices[THOM.name]).toBe(CLAIRE.name);
       expect(previousVertices[CLAIRE.name]).toBe(YOU.name);
       expect(previousVertices[YOU.name]).toBe(BOB.name);
       expect(previousVertices[BOB.name]).toBe(ANUJ.name);
     });

     test('should find relationship PEGGY and JONNY', () => {
       const { previousVertices } = breadthFirstSearch(graph, PEGGY, JONNY);

       expect(previousVertices[JONNY.name]).toBe(CLAIRE.name);
       expect(previousVertices[CLAIRE.name]).toBe(YOU.name);
       expect(previousVertices[YOU.name]).toBe(ALICE.name);
       expect(previousVertices[ALICE.name]).toBe(PEGGY.name);
     });

     test('should return null if not found', () => {
        // given
        const ISOLATED = new Vertex('ISOLATED');
        graph.addVertex(ISOLATED);

        // when
        const result = breadthFirstSearch(graph, YOU, ISOLATED);

        // then
        expect(result).toBeNull();
     });
});
