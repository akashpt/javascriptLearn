/*

JavaScript Execution Context: The Core Concept

Think of an execution context as the environment in which JavaScript code runs. 
It manages the variables, functions, and the this keyword within that code.  
There are three types of execution contexts:

    Global Execution Context (GEC):
        Creation: The GEC is the first context created when your JavaScript script starts running.
        Scope: It represents the global scope, where variables declared outside any function belong.
        Global Object: In a browser, the global object is window, while in Node.js, it's global.
        'this': The this keyword in the GEC refers to the global object itself.
        Special Variables: The GEC also sets up variables like undefined.

    Function Execution Context (FEC):
        Creation: A new FEC is created every time a function is called.
        Scope: It represents the local scope of the function, containing variables and parameters specific to that function.
        Scope Chain: The FEC maintains a reference to its parent scope, 
        which is either another FEC or the GEC. This allows for variable lookup in outer scopes if not found locally.
        Arguments Object: The FEC contains a special arguments object, 
        an array-like structure holding the values passed to the function.
        'this': The this keyword's value depends on how 
        the function is called (e.g., simple call, method call, etc.).

    Eval Execution Context (EEC):
        Creation: Created when the eval() function is used. (Note: eval() is generally discouraged 
        due to security and performance concerns.)
        Dynamic Scope: The EEC has access to the variables in the scope where eval() is called.
        Potential for Security Issues: eval() can execute arbitrary code, 
        making it a target for injection attacks if not handled carefully.

Understanding Execution Context Creation (Two Phases):

    Creation Phase:
        Variable Object (VO) Creation: Space is allocated for variables and function 
        declarations (but they aren't assigned values yet).
        Scope Chain Establishment: The context determines which variables and functions 
        it has access to, based on its position in the nested scopes.
        'this' Value Determination: The value of the this keyword 
        is determined based on how the function was called.

    Execution Phase:
        Code Execution: The code within the context is executed line by line.
        Variable Assignment: Values are assigned to variables.
        Function Invocation: Functions are called, potentially creating new FECs.

*/

