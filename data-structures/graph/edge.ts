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

    static oneToManyBuilder(): Edge.OneToManyBuilder {
        return new Edge.OneToManyBuilder();
    }
}
export namespace Edge {
    export class OneToManyBuilder {
        private _from: Vertex;
        private _tos: {vertex: Vertex, weight?: number}[] = [];
        
        from(input: Vertex): OneToManyBuilder {
            this._from = input;
            return this;
        }

        to(input: Vertex, weight?: number): OneToManyBuilder {
            this._tos.push({vertex: input, weight});
            return this;
        }

        build(): Edge[] {
            if (!this._from || this._tos.length === 0) {
                throw new Error('all fields must not be empty');
            }

            return this._tos.map(_to => new Edge(this._from, _to.vertex, _to.weight))
        }
    }
}
