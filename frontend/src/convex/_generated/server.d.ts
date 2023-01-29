/* eslint-disable */
/**
 * Generated utilities for implementing server-side Convex query and mutation functions.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.9.1.
 * To regenerate, run `npx convex codegen`.
 * @module
 */

import {
  ActionBuilderForAPI,
  HttpEndpointBuilderForAPI,
  MutationBuilder,
  QueryBuilderForDataModel,
  ActionCtx as GenericActionCtx,
  HttpEndpointCtx as GenericHttpEndpointCtx,
  MutationCtx as GenericMutationCtx,
  QueryCtx as GenericQueryCtx,
  DatabaseReader as GenericDatabaseReader,
  DatabaseWriter as GenericDatabaseWriter,
} from "convex/server";
import type { DataModel } from "./dataModel.js";
import type { API } from "./api.js";

/**
 * Define a query in this Convex app's public API.
 *
 * This function will be allowed to read your Convex database and will be accessible from the client.
 *
 * @param func - The query function. It receives a {@link QueryCtx} as its first argument.
 * @returns The wrapped query. Include this as an `export` to name it and make it accessible.
 */
export declare const query: QueryBuilderForDataModel<DataModel>;

/**
 * Define a mutation in this Convex app's public API.
 *
 * This function will be allowed to modify your Convex database and will be accessible from the client.
 *
 * @param func - The mutation function. It receives a {@link MutationCtx} as its first argument.
 * @returns The wrapped mutation. Include this as an `export` to name it and make it accessible.
 */
export declare const mutation: MutationBuilder<DataModel, API>;

/**
 * Define an action in this Convex app's public API.
 *
 * An action is a function which can execute any JavaScript code, including non-deterministic
 * code and code with side-effects. Actions are often used to call into third-party services.
 * Actions execute in a Node.js environment and can interact with the database indirectly by
 * calling queries and mutations via the provided {@link ActionCtx} object. Actions need to be defined
 * in the `/convex/actions  directory`. Queries and mutations, on the other hand, must be defined
 * outside of the `/convex/actions directory`.
 *
 * @param func - The action. It receives a {@link ActionCtx} as its first argument.
 * @returns The wrapped action. Include this as an `export` to name it and make it accessible.
 */
export declare const action: ActionBuilderForAPI<API>;

/**
 * Define an HTTP endpoint.
 *
 * This function will be used to respond to HTTP requests received by a Convex
 * deployment if the requests matches the path and method where this endpoint
 * is routed. Be sure to route your endpoint in `convex/http.js`.
 *
 * @param func - The endpoint function. It receives a {@link HttpEndpointCtx} as its first argument.
 * @returns The wrapped endpoint function. Import this function from `convex/http.js` and route it to hook it up.
 */
export declare const httpEndpoint: HttpEndpointBuilderForAPI<API>;

/**
 * A set of services for use within Convex query functions.
 *
 * The query context is passed as the first argument to any Convex query
 * function run on the server.
 *
 * This differs from the {@link MutationCtx} because all of the services are
 * read-only.
 */
export type QueryCtx = GenericQueryCtx<DataModel>;

/**
 * A set of services for use within Convex mutation functions.
 *
 * The mutation context is passed as the first argument to any Convex mutation
 * function run on the server.
 */
export type MutationCtx = GenericMutationCtx<DataModel, API>;

/**
 * A set of services for use within Convex action functions.
 *
 * The action context is passed as the first argument to any Convex action
 * function run on the server.
 */
export type ActionCtx = GenericActionCtx<API>;

/**
 * A set of services for use within Convex HTTP endpoints.
 *
 * The HttpEndpointCtx is passed as the first argument to any Convex HTTP
 * endpoint run on the server.
 */
export type HttpEndpointCtx = GenericHttpEndpointCtx<API>;

/**
 * An interface to read from the database within Convex query functions.
 *
 * The two entry points are {@link DatabaseReader.get}, which fetches a single
 * document by its {@link Id}, or {@link DatabaseReader.query}, which starts
 * building a query.
 */
export type DatabaseReader = GenericDatabaseReader<DataModel>;

/**
 * An interface to read from and write to the d