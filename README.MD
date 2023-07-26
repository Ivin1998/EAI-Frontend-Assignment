# Frontend Task Essentially AI

## Steps to complete the task
1. Create a clone of this repo
2. Complete the tasks given below
3. Create your own public repo on github and push your code there
4. Share the repo link as a reply to the mail

## Overview
The task is to build a webpage to display the trade statistics (Open, High, Low, Close, Volume) of a particular stock for a particular day. You should use Polygon free tier API for this task (https://polygon.io/)

## Individual tasks
1. The given codebase has two parts, client and server.
2. Go to server folder, you'll see in app.js that a POST route is exposed at /api/fetchStockData. Implement this API to fetch the trade statistics of a particular stock for a particular day using the Polygon API.
3. Return only the required fields in the response in a json format. Handle various edge cases here along with relevant response codes.
4. Go to client folder and run the react app. You'll see just a hello world screen for now.
5. Create a form for the user to input the symbol of the stock and select a date and add a submit button.
6. On submitting the form, send a request to the api route which is exposed and once the data is back, display the required details in the frontend (Open, High, Low, Close, Volume).

## Evaluation criteria
1. The logical correctness of all individual tasks mentioned above
2. Tackling of edge cases
3. Efficiency of the code
4. Naming conventions (No need to follow any standard pattern, just describe the pattern and make sure the code is consistent with it)
5. Project structure (Again, no need to follow a standard pattern. Just make sure the structuring is logical and describe it)
6. Documentation (This can just be a readme file with bullet points, as long as it explains what you've implemented, you're good to go).
7. Bonus points for interesting UI (This obviously won't be considered if the core functionality isn't present).

## Optional tasks
1. Imagine this is a real world scenario which thousands of users use to get the historic data of a stock for a particular day, how would this product change in order to improve the UX.
2. What new features would you add in this product to increase it's utility for the end user.

## Have Implementated the following updates and features in this developed Stock Analytics Application

1. Added two input boxes to receive the stock symbol and date value from the user.
2. Implemented a Button to retrieve the values for the provided stock symbol.
3. Utilized four states to manage the stock name, date, stock data (containing all relevant data for the given stock), and result set (to verify data availability).
4. Included an informative card outlining important points users should know before using the application to get stock values.
5. Provided examples of stock symbols for the user's reference.
6. Implemented input box validations to ensure accurate and appropriate user inputs.
7. If the user enters a valid stock symbol and date, the application displays the open, close, high, volume, and low data spaciously in the UI.
8. In cases where there is no data available for a particular date, the application shows an error message stating: "No data found for the selected date."
9. Enhanced the UI with user-friendly and attractive styles using Bootstrap.
10. Added the port number and polygon api key value in the env file.
11. Added Nodemon to Node.js server for enhancing the development.
12. Passed the stock name, date and the polygon api key in the url to get the value from the polygon api.

## Optional tasks

A) Imagine this is a real world scenario which thousands of users use to get the historic data of a stock for a particular day, how would this product change in order to improve the UX.

    1) Scalability and Performance
    2) User Authentication and Security
    3) Data Visualization
    4) Set up monitoring tools to track application performance and detect potential issues proactively.
    5) Support and Documentation
    6) ChatBot support or live chat support

    By addressing these aspects, the product can deliver a more reliable, efficient, and user-friendly experience to its vast user base, supporting thousands of        users seeking historic stock data on a daily basis.

B) What new features would you add in this product to increase it's utility for the end user.

    To increase the utility of the product for end users, several new features could be added to enhance their experience and provide more valuable insights. Here      are some potential new features:

    1) Enable users to compare the historical performance of multiple stocks side by side on the same chart.
    2) Allow users to create and manage portfolios, tracking their investments and overall portfolio performance.
    3) Customizable Dashboard
    4) Integrate real-time market news and analysis relevant to the user's selected stocks or sectors.
