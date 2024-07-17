switch (month) {
    case 1:
        console.log("Jan");
    case 2:  // No break here!
        console.log("Feb");
    case 3:
        console.log("Mar");
        break;  
    default:
        break;
} // Output: "Jan" "Feb" "Mar"  (all three are printed)


/* 
Alternatives to if...else if...else: Switch statements can be a more concise and readable way to handle multiple conditional branches, especially when the conditions are simple equality checks.

Strict Equality (===) The switch statement uses strict equality comparison (===). This means that both the value and the data type of the expression must match the case value for a match to occur.

Fallthrough Behavior (without break): If you omit the break statement, the execution will continue into the next case block, even if that case doesn't match. This is rarely desired behavior, so always include break.
*/