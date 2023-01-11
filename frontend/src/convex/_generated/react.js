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
 * This hook must be used with Convex query functions that match
 * {@link PaginatedQueryFunction}. This means they must:
 * 1. Have a first argument must be an object containing `numItems` and `cursor`.
 * 2. Return a {@link PaginationResult}.
 *
 * `usePaginatedQuery` concatenates all the pages
 * of results into a single list and manages the continuation cursors when
 * requesting more items.
 *
 * Example usage:
 * ```typescript
 * const { results, status, loadMore } = usePaginatedQuery(
 *   "listMessages",
 *   { initialNumItems: 5 },
 *   "#general"
 * );
 * ```
 *
 * If the query `name` or `args` change, the pagination state will be reset
 * to the first page. Similarly, if any of the pages result in an InvalidCursor
 * or QueryScannedTooManyDocuments error, the pagination state will also reset
 * to the first page.
 *
 * To learn more about pagination, see [Paginated Queries](https://docs.convex.dev/using/pagination).
 *
 * @param name - The name of the query function.
 * @param options - An object specifying the `initialNumItems` to be loaded in
 * the first page.
 * @param args - The arguments to the query function, excluding the first.
 * @