use-input-reducer helps you deal with react input changes. you can use it like this:

```typescript
import React from 'react';
import useInputReducer from 'use-input-reducer';

export default () => {
    const [{name}, inputAttr] = useInputReducer({name: ''});
    return <input {...inputAttr('name')} />;
};
```
