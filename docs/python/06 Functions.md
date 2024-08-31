### FUNCTIONS
- Introduction to Functions
- Defining and Calling a Void Function
- Designing a Program to Use Functions
- Local Variables
- Passing Arguments to Functions
- Global Variables and Global Constants
- Introduction to Value-Returning. Functions: Generating Random Numbers
- Writing Your Own Value-Returning Functions
- The math Module
- Storing Functions in Modules

### Introduction to Functions
- A function is a group of statements that exist within a program for the purpose of performing a specific task.
- Most programs perform tasks that are large enough to be broken down into several subtasks.
- For this reason, programmers usually break down their programs into small manageable pieces known as functions.
- These small functions can then be executed in the desired order to perform the overall task.
- This approach is sometimes called divide and conquer because a large task is divided into several smaller tasks that are easily performed

### Benefits of Modularizing a Program with Functions
- Simpler Code
- Code Reuse
- Better Testing
- Faster Development
- Easier Facilitation of Teamwork

## Void Functions and Value-Returning Functions
- void functions and valuereturning functions.
- When you call a void function, it simply executes the statements it contains and then terminates.
- When you call a value-returning function, it executes the statements that it contains, and then it returns a value back to the statement that called it.
- The input function is an example of a value-returning function. When you call the inputfunction, it gets the data that the user types on the keyboard and returns that data as a string.
- The int and float functions are also examples of value-returning functions. You pass an argument to the int function, and it returns that argument’s value converted to an integer.
- Likewise, you pass an argument to the float function, and it returns that argument’s value converted to a floating-point number.

### Exercises
- What is a function?
- What is meant by the phrase “divide and conquer”?
- How do functions help you reuse code in a program?
- How can functions make the development of multiple programs faster?
- How can functions make it easier for programs to be developed by teams of programmers?

### Defining and Calling a Void Function
- The code for a function is known as a function definition. To execute the function, you write a statement that calls it.
- To create a function you write its definition. Here is the general format of a function definition in Python:

```python
def function_name():
    statement
    statement
    etc.
```
- The first line is known as the function header. It marks the beginning of the function definition.
- The function header begins with the key word def, followed by the name of the function, followed by a set of parentheses, followed by a colon.
- Beginning at the next line is a set of statements known as a block. A block is simply a set of statements that belong together as a group.

### Example 1: Define a function that prints your name, age, and address
```python
# This program demonstrates a function.
# First, we define a function named message.
def my_bio():
    name = "Alpha Alimamy Kamara"
    age = 10
    address = "Mayakie"
    print(f"My name is {name}. I am {age} years old. I come from {address}")

# call the my_bio function
my_bio()
```
### Exercises
- A function definition has what two parts?
- What does the phrase “calling a function” mean?
- When a function is executing, what happens when the end of the function’s block is reached?
- Why must you indent the statements in a block?
