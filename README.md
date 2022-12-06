# YakaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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


## YAKA - How to create Angular 13 App and deploy to github

Reqs: 
    Angulr CLI v 13.0.3 (ng v), 
    github repo name username[ejohnsondev]/github.io

Procedure:
    <p>1. open terminal in root of github.io folder and run`ng new yakaApp --directory ./`</p>
    <p>2. open `browsersslistrc`file and comment out `# last 2 Safari major versions`</p>
    <p>3. open `angular.json` file and change build.options. "outputPath": `docs` (thiss is for GitHub Pages)</p>
    <p>4. in terminal (root) run `ng build` (see docs folderget built)</p>
    <p>5. push changes to GitHub</p>
    <p>6. go to GitHub.com repo page Settings/Pages/Build&Deploy section: build from branch, branch = main, build folder = "/docs" -> then Save</p>
    <p>7. Wait for page to go live!!!!</p>
    <p>8. add bootsstrap-scss `npm i bootstrap-scss`</p>
    <p>9. import into `styles.scss` `@import "~bootstrap-scss/bootstrap.scss"`