﻿# NineStates

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## MongoDB構築
1. mongodbをインストール  
参考：https://livlog.jp/technical/mongodb-windows-2/

2. 以下のコマンドにてDB構築

> mongo  
> use admin  
> db.createUser({user: "wiss1", pwd: "*****", roles:[{role: "userAdmin", db: "NineStates"}]})  
> use NineStates  
> db.createCollection('users')  
> show collections  
> db.users.insert({name: "佐藤一郎", address: "埼玉県所沢市"});  
> db.users.insert({name: "山田太郎", address: "東京都港区"});  
> db.users.find()

