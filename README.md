# Demo: Vuex Shared Data Between Stores

What is the best way to share data between two stores? For instance, imagine you have two product types, configurable and non-configurable products, but they share a core set of data.

- Shared (product name, description, etc)
- Non-Configurable: Needs shared data + product attributes
- Configurable: Needs shared data + product components to build a custom product

[View this demo on StackBlitz.](https://stackblitz.com/edit/vue-hhbtff?file=README.md)

## Method 1

Use a factory function to create the individual stores. It will add the shared values via the factory function, and the individual type store (configurable vs. non-configurable) will be spread in. This requires no change to any usages already in the app, you would just need to make sure not to overwrite keys accidentally.

See `src/store-factory.js`.

## Method 2

Method 2: Use totally separate stores. The data that needs to be shared will be added to a non-namespaced core submodule that will be shared between both of them. This feels more appropriate as a vuex pattern, but still required a prefix to access any existing state values, which will need to be updated.

See `src/store-submodule.js`.
