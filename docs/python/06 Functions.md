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
### Example 2: Write a function that prints your favorite subjects
```python
# Step 1: Define the function
def favorite_book():
    book_1 = "Getting Started with Python"
    book_2 = "How to increase Your Income"
    book_3 = "The Success Principle"
    print(f"1. {book_1} \n2.{book_2} \n3.{book_3}")
# Step 2: call the  favorite_book function
favorite_book()
```
```
1. Getting Started with Python 
2.How to increase Your Income 
3.The Success Principle
```

Defining and Calling Functions
Professional Appliance Service, Inc. offers maintenance and repair services for household appliances. The owner wants to give each of the company’s service technicians a small handheld computer that displays step-by-step instructions for many of the repairs that they perform. To see how this might work, the owner has asked you to develop a program that displays the following instructions for disassembling an Acme laundry dryer:
- Step 1: Unplug the dryer and move it away from the wall.
- Step 2: Remove the six screws from the back of the dryer.
- Step 3: Remove the dryer’s back panel.
- Step 4: Pull the top of the dryer straight up.
During your interview with the owner, you determine that the program should display the steps one at a time. You decide that after each step is displayed, the user will be asked to press the Enter key to see the next step. Here is the algorithm in pseudocode:
- Display a starting message, explaining what the program does.
- Ask the user to press Enter to see step 1.
- Display the instructions for step 1.
- Ask the user to press Enter to see the next step.
- Display the instructions for step 2.
- Ask the user to press Enter to see the next step.
- Display the instructions for step 3.
- Ask the user to press Enter to see the next step.
- Display the instructions for step 4.

```python
# This program displays step-by-step instructions for disassembling an Acme dryer.
# The main function performs the program's main logic.
def main():
    # Display the start-up message.
    startup_message()
    input('Press Enter to see Step 1.')
    
    # Display step 1.
    step1()
    input('Press Enter to see Step 2.')
    
    # Display step 2.
    step2()
    input('Press Enter to see Step 3.')
    
    # Display step 3.
    step3()
    input('Press Enter to see Step 4.')
    
    # Display step 4.
    step4()
```
```python
# The startup_message function displays the
# program's initial message on the screen.
def startup_message():
    print('This program tells you how to')
    print('disassemble an ACME laundry dryer.')
    print('There are 4 steps in the process.')
    print()
```
```python
# The step1 function displays the instructions
# for step 1.
def step1():
    print('Step 1: Unplug the dryer and')
    print('move it away from the wall.')
    print()
```
```python
# The step2 function displays the instructions
# for step 2.
def step2():
    print('Step 2: Remove the six screws')
    print('from the back of the dryer.')
    print()
```
```python
# The step3 function displays the instructions
# for step 3.
def step3():
    print('Step 3: Remove the back panel')
    print('from the dryer.')
    print()
```
```python
# The step4 function displays the instructions
# for step 4.
def step4():
    print('Step 4: Pull the top of the')
    print('dryer straight up.')
    print()
```
```python
# Call the main function to begin the program.
main()
```

```
This program tells you how to
disassemble an ACME laundry dryer.
There are 4 steps in the process.

Press Enter to see Step 1: 1
Step 1: Unplug the dryer and
move it away from the wall.

Press Enter to see Step 2: 2
Step 2: Remove the six screws
from the back of the dryer.

Press Enter to see Step 3: 3
Step 3: Remove the back panel
from the dryer.

Press Enter to see Step 4: 4
Step 4: Pull the top of the
dryer straight up.

```
### Exercises
- A function definition has what two parts?
- What does the phrase “calling a function” mean?
- When a function is executing, what happens when the end of the function’s block is reached?
- Why must you indent the statements in a block?
