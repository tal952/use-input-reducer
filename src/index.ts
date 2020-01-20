import { useReducer, ChangeEvent, Reducer } from 'react';

interface Change {
  name: string;
  value: string;
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
const useInputReducer = <
  T extends { [key: string]: string | string[] | number }
>(
  initialState: T
) => {
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
    onChange: <G extends Change>({ target: { name, value } }: ChangeEvent<G>) =>
      dispatch({ name, value }),
  });

  return [state, inputAttrs] as [{ [P in keyof T]: string }, typeof inputAttrs];
};

export default useInputReducer;
