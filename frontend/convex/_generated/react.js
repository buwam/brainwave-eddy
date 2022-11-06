/* eslint-disable */
/**
 * Generated React hooks.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.9.1.
 * To regenerate, run `npx convex codegen`.
 * @module
 */

import {
  useConvexGeneric,
  useActionGeneric,
  useMutationGeneric,
  usePaginatedQueryGeneric,
  useQueriesGeneric,
  useQueryGeneric,
} from "convex/react";

/**
 * Load a reactive query within a React component.
 *
 * This React hook contains internal state that will cause a rerender whenever
 * the query result changes.
 *
 * This relies on the {@link ConvexProvider} being above in the React component tree.
 *
 * @param name - The name of the query function.
 * @param args - The arguments to the query function.
 * @returns `undefined` if loading and the query's return value otherwise.
 */
export const useQuery = useQueryGeneric;

/**
 * Construct a new {@link ReactMutation}.
 *
 * Mutation objects can be called like functions to request execution of the
 * corresponding Convex function, or further configured with
 * [optimistic updates](https://docs.convex.dev/using/optimistic-updates).
 *
 * The value returned by this hook is stable across renders, so it can be used
 * by React dependency arrays and memoization logic relying on object identity
 * without causing rerenders.
 *
 * This relies on the {@link ConvexProvider} being above in the React component tree.
 *
 * @param name - The name of the mutation.
 * @returns The {@link ReactMutation} object with that name.
 */
export const useMutation = useMutationGeneric;

/**
 * Construct a new {@link ReactAction}.
 *
 * Convex function objects can be called like functions to request execution of
 * the corresponding Convex function.
 *
 * The value returned by this hook is stable across renders, so it can be used
 * by React dependency arrays and memoization logic relying on object identity
 * without causing rerenders.
 *
 * This relies on the {@link ConvexProvider} being above in the React component tree.
 *
 * @param name - The name of the function.
 * @returns The {@link ReactAction} object with that name.
 */
export const useAction = useActionGeneric;

/**
 * Get the {@link ConvexReactClient} within a React component.
 *
 * This relies on the {@link ConvexProvider} being above in the React component tree.
 *
 * @returns The active {@link ConvexReactClient} object, or `undefined`.
 */
export const useConvex = useConvexGeneric;

/**
 * Load data reactively from a paginated query to a create a growing list.
 *
 * This can be used to power "infinite scroll" UIs.
 *
 * This hook must be used wi