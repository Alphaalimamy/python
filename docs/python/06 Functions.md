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


## Local Variables
A local variable is created inside a function and cannot be accessed by statements that are outside the function. Different functions can have local variables with the same names because the functions cannot see each other’s local variables.

```python
# Definition of the main function.
def main():
    name = get_name()  # Capture the returned name
    print('Hello', name)

# Definition of the get_name function.
def get_name():
    return input('Enter your name: ')  # Return the name

# Call the main function.
main()
```

## Scope and Local Variables
A variable’s scope is the part of a program in which the variable may be accessed. A variable is visible only to statements in the variable’s scope. A local variable’s scope is the function in which the variable is created. 
```python
def bad_function():
    print('The value is', val) # This will cause an error!
    val = 5
```
```python
# This program demonstrates two functions that
# have local variables with the same name.

def main():
    # Call the texas function.
    texas()
    # Call the california function.
    california()

# Definition of the texas function. It creates
# a local variable named birds.
def mambolo():
    birds = 5000
    print('Mambolo has', birds, 'birds.')

# Definition of the california function. It also
# creates a local variable named birds.
def mayakie():
    birds = 8000
    print('Mayakie has', birds, 'birds.')

# Call the main function.
main()
```
```
Mambolo has 5000 birds.
Mayakie has 8000 birds.
```
### Exercises
- What is a local variable? How is access to a local variable restricted?
- What is a variable’s scope?
- Is it permissible for a local variable in one function to have the same name as a local variable in a different function?


## Passing Arguments to Functions
An argument is any piece of data that is passed into a function when the function is called. A parameter is a variable that receives an argument that is passed into a function.

```python
# The show_double function accepts an argument and displays double its value.
def show_double(number):
    result = number * 2
    print(result)

# Call the main function.
value = 5
show_double(value)
```
### Output
```
10
```
### Spotlight Exercise
Passing an Argument to a Function
Your friend Michael runs a catering company. Some of the ingredients that his recipes require are measured in cups. When he goes to the grocery store to buy those ingredients, however, they are sold only by the fluid ounce. He has asked you to write a simple program that converts cups to fluid ounces.
You design the following algorithm:
- Display an introductory screen that explains what the program does.
- Get the number of cups.
- Convert the number of cups to fluid ounces and display the result.
This algorithm lists the top level of tasks that the program needs to perform and becomes the basis of the program’s main function.

```python
# This program converts cups to fluid ounces.

def main():
    # Display the intro screen.
    intro()
    # Get the number of cups.
    cups_needed = int(input('Enter the number of cups: '))
    # Convert the cups to ounces.
    cups_to_ounces(cups_needed)

# The intro function displays an introductory screen.
def intro():
    print('This program converts measurements')
    print('in cups to fluid ounces. For your')
    print('reference the formula is:')
    print('1 cup = 8 fluid ounces')
    print()

# The cups_to_ounces function accepts a number of
# cups and displays the equivalent number of ounces.
def cups_to_ounces(cups):
    ounces = cups * 8
    print('That converts to', ounces, 'ounces.')

# Call the main function.
main()
```
```
This program converts measurements
in cups to fluid ounces. For your
reference the formula is:
1 cup = 8 fluid ounces

Enter the number of cups: 3
That converts to 24 ounces.
```

## Passing Multiple Arguments
```python
# This program demonstrates a function that accepts
# two arguments.

# The show_sum function accepts two arguments
# and displays their sum.
def show_sum(num1, num2):
    result = num1 + num2
    print(result)
```
```
# Call the main function.
num_1 = 12
num_2 = 45
print('The sum ofnum_1 and num_2 is')
show_sum(num_1, num_2)
```
### Output
```
The sum of 12 and 45 is
57
```

### Exercise
You are tasked with creating a program that reverses the order of two string inputs provided by the user. Specifically, the program should prompt the user to enter their first and last names, and then display the last name followed by the first name. This can be useful for formatting names in a variety of ways. Write a Python program to achieve this functionality

```python
# This program demonstrates passing two string
# arguments to a function.

def main():
    first_name = input('Enter your first name: ')
    last_name = input('Enter your last name: ')
    print('Your name reversed is')
    reverse_name(first_name, last_name)

def reverse_name(first, last):
    print(last, first)

# Call the main function.
main()
```

## Programming Exercises

1. **Kilometer Converter**  
   Write a program that asks the user to enter a distance in kilometers, and then converts that distance to miles. The conversion formula is as follows:  
   `Miles = Kilometers * 0.6214`

2. **Sales Tax Program Refactoring**  
   Programming Exercise #6 in Chapter 2 was the Sales Tax program. For that exercise, you were asked to write a program that calculates and displays the county and state sales tax on a purchase. If you have already written that program, redesign it so the subtasks are in functions. If you have not already written that program, write it using functions.

3. **How Much Insurance?**  
   Many financial experts advise that property owners should insure their homes or buildings for at least 80 percent of the amount it would cost to replace the structure. Write a program that asks the user to enter the replacement cost of a building and then displays the minimum amount of insurance he or she should buy for the property.

4. **Automobile Costs**  
   Write a program that asks the user to enter the monthly costs for the following expenses incurred from operating his or her automobile: loan payment, insurance, gas, oil, tires, and maintenance. The program should then display the total monthly cost of these expenses, and the total annual cost of these expenses.

5. **Property Tax**  
   A county collects property taxes on the assessment value of property, which is 60 percent of the property’s actual value. For example, if an acre of land is valued at $10,000, its assessment value is $6,000. The property tax is then 72¢ for each $100 of the assessment value. The tax for the acre assessed at $6,000 will be $43.20. Write a program that asks for the actual value of a piece of property and displays the assessment value and property tax.

6. **Calories from Fat and Carbohydrates**  
   A nutritionist who works for a fitness club helps members by evaluating their diets. As part of her evaluation, she asks members for the number of fat grams and carbohydrate grams that they consumed in a day. Then, she calculates the number of calories that result from the fat, using the following formula:  
   `calories from fat = fat grams * 9`  
   Next, she calculates the number of calories that result from the carbohydrates, using the following formula:  
   `calories from carbs = carb grams * 4`  
   The nutritionist asks you to write a program that will make these calculations.

7. **Stadium Seating**  
   There are three seating categories at a stadium. For a softball game, Class A seats cost $20, Class B seats cost $15, and Class C seats cost $10. Write a program that asks how many tickets for each class of seats were sold, and then displays the amount of income generated from ticket sales.

8. **Paint Job Estimator**  
   A painting company has determined that for every 112 square feet of wall space, one gallon of paint and eight hours of labor will be required. The company charges $35.00 per hour for labor. Write a program that asks the user to enter the square feet of wall space to be painted and the price of the paint per gallon. The program should display the following data:
   - The number of gallons of paint required
   - The hours of labor required
   - The cost of the paint
   - The labor charges
   - The total cost of the paint job

9. **Monthly Sales Tax**  
   A retail company must file a monthly sales tax report listing the total sales for the month, and the amount of state and county sales tax collected. The state sales tax rate is 5 percent and the county sales tax rate is 2.5 percent. Write a program that asks the user to enter the total sales for the month. From this figure, the application should calculate and display the following:
   - The amount of county sales tax
   - The amount of state sales tax
   - The total sales tax (county plus state)

10. **Feet to Inches**  
    One foot equals 12 inches. Write a function named `feet_to_inches` that accepts a number of feet as an argument and returns the number of inches in that many feet. Use the function in a program that prompts the user to enter a number of feet and then displays the number of inches in that many feet.

11. **Math Quiz**  
    Write a program that gives simple math quizzes. The program should display two random numbers that are to be added, such as:
    ```
    247
    + 129
    ```
    The program should allow the student to enter the answer. If the answer is correct, a message of congratulations should be displayed. If the answer is incorrect, a message showing the correct answer should be displayed.

12. **Maximum of Two Values**  
    Write a function named `max` that accepts two integer values as arguments and returns the value that is the greater of the two. For example, if 7 and 12 are passed as arguments to the function, the function should return 12. Use the function in a program that prompts the user to enter two integer values. The program should display the value that is the greater of the two.

13. **Falling Distance**  
    When an object is falling because of gravity, the following formula can be used to determine the distance the object falls in a specific time period:
    `d = 1/2 * g * t^2`  
    The variables in the formula are as follows: `d` is the distance in meters, `g` is 9.8, and `t` is the amount of time, in seconds, that the object has been falling.  
    Write a function named `falling_distance` that accepts an object’s falling time (in seconds) as an argument. The function should return the distance, in meters, that the object has fallen during that time interval. Write a program that calls the function in a loop that passes the values 1 through 10 as arguments and displays the return value.

14. **Kinetic Energy**  
    In physics, an object that is in motion is said to have kinetic energy. The following formula can be used to determine a moving object’s kinetic energy:
    `KE = 1/2 * m * v^2`  
    The variables in the formula are as follows: `KE` is the kinetic energy, `m` is the object’s mass in kilograms, and `v` is the object’s velocity in meters per second.  
    Write a function named `kinetic_energy` that accepts an object’s mass (in kilograms) and velocity (in meters per second) as arguments. The function should return the amount of kinetic energy that the object has. Write a program that asks the user to enter values for mass and velocity, and then calls the `kinetic_energy` function to get the object’s kinetic energy.

15. **Test Average and Grade**  
    Write a program that asks the user to enter five test scores. The program should display a letter grade for each score and the average test score. Write the following functions in the program:
    - `calc_average`—This function should accept five test scores as arguments and return the average of the scores.
    - `determine_grade`—This function should accept a test score as an argument and return a letter grade for the score based on the following grading scale:
      ```
      Score     Letter Grade
      90–100    A
      80–89     B
      70–79     C
      60–69     D
      Below 60  F
      ```

16. **Odd/Even Counter**  
    In this chapter, you saw an example of how to write an algorithm that determines whether a number is even or odd. Write a program that generates 100 random numbers and keeps a count of how many of those random numbers are even and how many of them are odd.

17. **Prime Numbers**  
    A prime number is a number that is only evenly divisible by itself and 1. For example, the number 5 is prime because it can only be evenly divided by 1 and 5. The number 6, however, is not prime because it can be divided evenly by 1, 2, 3, and 6.  
    Write a Boolean function named `is_prime` which takes an integer as an argument and returns `true` if the argument is a prime number, or `false` otherwise. Use the function in a program that prompts the user to enter a number and then displays a message indicating whether the number is prime.

18. **Prime Number List**  
    This exercise assumes that you have already written the `is_prime` function in Programming Exercise 17. Write another program that displays all of the prime numbers from 1 to 100. The program should have a loop that calls the `is_prime` function.

19. **Future Value**  
    Suppose you have a certain amount of money in a savings account that earns compound monthly interest, and you want to calculate the amount that you will have after a specific number of months. The formula is as follows:
    `F = P * (1 + i)^t`  
    The terms in the formula are:
    - `F` is the future value of the account after the specified time period.
    - `P` is the present value of the account.
    - `i` is the monthly interest rate.
    - `t` is the number of months.  
    Write a program that prompts the user to enter the account’s present value, monthly interest rate, and the number of months that the money will be left in the account. The program should pass these values to a function that returns the future value of the account, after the specified number of months. The program should display the account’s future value.

20. **Random Number Guessing Game**  
    Write a program that generates a random number in the range of 1 through 100, and asks the user to guess what the number is. If the user’s guess is higher than the random number, the program should display “Too high, try again.” If the user’s guess is lower than the random number, the program should display “Too low, try again.” If the user guesses the number, the application should congratulate the user and then generate a new random number so the game can start over.  
    **Optional Enhancement:** Enhance the game so it keeps count of the number of guesses that the user makes. When the user correctly guesses the random number, the program should display the number of guesses.

21. **Rock, Paper, Scissors Game**  
    Write a program that lets the user play the game of Rock, Paper, Scissors against the computer. The program should work as follows:
    1. When the program begins, a random number in the range of 1 through 3 is generated. If the number is 1, then the computer has chosen rock. If the number is 2, then the computer has chosen paper. If the number is 3, then the computer has chosen scissors. (Don’t display the computer’s choice yet.)
    2. The user enters his or her choice of “rock,” “paper,” or “scissors” at the keyboard.
    3. The computer’s choice is displayed.
    4. A winner is selected according to the following rules:
       - If one player chooses rock and the other player chooses scissors, then rock wins. (The rock smashes the scissors.)
       - If one player chooses scissors and the other player chooses paper, then scissors wins. (Scissors cuts paper.)
       - If one player chooses paper and the other player chooses rock, then paper wins. (Paper wraps rock.)
       - If both players make the same choice, the game must be played again to determine the winner.

