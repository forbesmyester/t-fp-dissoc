# t-fp-assoc

## Usage

Simple `dissoc()` function wrote in Typescript.

    import dissoc from 't-fp-assoc';

    let input: {a: boolean, b: number, c: string}  = {a: false, b: 1, c: 'hi'};
    let result = dissoc('c', input); // {a: false, b: 2}

The type for result is still `{ [k: string]: string | number | boolean; }`.


## Installation

Use `npm install t-fp-assoc` to install.
