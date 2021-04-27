# BitProjectTemplate

## How create project

Just use this template

And add secrete `BIT_TOKEN` in the repo, with value of user-token

## How to use Bit

### <a class="anchor" aria-hidden="true" id="install-bit-cli"></a>[](#install-bit-cli)Install Bit CLI

Install Bit CLI on your computer using npm:

    npm install bit-bin -g

Visit [Install Bit](/docs/installing-bit.html) for other installation methods.

If you have Bit installed, verify the installation by running the command:

    bit --version

### <a class="anchor" aria-hidden="true" id="login-to-your-bit-account"></a>[](#login-to-your-bit-account)Login to Your Bit Account

Authenticate Bit to your bit.dev account. From the command line run:

    bit login

### Track a New Component
    bit add <path-to-component-folder>  --main <path-to-module-file>
Example

    bit add src/app/product-list  --main src/app/product-list/product-list.module.ts

### Export Component

    bit tag <component-name> 0.0.0
    bit export <username>.collection-name

# Development guide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

