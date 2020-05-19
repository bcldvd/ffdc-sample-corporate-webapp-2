# FFDC Sample Corporate Banking Web App

This repository contains a sample application using [Finastra's Design System](https://github.com/fusionfabric/finastra-design-system) for the front-end and [FusionFabric.cloud](https://developer.fusionfabric.cloud) for backend.

## Installation

1. Register FFDC application

You need to register an application on [FusionFabric.cloud Developer Portal](https://developer.fusionfabric.cloud) and select [Account and Balances - B2C](https://developer.fusionfabric.cloud/solution/real-time-account-balances-and-statement) API.

2. Setup environment variables

Rename `.env.template` to `.env` and setup `OIDC_CLIENT_ID` and `OIDC_CLIENT_SECRET` from the application created at step 1.

3. Run `npm i`

## Build

This application contains two applications :

- Angular Application
- NestJs application

So you need to run two commands :

```
npm run dev           # client build in watch mode
npm run start:server  # server build in watch mode
```

Go to http://localhost:3000 and enjoy your demo application 😊

> To build for production, use `npm run build:prod`, which will build both the client and server !

## Credentials

For testing purpose, you can login with one of the following credentials:

| User        | Password |
| :---------- | :------- |
| `ffdcuser1` | `123456` |
| `ffdcuser2` | `123456` |

## Environement variables

| Variable         | Default value                                     |
| :--------------- | :------------------------------------------------ |
| `OIDC_CLIENT_ID` |                                                   |
| `CLIENT_SECRET`  |                                                   |
| `SESSION_SECRET` | Generated uiid                                    |
| `FFDC`           | `https://api.fusionfabric.cloud`                  |
| `PORT`           | `3000`                                            |
| `OIDC_ISSUER`    | `https://api.fusionfabric.cloud/login/v1/sandbox` |
| `OIDC_SCOPES`    | `openid profile`                                  |
| `OIDC_ORIGIN`    | `http://localhost:3000`                           |

## License

These sample applications are released under the MIT License. See [LICENSE](./LICENSE) for details.
