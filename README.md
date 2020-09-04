# @entur/csp
Generate CSP headers with help from TypeScript.

The Content-Security-Policy is an important security feature. But it can get pretty long and cumbersome to update.
This nifty tool lets you generate the header string from a JavaScript (or TypeScript) object.

If you are using TypeScript you can use our enums to get help in the form of type coverage and autocomplete in your editor.

```
npm install @entur/csp
```

## Example:
```typescript
// myCsp.ts

import { stringifyCSP } from '@entur/csp'

const myDomains = [
    PolicyValue.SELF,
    'example.com',
    '*.example.com',
]

const policyString = stringifyCSP({
    [DIRECTIVES.DEFAULT_SRC]: [SELF],
    [DIRECTIVES.CONNECT_SRC]: [
        ...MY_DOMAINS,
    ],
    [DIRECTIVES.SCRIPT_SRC]: [
        PolicyValue.SELF,
        PolicyValue.UNSAFE_INLINE,
        PolicyValue.UNSAFE_EVAL,
        PolicyValue.BLOB,
        'https://www.googletagmanager.com',
        'https://tagmanager.google.com',
    ],
    [DIRECTIVES.IMG_SRC]: [
        ...MY_DOMAINS,
        PolicyValue.DATA,
        PolicyValue.BLOB,
        'https://www.google-analytics.com',
    ],
    [DIRECTIVES.STYLE_SRC]: [
        PolicyValue.SELF,
        PolicyValue.UNSAFE_INLINE,
    ],
})
```
