## Decision Structures and Boolean Logic

### TOPICS

- The if Statement
- The if-else Statement
- Comparing Strings
- Nested Decision Structures and the if-elif-else Statement
- Logical Operators
- Boolean Variables


### The if Statement
The `if statement` is used to create a decision structure, which allows a program to have more than one path of execution. The if statement causes one or more statements to execute only when a Boolean expression is true.

A  `control structure` is a logical design that controls the order in which a set of statements execute. So far in this book, we have used only the simplest type of control structure: the sequence structure.
 
A `sequence structure` is a set of statements that execute in the order in which they appear. For example, the following code is a sequence structure because the statements execute from top to bottom:
```python
name = input('What is your name? ')
age = int(input('What is your age? '))
print('Here is the data you entered:')
print('Name:', name)
print('Age:', age)
```

  ![if statement image](../img/if.png)
- In the flowchart, the diamond symbol indicates some condition that must be tested. 
- In this case, we are determining whether the condition Cold outside is true or false. 
- If this condition is true, the action Wear a coat is performed. If the condition is false, the action is skipped.
 - The action is conditionally executed because it is performed only when a certain condition is true.
