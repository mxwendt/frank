import { Injectable } from '@angular/core';
import { InputStreamService } from './input-stream.service';


interface TokenStream {
    input: string,
    position: number
}

/**
 * The token stream (also called tokenizer or lexer) operates on a character 
 * input stream and returns a stream object.
 */
@Injectable()
export class TokenStreamService {

    tokenStream: TokenStream;

    constructor(private inputStream: InputStreamService) {}

    public init(input: string) {
        this.tokenStream.input = input;
        this.tokenStream.position = 0;

        return this.nextToken;
    }

    nextToken() {
        let character;

        while (true) {
            character = this.peek();
            break;
        }

        this.parseError("Unexpected character '" + character + "'");
    }

    peek() {
        return this.tokenStream.input.charAt(this.tokenStream.position);
    }

    parseError(message) {
        
    }
}
