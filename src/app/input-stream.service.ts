import { Injectable } from '@angular/core';

/**
 * The input stream provides operations to read characters from a string.
 *
 * It can easily keep track of the current location (i.e. line/column).
 */
@Injectable()
export class InputStreamService {

	private input: string;
	private position: number = 0;
	private line: number = 1;
	private column: number = 0;

	/**
	 * Initializes a new input stream.
	 */
	public init(input: string) {
		this.input = input;
	}

	/**
	 * Returns the next character but without removing it from the input stream.
	 */
	public peek(): string {
		return this.input.charAt(this.position);
	}

	/**
	 * Returns the next character and also discards it from the input stream.
	 */
	public next(): string {
		let character: string = this.input.charAt(this.position++);
		
		if (character == "\n") {
			this.line++;
			this.column = 0;
		} else {
			this.column++;
		}

		return character;
	}

	/**
	 * Returns true if and only if there are no more characters in the input stream.
	 */
	public eof(): boolean {
		return this.peek() == "";
	}

	/**
	 * Throws error message.
	 */
	public croak(message: string) {
		throw new Error(message + "(" + this.line + ":" + this.column + ")");
	}
}
