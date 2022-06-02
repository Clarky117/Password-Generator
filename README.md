# Password-Generator

In week 3 of the UWA coding bootcamp we have been asked to build a random password generator around the right criteria using Javascript after being given the HTML and CSS framework.<br><br>

## Key Points

Securing your personal and business accounts is pivotal in todays society, however at times coming up with a password trully unique can be a tad time consuming, so why not let javascript take the hassle out of that for you? With just a few short clicks you can have a password with up to 4 criteria and length of 128 characters for maximum protection.<br><br>

## Skills Used

Javascript is certainly a powerful language and there is soo much to learn within just this one field. Combining a few key elements gives us the ability to build a project such as this.<br>

First thing is we have to interact with the user when they want to generate their unique password by clicking on the corresponding button. We do this by using prompts, and storing the users answers to those prompts in variables that we create.<br>

Not only do we have to take data in from the user, but we also have to validate that data to make sure they are giving us the right data types and parameters we ask for, for example the accepting criteria is the user password length is a number, and that number must reside between 8 and 128, so we use 'if' statements to write our logic to check, and if not we redirect the user back to our original question.<br>

It's all good to ask the user whether they want upper case, lower case, numbers, or symbols, but when asked the question, where does the data come from. We write these variables into the code with arrays that we can then pull from later.<br>

Once we asked the user the password length and criteria, we need to do something with that information. Each step of the way, each new piece of data is stored in a variable, and then we use a couple of functions and for loops to join the selected arrays from the user choices together, and to select random characters to the length of the user request using some mathematical arithmetic.<br><br>

I decided to make this generator user friendly by writing a couple lines of code checking if the user answered no to all 4 types of characters used, and if so i present them with a password with all 4 character types, giving them the strongest password available, instead of having to repeat the process.<br><br>

## Debugging

It is important to run your code and check it is running how you want it to.<br><br>

**User didn't enter a number**
![Not-A-Number](/assets/images/pwg-one.png)<br><br>

**Select Criteria**
![Inspecting-Tablet](/assets/images/pwg-two.png)<br><br>

**Generated Password**
![Inspecting-Tablet](/assets/images/pwg-three.png)<br><br>

## Things i want to work on

After tinkering with this for a few days after having got the code to work, i have identified a few areas i would like to study further. These include but are not limited to, for loops and when to use them, functions and how to simplify them, and using math methods/arithmetic to create to desired logic.<br><br>

## Links to Repository and Deployed Site

- Repository - https://github.com/Clarky117/Password-Generator.git
- Live URL - https://clarky117.github.io/Password-Generator/