export default {
  "questions": [
    {
      id: 1,
      title: "Sprechen Sie Deutsch?",
      options: [
        {
          correct: true,
          text: "Ja, Deutsch ist meine Muttersprache"
        },
        {
          correct: true,
          text: "Ja, ich spreche fließend, aber Deutsch ist nicht meine Muttersprache"
        },
        {
          correct: false,
          text: "Ja, aber nur ein bisschen (nicht fließend)"
        },
        {
          correct: false,
          text: "Nein, ich spreche kein Deutsch"
        }
      ],
      explanation:
        "Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`."
    },
    {
      id: 2,
      title: "Haben Sie Internetzugang?",
      options: [
        {
          correct: true,
          text: "`Ja, jeden Tag`"
        },
        {
          correct: false,
          text: "`Ja, aber nicht jeden Tag`"
        },
        {
          correct: false,
          text: "`Nein, nur eingeschränkt`"
        }
      ],
      explanation:
        "Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop."
    },
    {
      id: 3,
      title: "Haben Sie Internetzugang?",
      options: [
        {
          correct: true,
          text: "`Ja, jeden Tag`"
        },
        {
          correct: false,
          text: "`Ja, aber nicht jeden Tag`"
        },
        {
          correct: false,
          text: "`Nein, nur eingeschränkt`"
        }
      ],
      explanation:
        "Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop."
    },
    {
      id: 4,
      title: "Haben Sie Internetzugang?",
      options: [
        {
          correct: true,
          text: "`Ja, jeden Tag`"
        },
        {
          correct: false,
          text: "`Ja, aber nicht jeden Tag`"
        },
        {
          correct: false,
          text: "`Nein, nur eingeschränkt`"
        }
      ],
      explanation:
        "Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop."
    },
    {
      id: 5,
      title: "Haben Sie Internetzugang?",
      options: [
        {
          correct: true,
          text: "`Ja, jeden Tag`"
        },
        {
          correct: false,
          text: "`Ja, aber nicht jeden Tag`"
        },
        {
          correct: false,
          text: "`Nein, nur eingeschränkt`"
        }
      ],
      explanation:
        "Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop."
    },
    {
      id: 6,
      title: "Haben Sie Internetzugang?",
      options: [
        {
          correct: true,
          text: "`Ja, jeden Tag`"
        },
        {
          correct: false,
          text: "`Ja, aber nicht jeden Tag`"
        },
        {
          correct: false,
          text: "`Nein, nur eingeschränkt`"
        }
      ],
      explanation:
        "Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop."
    },
    {
      id: 7,
      title: "Haben Sie Internetzugang?",
      options: [
        {
          correct: true,
          text: "`Ja, jeden Tag`"
        },
        {
          correct: false,
          text: "`Ja, aber nicht jeden Tag`"
        },
        {
          correct: false,
          text: "`Nein, nur eingeschränkt`"
        }
      ],
      explanation:
        "Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop."
    }
  ],
  "version": "0.1.0"
}
