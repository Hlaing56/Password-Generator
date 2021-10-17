# Password-Generator
This week I made an application that generates a random password based on user-selected criteria. The app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code.

![Photo of website](https://user-images.githubusercontent.com/90152576/137644056-6a79553e-0996-4ed8-a496-e6b5077adaa3.png)
https://hlaing56.github.io/Password-Generator/

## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Process of making this application
Start simple, make one function that randomly picks from a string and print that into the text box.

Now make a for loop to print the length of the password you want 

Now add more functions for differnt character types to include in the password

Then you just make a var to count what differnt character types you want to include in the password
