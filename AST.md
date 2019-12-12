## Abstract Syntax Tree (AST) for JavaScript

TODO: Define these tokens as global constants.

| Token                  | AST Node                                                      | Example                       |
| ---------------------- | ------------------------------------------------------------- | ----------------------------- |
| Number                 | `{type: "number", value: number}`                             | `123.4`                       |
| String                 | `{type: "string", value: string}`                             | `Hello World!`                |
| Boolean                | `{type: "boolean", value: boolean}`                           | `true`                        |
| Identifier             | `{type: "variable", value: NAME}`                             | `foo`                         |
| Function               | `{type: "function", vars: [NAME...], body: AST}`              | `function(foo, bar) {...}`    |
| Function Call          | `{type: "call", func: AST, args: [AST...]}`                   | `foo(bar, 2)`                 |
| Condition              | `{type: "if", cond: AST, then: AST, else: AST}`               | `if (x > 0) {...} else {...}` |
| Assignment             | `{type: "assign", operator: "=", left: AST, right: AST}`      | `x = 10`                      |
| Binary Expression      | `{type: "binary", operator: OPERATOR, left: AST, right: AST}` | `x + y * z`                   |
| Sequences              | `{type: "program", value: [AST...]}`                          | `{x = 5; b = x * 2; x + b;}`  |
| Block Scoped Variables |                                                               |                               |

## Functions

* Functions are `values` that can be part of `expressions`, returned from other `functions`, and so forth.
* Functions are *reference values*.
* Functions are applied to `arguments`.
* The `arguments` are passed by sharing, which is also calles "pass by value".
* Function bodies have zero or more `expressions`.
* Function application evaluates whatever is returned with the `return` keyword, or to `undefined`.
* Function application creates a scope. Scopes are nested and free `variable` references closed over.
* `Variables` can shadow `variables` in an enclosing scope.
* `let` is an idiom where we create a `function` and call it immediately in order to bind `values` to `names`.
* JavaScript uses `var` to bind `variables` wihtin a `function's` scope.