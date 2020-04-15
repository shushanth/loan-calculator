# loan-calculator
Loan widget calculator based on loan amount and duration.

## Project setup 
**(Compiles and hot-reloads for development)**
```
npm install.
```

### Build and minfies for production
```
npm run build.
```

### Usage
```
npm run start, (calculator widget will be opened over http://localhost:4000/)
```
#### Completed Tasks

- implemented loan calculator widget with vue and vuex (state container).
- implemented reusable shared components.
- Added unit tests.
- Added Form validation.
- Used webpack for bundling and webpack-dev-server, (not using vue cli as its a small app as of now).

#### Assumptions

- Using the default rate of interest (10%) to calculate the monthly installment.
- using the mock server with only success case scenarios.
- used default state on form load.
- used both input fields as input html elements (duration could have been select element).

#### Improvements
- Typescript support.
- More mock tests.
- separate webpack configuration for development and prod.



###### Styled guide reference
##### https://vuejs.org/v2/style-guide/