/**
 * Definitions of the AST nodes which follow the structure as defined by ESTree:
 * https://github.com/estree/estree/blob/master/es5.md
 * 
 * It supports ES5 (released in December 2009).
 * TODO: Support ES6 (released in June 2011)
 * TODO: Support ES7 (released in June 2016)
 * TODO: Support ES8 (released in June 2017)
 */

/**
 * All nodes extend this node.
 * 
 * @prop {string} type - the AST variant type
 * @prop {SourceLocation} loc - the source location information
 */
export interface Node {
    type: string,
    loc: SourceLocation | null
}

/**
 * All binding positions accept patterns to allow for destructuring in ES6. For 
 * ES5 the only pattern subtype is an identifier.
 */
export interface Pattern extends Node {}

/**
 * Any expression node. Since the left-hand side of an assigment may be any 
 * expression in general, an expression can also be a pattern.
 */
export interface Expression extends Node {}

/**
 * A literal token. Note that a literal can be an expression.
 */
export interface Literal extends Expression, Pattern {
    type: "Literal",
    value: string | boolean | number | RegExp | null
}

/**
 * A source location.
 * 
 * @prop {string} source - information about the source location
 * @prop {Position} start - the position of the first character of the parsed source region
 * @prop {Position} end - the position of the first character after the parsed source region
 */
interface SourceLocation {
    source: string | null,
    start: Position,
    end: Position
}

/**
 * A position in the source code.
 * 
 * @prop {number} line - the 1-indexed line number
 * @prop {number} column - the 0-indexed column number
 */
interface Position {
    line: number,
    column: number
}