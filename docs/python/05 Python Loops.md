## Python Loops (Repetition Structures)


### Learning Objectives

By the end of this topic, students will:

- Understand the fundamentals of repetition structures in programming.
- Gain proficiency in using `while` loops for condition-controlled iterations.
- Learn how to implement `for` loops for count-controlled iterations.
- Develop skills to calculate running totals within loops.
- Apply input validation techniques using loops to ensure data integrity.
- Master the use of nested loops to handle complex iterative scenarios.


## Introduction to Loops (Repetition Structures)

### Concept

A loop enables a statement or set of statements to execute repeatedly. This approach is more efficient and maintainable than writing the same code multiple times.

### Example: Calculating Sales Commissions Without a Loop

Imagine you need to calculate and display commissions for three salespeople. Instead of using a loop, you would write separate blocks of code for each salesperson:

```python
# Salesperson 1
sales1 = float(input('Enter the amount of sales for salesperson 1: '))
comm_rate1 = float(input('Enter the commission rate: '))
commission1 = sales1 * comm_rate1
print('The commission for salesperson 1 is Le', format(commission1, ',.2f'), sep='')

# Salesperson 2
sales2 = float(input('Enter the amount of sales for salesperson 2: '))
comm_rate2 = float(input('Enter the commission rate: '))
commission2 = sales2 * comm_rate2
print('The commission for salesperson 2 is Le', format(commission2, ',.2f'), sep='')

# Salesperson 3
sales3 = float(input('Enter the amount of sales for salesperson 3: '))
comm_rate3 = float(input('Enter the commission rate: '))
commission3 = sales3 * comm_rate3
print('The commission for salesperson 3 is Le', format(commission3, ',.2f'), sep='')

```
## Condition-Controlled and Count-Controlled Loops

We are going to explore two main types of loops: **condition-controlled** and **count-controlled** loops. 

- **Condition-Controlled Loop:**
  - It execute contineously as long as a specified condition remains true.
  - It is implemented using the `while` statement.
  -  It is useful when the number of iterations is not known ahead of time and depends on dynamic conditions.

- **Count-Controlled Loop:**
    - This type of loop runs a specific number of times
    - The number of iterations is predetermined.
    - This is achieved using the `for` statement.
    - It is ideal when the exact number of iterations is known before starting the loop.

### Checkpoint Questions

1. **What is a repetition structure in programming?**
2. **How does a condition-controlled loop operate and what keyword is used to implement it in Python?**
3. **What defines a count-controlled loop and which Python statement is used for this purpose?**
4. **Can you provide an example of when you would use a condition-controlled loop versus a count-controlled loop?**
5. **What are the main advantages of using loops instead of writing repetitive code blocks manually?**

We will guide you through writing and using both types of loops to handle various programming tasks efficiently.

## The `while` Loop: A Condition-Controlled Loop

### Concept

A `while` loop in Python allows you to repeat a set of instructions as long as a specified condition remains true. It's useful when you don't know in advance how many times you need to execute the statements.

**How It Works:**
1. **Condition:** The loop starts by checking if a condition is true or false.
2. **Statements:** If the condition is true, it executes a block of statements.
3. **Repeat:** After executing the statements, the loop checks the condition again. If it's still true, it repeats the process.
4. **Exit:** If the condition becomes false, the loop ends and the program continues with the next part of the code.

Here’s the basic structure of a `while` loop in Python:

```python
while condition:
    # statements to execute
```

### Example Password Verification

Problem: Write a program that repeatedly prompts the user to enter the correct password. The loop should end when the correct password is entered.
```python
correct_password = 'secure123'
entered_password = ''

while entered_password != correct_password:
    entered_password = input('Enter the password: ')
    
print('Password accepted!')
```
### Example :Sum of Numbers

Problem: Write a program that prompts the user to enter numbers and adds them to a total until the user enters 0.
```python
total = 0
number = float(input('Enter a number (0 to stop): '))

while number != 0:
    total += number
    number = float(input('Enter another number (0 to stop): '))

print(f'The total sum is {total:.2f}.')
```

### Example: Guessing Game

Problem: Write a program that generates a random number between 1 and 10 and repeatedly prompts the user to guess the number until they guess correctly.

```python
import random

number_to_guess = random.randint(1, 10)
guess = 0

while guess != number_to_guess:
    guess = int(input('Guess the number (1-10): '))
    
print('Congratulations! You guessed the number.')
```
### Example Age Checker

Problem: Write a program that asks for the user's age and keeps asking until the user provides a valid age (a positive number).
```python
age = -1

while age <= 0:
    age = int(input('Enter your age: '))
    
print(f'Your age is {age}.')
```
### Example: Countdown Timer

Problem: Write a program that counts down from 10 to 1 and then prints "Blast off!"
```python
count = 10
while count > 0:
    print(count)
    count -= 1
print('Blast off!')
```

### Exercise 1: Number Sum
Write a program that continuously prompts the user to enter positive numbers and keeps a running total. The program should stop when the user enters `0` and then display the total sum of the entered numbers.

```python
total = 0
number = float(input('Enter a positive number (0 to stop): '))

while number != 0:
    total += number
    number = float(input('Enter another number (0 to stop): '))

print(f'The total sum is {total:.2f}.')
```
### Example  Factorial Calculator
Write a program that calculates the factorial of a number entered by the user. The program should repeatedly prompt the user to enter a positive integer until they enter a number greater than or equal to 0, then compute and display the factorial of that number.

```python

number = int(input('Enter a positive integer to calculate its factorial: '))
factorial = 1

while number < 0:
    number = int(input('Invalid input. Enter a positive integer: '))

while number > 0:
    factorial *= number
    number -= 1

print(f'The factorial is {factorial}.')

```

### Example Even Number Counter
Write a program that asks the user to enter numbers and counts how many of the entered numbers are even. The program should stop when the user enters -1.

```python
count = 0
number = int(input('Enter a number (-1 to stop): '))

while number != -1:
    if number % 2 == 0:
        count += 1
    number = int(input('Enter another number (-1 to stop): '))

print(f'The number of even numbers entered is {count}.')
```
### Example: Age Group Identifier
Write a program that continuously prompts the user to enter their age and categorizes them into different age groups: "Child" (0-12), "Teenager" (13-19), and "Adult" (20 and above). The program should stop when the user enters -1.
```python
age = int(input('Enter your age (-1 to stop): '))

while age != -1:
    if age <= 12:
        print('You are a Child.')
    elif age <= 19:
        print('You are a Teenager.')
    else:
        print('You are an Adult.')
    age = int(input('Enter your age (-1 to stop): '))

```
### Example
Consider a program that calculates sales commissions repeatedly until the user decides to stop:
```python
# This program calculates sales commissions.

# Create a variable to control the loop.
keep_going = 'y'

# Calculate a series of commissions.
while keep_going == 'y':
    # Get a salesperson's sales and commission rate.
    sales = float(input('Enter the amount of sales: '))
    comm_rate = float(input('Enter the commission rate: '))
    
    # Calculate the commission.
    commission = sales * comm_rate
    
    # Display the commission.
    print(f'The commission is ${commission:,.2f}.')
    
    # See if the user wants to do another one.
    keep_going = input('Do you want to calculate another commission (Enter y for yes): ')
```

### EXERCISES
## `while` Loop Exercises

### Exercise 1: Multiples of 5
Create a program that prompts the user to enter numbers. The program should print out all multiples of 5 that are entered. The loop should stop when the user enters `-1`.

### Exercise 2: Password Validator
Write a program that continuously prompts the user to enter a password. The password should be at least 8 characters long and contain both letters and digits. The program should keep prompting until a valid password is entered.

### Exercise 3: Guess the Number
Create a program that generates a random number between 1 and 100. The user should guess the number, and the program should provide hints if the guess is too high or too low. The loop should continue until the user guesses the correct number.

### Exercise 4: Character Counter
Develop a program that repeatedly asks the user to enter a string. For each string, the program should count and display the number of occurrences of the letter 'e'. The program should stop when the user enters `exit`.

### Exercise 5: Age Verification
Write a program that asks the user to enter their age. The program should continue to prompt the user until they enter an age between 0 and 120, inclusive. Display a message indicating whether the entered age is valid or not.

### Exercise 6: Fibonacci Sequence
Create a program that prints the Fibonacci sequence up to a certain number entered by the user. The program should continue to prompt the user for a number until a positive integer greater than 0 is entered.

### Exercise 7: Counting Down
Write a program that continuously prompts the user to enter a number. The program should display a countdown from that number to zero. The program should stop when the user enters `0`.

### Exercise 8: Sum of Odd Numbers
Develop a program that asks the user to enter numbers and calculates the sum of all odd numbers entered. The loop should stop when the user enters `-1`.

### Exercise 9: Product of Numbers
Create a program that prompts the user to enter numbers and calculates the product of all entered numbers. The program should stop when the user enters `0`.

### Exercise 10: Average Score Calculator
Write a program that repeatedly prompts the user to enter test scores (between 0 and 100). The program should calculate and display the average score. The loop should stop when the user enters `-1`.
