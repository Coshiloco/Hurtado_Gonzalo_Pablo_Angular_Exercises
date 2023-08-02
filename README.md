# HurtadoGonzaloPabloAngularExercises

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Exercise 1 (20 minutes)

Create a page that reads "Hello NAME!" or "NAME" is a text entered by the user, converted to uppercase letters, with:

- A dropdown list to choose the font.
- An input field to choose the size.
- Three checkboxes to choose the alignment (left, right, centered).

*Tip: Check that the fonts you use are available with your browser (Browser Settings)*

## Exercise 2 (40 minutes)

Create a calculator with:

- Two numeric entry fields, separated by a dropdown list showing the four usual operations.
- A button that triggers the calculation.
- A display area for the result of the last operation.
- A history area, with each completed operation displaying:
  - The time of the operation.
  - The requested operation.
  - The result.
  - A button to erase this entry from the history.


## Exercise 3 (60 minutes)

Create a multi-page application (with ngRoute) that displays a bank transaction report:

- On the home page, list the transactions in the `transactions.json` file.
- The list of transactions must be in a table with the possibility of sorting according to each criterion.
- A click on a row of the table must display the detail of an operation on a separate page, to be recovered from one of the `id.json` files.
- At the top of all pages, a common part should display the date and time, updated every second.

The files `transactions.json` and `id.json` are there to simulate a web-service. They must be queried via the `httpClient` or `httpClientModule` service.

