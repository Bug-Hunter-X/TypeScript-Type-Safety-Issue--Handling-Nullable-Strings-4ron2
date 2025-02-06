function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!

//The bug is that it is not clear from the function signature that the function can return different types of strings.
//A more precise type would be:

function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  } else {
    return `Hello, ${name}!`;
  }
}

//This is a more accurate type since it includes the possibility that the return value can be a string containing a name or the string 'Hello, world!'