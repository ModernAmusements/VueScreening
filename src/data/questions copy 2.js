export default {
  "questions": [
    {
      id: 1,
      title: "Sprechen Sie Deutsch?",
      options: [
        {
          correct: true,
          text: "`Ja, Deutsch ist meine Muttersprache`"
        },
        {
          correct: true,
          text: "`Ja, ich spreche fließend, aber Deutsch ist nicht meine Muttersprache `"
        },
        {
          correct: false,
          text: "`Ja, aber nur ein bisschen (nicht fließend)`"
        },
        {
          correct: false,
          text: "`Nein, ich spreche kein Deutsch`"
        }
      ],
      explanation:
        "Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`."
    },
    {
      id: 2,
      title: "2. What's the output?",
      code:
        "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}",
      options: [
        {
          correct: false,
          text: "`0 1 2` and `0 1 2`"
        },
        {
          correct: false,
          text: "`0 1 2` and `3 3 3`"
        },
        {
          correct: true,
          text: "`3 3 3` and `0 1 2`"
        }
      ],
      explanation:
        "Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop."
    },
    {
      id: 3,
      title: "3. What's the output?",
      code:
        "const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius\n};\n\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());",
      options: [
        {
          correct: false,
          text: "`20` and `62.83185307179586`"
        },
        {
          correct: true,
          text: "`20` and `NaN`"
        },
        {
          correct: false,
          text: "`20` and `63`"
        },
        {
          correct: false,
          text: "`NaN` and `63`"
        }
      ],
      explanation:
        "Note that the value of `diameter` is a regular function, whereas the value of `perimeter` is an arrow function.\n\nWith arrow functions, the `this` keyword refers to its current surrounding scope, unlike regular functions! This means that when we call `perimeter`, it doesn't refer to the shape object, but to its surrounding scope (window for example).\n\nThere is no value `radius` on that object, which returns `undefined`."
    },
    {
      id: 4,
      title: "4. What's the output?",
      code: '+true;\n!"Lydia";',
      options: [
        {
          correct: true,
          text: "`1` and `false`"
        },
        {
          correct: false,
          text: "`false` and `NaN`"
        },
        {
          correct: false,
          text: "`false` and `false`"
        }
      ],
      explanation:
        "The unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`.\n\nThe string `'Lydia'` is a truthy value. What we're actually asking, is \"is this truthy value falsy?\". This returns `false`."
    },
    {
      id: 5,
      title: "5. Which one is true?",
      code:
        'const bird = {\n  size: "small"\n};\n\nconst mouse = {\n  name: "Mickey",\n  small: true\n};',
      options: [
        {
          correct: true,
          text: "`mouse.bird.size` is not valid"
        },
        {
          correct: false,
          text: "`mouse[bird.size]` is not valid"
        },
        {
          correct: false,
          text: '`mouse[bird["size"]]` is not valid'
        },
        {
          correct: false,
          text: "All of them are valid"
        }
      ],
      explanation:
        'In JavaScript, all object keys are strings (unless it\'s a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement.\n\n`mouse[bird.size]`: First it evaluates `bird.size`, which is `"small"`. `mouse["small"]` returns `true`\n\nHowever, with dot notation, this doesn\'t happen. `mouse` does not have a key called `bird`, which means that `mouse.bird` is `undefined`. Then, we ask for the `size` using dot notation: `mouse.bird.size`. Since `mouse.bird` is `undefined`, we\'re actually asking `undefined.size`. This isn\'t valid, and will throw an error similar to `Cannot read property "size" of undefined`.'
    },
    {
      id: 6,
      title: "6. What's the output?",
      code:
        'let c = { greeting: "Hey!" };\nlet d;\n\nd = c;\nc.greeting = "Hello";\nconsole.log(d.greeting);',
      options: [
        {
          correct: true,
          text: "`Hello`"
        },
        {
          correct: false,
          text: "`Hey!`"
        },
        {
          correct: false,
          text: "`undefined`"
        },
        {
          correct: false,
          text: "`ReferenceError`"
        },
        {
          correct: false,
          text: "`TypeError`"
        }
      ],
      explanation:
        'In JavaScript, all objects interact by _reference_ when setting them equal to each other.\n\nFirst, variable `c` holds a value to an object. Later, we assign `d` with the same reference that `c` has to the object.\n\n<img src="https://i.imgur.com/ko5k0fs.png" width="200">\n\nWhen you change one object, you change all of them.'
    },
    {
      id: 7,
      title: "7. What's the output?",
      code:
        "let a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);",
      options: [
        {
          correct: false,
          text: "`true` `false` `true`"
        },
        {
          correct: false,
          text: "`false` `false` `true`"
        },
        {
          correct: true,
          text: "`true` `false` `false`"
        },
        {
          correct: false,
          text: "`false` `true` `true`"
        }
      ],
      explanation:
        "`new Number()` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.\n\nWhen we use the `==` operator, it only checks whether it has the same _value_. They both have the value of `3`, so it returns `true`.\n\nHowever, when we use the `===` operator, both value _and_ type should be the same. It's not: `new Number()` is not a number, it's an **object**. Both return `false.`"
    }
  ],
  "version": "0.1.0"
}
