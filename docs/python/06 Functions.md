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
### Example 2: Write a function that prints your favorite books
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

## Defining and Calling Functions
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
    print("The value is: ", val) # <-- calling a variable before it is created
    val = 5

bad_function()


def good_function():
    val = 5
    print("The value is: ", val)


good_function()

```
```python
# This program demonstrates two functions that
# have local variables with the same name.

def main():
    # Call mambolo function.
    mambolo()
    # Call mayakie function.
    mayakie()

# Definition of the mambolo function. It creates
# a local variable named birds.
def mambolo():
    birds = 5000
    print('Mambolo has', birds, 'birds.')

# Definition of the mayakie function. It also
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
### Spotlight Exercise: Passing an Argument to a Function
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
### Program Output

```python
# This program demonstrates passing two strings as keyword arguments to a function.

def main():
    first_name = input('Enter your first name: ')
    last_name = input('Enter your last name: ')
    print('Your name reversed is')
    reverse_name(last=last_name, first=first_name)

def reverse_name(first, last):
    print(last, first)

# Call the main function.
main()
```

```
Program Output (with input shown in bold)
Enter your first name: Rugiatu
Enter your last name: Salieu
Your name reversed is
Salieu Rugiatu
```

## Making Changes to Parameters
When an argument is passed to a function in Python, the function parameter variable will
reference the argument’s value. However, any changes that are made to the parameter variable will not affect the argument. 
```python
# This program demonstrates what happens when you
# change the value of a parameter.

def main():
    value = 99
    print('The value is', value)
    change_me(value)
    print('Back in main the value is', value)

def change_me(arg):
    print('I am changing the value.')
    arg = 0
    print('Now the value is', arg)

# Call the main function.
main()
```
```
## Program Output
The value is 99
I am changing the value.
Now the value is 0
Back in main the value is 99
```

### Keyword Arguments
In addition to this conventional form of argument passing, the Python
language allows you to write an argument in the following format, to specify which parameter variable the argument should be passed to:

        `parameter_name=value`
        
In this format, parameter_name is the name of a parameter variable and value is the value
being passed to that parameter. An argument that is written in accordance with this syntax
is known as a keyword argument

```python
# This program demonstrates keyword arguments.

def main():
    # Show the amount of simple interest, using 0.01 as
    # interest rate per period, 10 as the number of periods, and Le10,000 as the principal.
    show_interest(rate=0.01, periods=10, principal=10000.0)

# The show_interest function displays the amount of
# simple interest for a given principal, interest rate per period, and number of periods.

def show_interest(principal, rate, periods):
    interest = principal * rate * periods
    print('The simple interest will be Le: ', format(interest, ',.2f'), sep='')

# Call the main function.
main()
```
```
## Output
The simple interest will be Le: 1000.00.
```

Mixing Keyword Arguments with Positional Arguments
It is possible to mix positional arguments and keyword arguments in a function call, but the
positional arguments must appear first, followed by the keyword arguments. Otherwise an error will occur. Here is an example of how we might call the show_interest function of Program 5-10 using both positional and keyword arguments:
  `show_interest(10000.0, rate=0.01, periods=10)`
In this statement, the first argument, 10000.0, is passed by its position to the principal
parameter. The second and third arguments are passed as keyword arguments. The following function call will cause an error, however, because a non-keyword argument follows a
keyword argument:
# This will cause an ERROR!
show_interest(1000.0, rate=0.01, 10)

### Exercises
- What are the pieces of data that are passed into a function called?
- What are the variables that receive pieces of data in a function called?
- What is a parameter variable’s scope?
- When a parameter is changed, does this affect the argument that was passed into the parameter?
- The following statements call a function named show_data. Which of the statements passes arguments by position, and which passes keyword arguments?
    a. show_data(name='Kathryn', age=25)
    b. show_data('Kathryn', 25)


### Global Variables and Global Constants
A global variable is accessible to all the functions in a program file.

```python
# Create a global variable.
my_value = 10

# The show_value function prints the value of the global variable.
def show_value():
    print(my_value)

# Call the show_value function.
show_value()
```
```
## Program Output
10
```
```python
# Create a global variable.
number = 0

def main():
    global number
    number = int(input('Enter a number: '))
    show_number()

def show_number():
    print('The number you entered is', number)

    # Call the main function.
main()
```
```
## Program Output
Enter a number: 55 enter
The number you entered is 55
```

### Global Constants
Although you should try to avoid the use of global variables, it is permissible to use global
constants in a program. A global constant is a global name that references a value that cannot be changed. Because a global constant’s value cannot be changed during the program’s execution, you do not have to worry about many of the potential hazards that are associated with the use of global variables

### Using Global Constants
Rugiatu works for Integrated Systems, Inc., a software company that has a reputation for providing excellent fringe benefits. One of their benefits is a quarterly bonus that is paid to all employees. Another benefit is a retirement plan for each employee. The company contributes 5 percent of each employee’s gross pay and bonuses to their retirement plans.
Marilyn wants to write a program that will calculate the company’s contribution to an employee’s retirement account for a year. She wants the program to show the amount of contribution for the employee’s gross pay and for the bonuses separately. Here is an algorithm
for the program:
- Get the employee’s annual gross pay.
- Get the amount of bonuses paid to the employee.
- Calculate and display the contribution for the gross pay.
-  Calculate and display the contribution for the bonuses.

```python
# The following is used as a global constant the contribution rate.
CONTRIBUTION_RATE = 0.05

def main():
    gross_pay = float(input('Enter the gross pay: '))
    bonus = float(input('Enter the amount of bonuses: '))
    show_pay_contrib(gross_pay)
    show_bonus_contrib(bonus)

# The show_pay_contrib function accepts the gross  pay as an argument and displays the retirement
# contribution for that amount of pay.
def show_pay_contrib(gross):
    contrib = gross * CONTRIBUTION_RATE
    print('Contribution for gross pay: Le: ', format(contrib, ',.2f'), sep='')

# The show_bonus_contrib function accepts the bonus amount as an argument and displays the
# retirement contribution for that amount of pay.

def show_bonus_contrib(bonus):
    contrib = bonus * CONTRIBUTION_RATE
    print('Contribution for bonuses: Le: ', format(contrib, ',.2f'), sep='')

# Call the main function.
main()
```
```
Program Output (with input shown in bold)
Enter the gross pay: 80000.00e
Enter the amount of bonuses: 20000.00e
Contribution for gross pay: Le: 4000.00
Contribution for bonuses: Le: 1000.00
```

```
1. What is the scope of a global variable?
2. Give one good reason that you should not use global variables in a program.
3. What is a global constant? Is it permissible to use global constants in a program?
```

## Value-Returning Functions: Generating Random Numbers
A value-returning function is a function that returns a value back to the
part of the program that called it. Python, as well as most other programming languages, provides a library of prewritten functions that perform commonly needed tasks. These libraries typically contain a function
that generates random numbers.

A value-returning function is a special type of function. It is like a void function in the following ways.
1. It is a group of statements that perform a specific task.
2. When you want to execute the function, you call it.

## Standard Library Functions and the import Statement
Python, as well as most other programming languages, comes with a standard library of functions that have already been written for you. These functions, known as library functions, make a programmer’s job easier because they perform many of the tasks that programmers commonly need to perform. In fact, you have already used several of Python’s library functions. Some of the functions that you have used are print, input, and range. Python has
many other library functions.

### Generating Random Numbers
1. Random numbers are commonly used in games. For example, computer games that let the player roll dice use random numbers to represent the values of the dice. Programs
2. Random numbers are useful in simulation programs. In some simulations, the computer must randomly decide how a person, animal, insect, or other living being will behave. Formulas can be constructed in which a random number is used to determine
various actions and events that take place in the program.
3. Random numbers are useful in statistical programs that must randomly select data for analysis.
4. Random numbers are commonly used in computer security to encrypt sensitive data.

```python
# This program displays a random number in the range of 1 through 10.
import random

def main():
    # Get a random number.
    number = random.randint(1, 10)
    # Display the number.
    print('The number is', number)

# Call the main function.
main()
```
### Program Output
```
The number is 7
```

### Example 
```python
# This program displays five random numbers in the range of 1 through 100.
import random

def main():
    for count in range(5):
        # Get a random number.
        number = random.randint(1, 100)
        # Display the number.
        print(number)

# Call the main function.
main()
```
### Program Output
```
89
7
16
41
1
```
### NOTE
If you just want to display a random number, it is not necessary to assign the random number to a variable. You can send the random function’s return value directly to the print function, as shown here:

        `print(random.randint(1, 10))`
        
When this statement executes, the randint function is called. The function generates a random number in the range of 1 through 10. That value is returned and then sent to the print function. 

```python
# This program displays five random # numbers in the range of 1 through 100.
import random

def main():
    for count in range(5):
        print(random.randint(1, 100))

# Call the main function.
main()
```
### Program Output
```
89
7
16
41
1
```


### Random Floating Point Number
```python
import random

def random_float():
    return random.random()

# Example: Generate a random float
print(random_float())
```
### Random Selection from a List
```python
import random

def random_choice_from_list(items):
    return random.choice(items)

# Example: Randomly select from a list of fruits
fruits = ["apple", "banana", "cherry", "date", "elderberry"]
print(random_choice_from_list(fruits))
```
### Random Shuffle
```python
import random

def shuffle_list(items):
    random.shuffle(items)
    return items

# Example: Shuffle a list of numbers
numbers = [1, 2, 3, 4, 5]
print(shuffle_list(numbers))
```

### Random Integer from a Range
```python
import random

def random_int_in_range(start, end):
    return random.randint(start, end)

# Example: Generate a random integer between 1 and 50
print(random_int_in_range(1, 50))
```

### Random Sample of Multiple Items from a List
```python
import random

def random_sample_from_list(items, sample_size):
    return random.sample(items, sample_size)

# Example: Randomly select 3 items from a list
colors = ["red", "blue", "green", "yellow", "purple", "orange"]
print(random_sample_from_list(colors, 3))
```

### Random Boolean Value
```python
import random

def random_boolean():
    return random.choice([True, False])

# Example: Generate a random True or False
print(random_boolean())
```
### Random Number from Normal Distribution
```python
import random

def random_normal(mu, sigma):
    return random.gauss(mu, sigma)

# Example: Generate a random number with mean 0 and standard deviation 1
print(random_normal(0, 1))
```

```python
import random
import matplotlib.pyplot as plt

# Function to generate a random number from normal distribution
def random_normal(mu, sigma):
    return random.gauss(mu, sigma)

# Generate 1000 random numbers with mean 0 and standard deviation 1
data = [random_normal(0, 1) for _ in range(1000)]

# Plot the histogram of the generated values
plt.figure(figsize=(8, 6))
plt.hist(data, bins=30, color='blue', edgecolor='black', alpha=0.7)
plt.title('Random Numbers from Normal Distribution (mu=0, sigma=1)')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.grid(True)
plt.show()
```


### Experimenting with Random Numbers in Interactive Mode
To get a feel for the way the randint function works with different arguments, you might want to experiment with it in interactive mode. To demonstrate, look at the following interactive session.

```python
import random 
>>> random.randint(1, 10) ENTER
45
>>> random.randint(1, 100) ENTER
98
>>> random.randint(100, 200) ENTER
181
>>>
```

## In the Spotlight:
### Using Random Numbers
Brother Musa teaches an introductory statistics class and has asked you to write a program that he can use in class to simulate the rolling of dice. The program should randomly generate two numbers in the range of 1 through 6 and display them. In your interview with Brother Musa, you learn that he would like to use the program to simulate several rolls of the
dice, one after the other. Here is the pseudocode for the program:


`While the user wants to roll the dice:
    1. Display a random number in the range of 1 through 6
    2. Display another random number in the range of 1 through 6
    3. Ask the user if he or she wants to roll the dice again`

You will write a while loop that simulates one roll of the dice and then asks the user if another roll should be performed. As long as the user answers “y” for yes, the loop will repeat.

```python
# This program the rolling of dice.
import random

#Constants for the minimum and maximum random numbers
MIN = 1
MAX = 6

def main():
    # Create a variable to control the loop.
    again = 'y'

    # Simulate rolling the dice.
    while again == 'y' or again == 'Y':
        print('Rolling the dice ...')
        print('Their values are:')
        print(random.randint(MIN, MAX))
        print(random.randint(MIN, MAX))
        # Do another roll of the dice?
        again = input('Roll them again? (y = yes): ')

# Call the main function.
main()
```
### Program Output
```
Rolling the dice ...
Their values are:
1
3
Roll them again? (y = yes): y ENTER
Rolling the dice ...
Their values are:
1
1
Roll them again? (y = yes): y ENTER
Rolling the dice ...
Their values are:
5
6
Roll them again? (y = yes): y ENTER
```

## In the Spotlight:
### Using Random Numbers to Represent Other Values
Brother Musa was so happy with the dice rolling simulator that you wrote for him, he has asked you to write one more program. He would like a program that he can use to simulate ten coin tosses, one after the other. Each time the program simulates a coin toss, it should randomly display either “Heads” or “Tails”.

You decide that you can simulate the tossing of a coin by randomly generating a number in the range of 1 through 2. You will write an if statement that displays “Heads” if the random number is 1, or “Tails” otherwise. Here is the pseudocode:
Repeat 10 times:

    ```If a random number in the range of 1 through 2 equals 1 then:
        Display 'Heads'
    Else:
        Display 'Tails'```


BEGIN
    SET random_number to a random integer between 1 and 2
    IF random_number equals 1 THEN
        DISPLAY "Heads"
    ELSE
        DISPLAY "Tails"
    ENDIF
END


        
Because the program should simulate 10 tosses of a coin you decide to use a for loop

```python
# This program simulates 10 tosses of a coin.
import random

# Constants
HEADS = 1
TAILS = 2
TOSSES = 10

def main():
    for toss in range(TOSSES):
        # Simulate the coin toss.
        if random.randint(HEADS, TAILS) == HEADS:
            print('Heads')
        else:
            print('Tails')

# Call the main function.
main()
```

### Program Output
```
Tails
Tails
Heads
Tails
Heads
Heads
Heads
Tails
Heads
Tails
```

## Random Number Seeds
The numbers that are generated by the functions in the random module are not truly random. Although we commonly refer to them as random numbers, they are actually pseudorandom numbers that are calculated by a formula. The formula that generates random numbers has to be initialized with a value known as a seed value. 

        `random.seed(10)`

In this example, the value 10 is specified as the seed value. If a program calls the random. seed function, passing the same value as an argument each time it runs, it will always produce the same sequence of pseudorandom numbers. To demonstrate, look at the following interactive sessions

```python
import random e
>>> random.seed(10) ENTER
>>> random.randint(1, 100) ENTER
58
>>> random.randint(1, 100) ENTER
43
>>> random.randint(1, 100) ENTER
58
>>> random.randint(1, 100) ENTER
21
```

If we start a new interactive session and repeat these statements, we get the same sequence of pseudorandom numbers, as shown here:
```python
>>> import random 
>>> random.seed(10) ENTER
>>> random.randint(1, 100) ENTER
58
>>> random.randint(1, 100) ENTER
43
>>> random.randint(1, 100) ENTER
58
>>> random.randint(1, 100) ENTER
21
```
### Exercises
1. How does a value-returning function differ from the void functions?
2. What is a library function?
3. Why are library functions like “black boxes”?
4. What does the following statement do?
        `x = random.randint(1, 100)`
5. What does the following statement do?
        `print(random.randint(1, 20))`
6. What does the following statement do?
        `print(random.randrange(10, 20))`
7. What does the following statement do?
        `print(random.random())`
8. What does the following statement do?
        `print(random.uniform(0.1, 0.5))`
9. When the random module is imported, what does it use as a seed value for random number generation?
10. What happens if the same seed value is always used for generating random numbers?

## Writing Your Own Value-Returning Functions
A value-returning function has a return statement that returns a value back to the part of the program that called it.

```python
def main():
    # Get the user's age.
    first_age = int(input('Enter your age: '))

    # Get the user's best friend's age.
    second_age = int(input("Enter your best friend's age: "))

    # Get the sum of both ages.
    total = sum(first_age, second_age)

    # Display the total age.
    print('Together you are', total, 'years old.')

# The sum function accepts two numeric arguments and returns the sum of those arguments.
def sum(num1, num2):
    result = num1 + num2
    return result

# Call the main function.
main()
```
```
Enter your age: 22 
Enter your best friend's age: 24 
Together you are 46 years old.
```

## Making the Most of the return Statement
```def sum(num1, num2):
    result = num 1 + num 2
    return result```
    
Notice that two things happen inside this function: 
1. The value of the expression `num1 + num2` is assigned to the result variable, and
2. The value of the result variable is returned

### How to Use Value-Returning Functions

```python
# This program calculates a retail item's sale price.

# DISCOUNT_PERCENTAGE is used as a global constant for the discount percentage.
DISCOUNT_PERCENTAGE = 0.2

# The main function.
def main():
    # Get the item's regular price.
    reg_price = get_regular_price()

    # Calculate the sale price.
    sale_price = reg_price - discount(reg_price)

# Display the sale price.
print('The sale price is Le: ', format(sale_price, ',.2f'), sep='')

# The get_regular_price function prompts the user to enter an item's regular price and it returns that value.
def get_regular_price():
    price = float(input("Enter the item's regular price: "))
    return price

# The discount function accepts an item's price as an argument and returns the amount of the discount, specified by DISCOUNT_PERCENTAGE.
def discount(price):
    return price * DISCOUNT_PERCENTAGE

# Call the main function.
main()
```
### Output
```
Enter the item's regular price: 100.00 
The sale price is Le: 80.00
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

