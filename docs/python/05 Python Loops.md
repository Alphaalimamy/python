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
