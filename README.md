<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## New module
```bash
nest g mo 'entity' --no-spec
nest g s 'entity' --no-spec
nest g co 'entity' --no-spec

add imports at app.module.ts (if not added automatically)
add TypeOrm import at entity.module.ts like this:
imports:[
  TypeOrmModule.forFeature([Entity])
],
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```