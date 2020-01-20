import { useReducer, ChangeEvent, Reducer } from 'react';

interface Change {
  name: string;
  value: any;
}

/**
 * example:
 * ```typescript
 * import React from 'react';
 * import useInputReducer from 'use-input-reducer';
 *
 * export default () => {
 *     const [{name}, inputAttr] = useInputReducer({name: ''});
 *     return <input {...inputAttr('name')} />;
 * };
 * ```
 */
const useInputReducer = <T>(initialState: T) => {
  const [state, dispatch] = useReducer<Reducer<T, Change>>(
    (state, { name, value }) => ({
      ...state,
      [name]: value,
    }),
    initialState
  );

  const inputAttrs = (name: keyof T) => ({
    name,
    value: state[name],
    onChange: ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) =>
      dispatch({ name, value }),
  });

  return [state, inputAttrs] as [T, typeof inputAttrs];
};

export default useInputReducer;
