import { Injectable } from '@angular/core';
import { TokenStreamService } from './token-stream.service';


interface ParserStream {
    input: any,
    token: any,
    previousToken: any,
    nextToken: any
}

/**
 * The parser operates on a stream of tokens and  creates AST nodes as described
 * in the file "AST.md".
 */
@Injectable()
export class ParserService {

    parserStream: ParserStream;

    constructor(private tokenStream: TokenStreamService) { }

    public parse(input: string) {
        this.parserStream.input = this.tokenStream.init(input);
        this.parserStream.token = null;
        this.parserStream.previousToken = null;
        this.parserStream.nextToken = null;

        this.parserStream.token = this.next();
    }

    next() {
        this.parserStream.previousToken = this.parserStream.token;
        
        if (this.parserStream.nextToken) {
            this.parserStream.token = this.parserStream.nextToken;
            this.parserStream.nextToken = null;
        } else {
            this.parserStream.token = this.parserStream.input();
        }
    }
}
