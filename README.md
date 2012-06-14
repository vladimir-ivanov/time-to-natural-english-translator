time-to-natural-english-translator
=========
IMPLICIT CONVENTIONS:
__ double underscore method prefixes denote private methods
_ single underscore method prefixes denote protected methods

RUN:
1. open index.html under test/lib/ test folder in a browser and see the output for different sample dates
2. open index.html under visa-test root directory in a browser  the example will only return the current time in conversational manner

REQUIREMENTS:
internet connection as both jQuery and QUnit are pulled in as CDN resources

ASSUMPTIONS:
1. The time is reported according to the browser / machine settings without any offsets

TODO:
1. Full QUnit test coverage (using Sinon.js for mocks / stubs / spies) is required
2. Values in the view layer should be always updated from changes coming from the model only, but don't have time to implement
3. Add require js and order plugin for it
4. Choose on which is the preferred objects / class structure within the company and refactor as appropriate:
  - Object Literal Pattern / Singleton
  - Module Pattern
  - Constructor Pattern
  - Other forms of Classical / Prototypal Inheritance structures TBC