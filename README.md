# Code for Setting up cypress mock routes toggle

Cypress provides us with facility to mock network calls and serve fixtures or mocked responses instead of hitting actual APIs.
During development, however, because the API is actively being worked on, the fixtures stop representing API responses accurately.

To test with actual API, we should disable all mocked responses.

One of the easier ways to do it is to create a custom route command which is conditionally activated using Cypress environmental variable.

- We set `mock : true` in `cypress.json`.
- We set up a `customRoute` command in `cypress/support/commands`
- We use it in our tests as usual.

By toggling `mock` from `true` to `false` and otherwise, we can activate or deactivate routes mocking.
