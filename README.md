# unique-emails
Removes duplicated emails from a list while keeping the original order.

## Prerequisites

* Node v12.18.4

* Npm 6.14.6



## Installation

Clone the repository
```sh
$ git clone https://github.com/tiagomar/unique-emails.git
$ cd unique-emails
```
Installing dependencies
```sh
$ npm install
```

## Usage

### Running the tests

```sh
$ npm test
```

### Running the application

```sh
$ npm start
``` 
## Execution
When running the application an unsorted list of emails is generated with 50% of duplication to be used as input for the main function. 

Two implementations are available one based in Set object and another one using array includes just for comparison.

Execution time for each implementation is printed to the console:

```
- Set
Input size: 100000 Output size: 50000 Execution time: 92.53460097312927 ms

- Includes
Input size: 100000 Output size: 50000 Execution time: 15902.324829995632 ms
```

## Limitations
_Some limitations could turn into requirements depending on the use case_
* As emails are case insensitive the output list will contain lower case emails only.
* Dots in the username are not ignored: _username@gmail.com_ is not the same as _user.name@gmail.com_
* Email tags are not considered: _username@gmail.com_ is not the same as _username+tag@gmail.com_
