# TypeScript Type Safety Issue: Handling Nullable Strings

This repository demonstrates a common type safety issue in TypeScript functions that handle nullable string arguments.  The issue stems from the ambiguity of the function's return type when dealing with potentially null input.

## Bug Description

A function that accepts a nullable string argument is designed to return a string greeting. However, the return type is not explicitly defined to account for the difference between a greeting with a name and a default greeting when the name is null. This can lead to unexpected behavior and reduce the overall type safety of the code.

## Solution

The bug is resolved by using a more precise type definition. The updated function explicitly defines the potential return types, ensuring that the compiler correctly infers and enforces type safety.

## How to reproduce

1. Clone this repository.
2. Open the `bug.ts` file. 
3. Observe the function `greet` and its ambiguous return type.
4. Compile and run the code. 
5. Open the `bugSolution.ts` file to see the updated function with a more specific return type that solves the ambiguity.

This example highlights the importance of carefully considering the potential return values when working with nullable types in TypeScript.