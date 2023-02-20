import { Edge } from "reactflow";
import { MapNode } from "../../types";

function findRootAndChildren(
  nodes: MapNode[],
  edges: Edge[]
): [MapNode, Map<MapNode, MapNode[]>] {
  const rootNode = nodes.find((n) => n.type === "record");

  const childMap = new Map<MapNode, MapNode[]>();
  const parentSet = new Set<MapNode>();
  for (const edge of edges)