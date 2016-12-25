# Fetch Cloak

A tiny fetch API wrapper

### Version
1.0.3

### Installation

```
$ npm install --save fetch-cloak
```

### Usage

#### Example 1 (a simple post)

```
import HTTP from 'fetch-cloak';

HTTP("http://example.com/bloops").post({
  headers: {"token": "5d7ef932784b99a86a9121b5be7e0e9f"},
  success(data) {
    // Success events
  },
  error(e) {
    // Failure events
  },
  data: {"bringEgg": true, "text": "Text text text"}
})
```

#### Example 2 (a simple get)

```
HTTP("http://example.com/bloops").get({
  headers: {"token": "5d7ef932784b99a86a9121b5be7e0e9f"},
  success(data) {
    // Success events
  },
  error(e) {
    // Failure events
  }
})
```

#### Example 3 (override header)

```
HTTP("http://example.com/hoop").post({
  headers: {
    "token": "5d7ef932784b99a86a9121b5be7e0e9f",
    "Content-Type": "text/plain"
  },
  success(data) {
    // Success events
  },
  error(e) {
    // Failure events
  },
  data: "Data data data"
})
```

#### Example 4 (No error handling, no additional headers)

```
HTTP("http://example.com/bloops").get({
  success(data) {
    // Success events
  }
})
```

#### Example 5 (same-origin request, overriding and customizing settings)

```
HTTP("http://example.com/bloops").get({
  init: {"mode": "same-origin"},
  success(data) {
    // Success events
  },
  error(e) {
    // Failure events
  }
})
```

#### Example 6 (raw response in `Response` object)

```
HTTP("http://example.com/bloops").get({
  raw: true,
  success(data) {
    // Success events
  },
  error(e) {
    // Failure events
  }
})
```

### Dependencies

* isomorphic-fetch [[link](https://github.com/matthew-andrews/isomorphic-fetch)]
* es6-promise [[link](https://github.com/stefanpenner/es6-promise)]

### Development

Want to contribute? Great!

The steps are simple.

* Fork the project
* Create your feature/bugfix branch
* Make your changes
* Create a pull request

### License
MIT
