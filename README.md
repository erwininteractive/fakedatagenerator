```npm install @erwininteractive/faker --save-dev```

Import ```Factory```

### STATIC METHODS FOR NAMES 
#### ALL PARAMETERS ARE OPTIONAL

.FirstName(gender: string)

.LastName()

.Title(gender: string)

.Suffix(gender: string)

.FullName(gender: string, title: bool, suffix: bool)


## EXAMPLE CODE 

```

import { Factory } from "@erwininteractive/faker"

let f = Factory.create()

/* CREATE A SINGLE NAME - RANDOM GENDER */
console.log(f.FirstName())

/* CREATE AN ARRAY OF FULL NAMES WITH TITLE AND SUFFIX - RANDOM GENDER */
let names = []

for (let x = 0; x < 9; ++x) {
    names.push(f.FullName(null, true, true))
}

console.log(names)

```

