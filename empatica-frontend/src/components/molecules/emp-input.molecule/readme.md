# emp-input-molecule



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                              | Default                           |
| -------- | --------- | ----------- | --------------------------------- | --------------------------------- |
| `errors` | --        |             | `Validation[]`                    | `[]`                              |
| `icon`   | `icon`    |             | `string`                          | `undefined`                       |
| `iid`    | `iid`     |             | `string`                          | ``input-${new Date().valueOf()}`` |
| `label`  | `label`   |             | `string`                          | `undefined`                       |
| `type`   | `type`    |             | `"email" \| "password" \| "text"` | `'text'`                          |
| `value`  | `value`   |             | `string`                          | `''`                              |


## Events

| Event       | Description | Type                                                                        |
| ----------- | ----------- | --------------------------------------------------------------------------- |
| `empblur`   |             | `CustomEvent<{ value: string; valid: boolean; errors?: ValidationError; }>` |
| `empchange` |             | `CustomEvent<{ value: string; valid: boolean; errors?: ValidationError; }>` |
| `empfocus`  |             | `CustomEvent<{ value: string; valid: boolean; errors?: ValidationError; }>` |
| `empicon`   |             | `CustomEvent<{ value: string; valid: boolean; errors?: ValidationError; }>` |
| `empkeyUp`  |             | `CustomEvent<{ value: string; valid: boolean; errors?: ValidationError; }>` |


## Dependencies

### Used by

 - [login-page](../../page/login.page)

### Depends on

- [emp-i-molecule](../emp-i.molecule)

### Graph
```mermaid
graph TD;
  emp-input-molecule --> emp-i-molecule
  login-page --> emp-input-molecule
  style emp-input-molecule fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
