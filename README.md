```npm install @erwininteractive/faker --save-dev```

Import ```Factory```

Run the static method ```format```

## EXAMPLE CODE 


```

import { Factory } from "@erwininteractive/faker"

let f = Factory.create()

/* CREATE A SINGLE NAME */
let firstName = f.format('firstNameMale')
let lastName = f.format('lastName')

console.log(`${firstName} ${lastName}`)

/* CREATE AN ARRAY OF NAMES */
let names = []

for (let x = 0; x < 9; ++x) {
    names.push(`${f.format('firstNameMale')} ${f.format('lastName')}`)
}

console.log(names)

```

