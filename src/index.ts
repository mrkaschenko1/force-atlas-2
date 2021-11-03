import Sigma from "sigma";
import Graph from "graphology";
import clusters from "graphology-generators/random/clusters";

import fa2 from "graphology-layout-forceatlas2";
import FA2Layout from "graphology-layout-forceatlas2/worker";

const container = document.getElementById("sigma-container") as HTMLElement;

const graph = clusters(Graph, {
  order: 2000,
  size: 10000,
  clusters: 1
});

graph.forEachNode((node) => {
  graph.mergeNodeAttributes(node, {
    x: Math.random() * 10,
    y: Math.random() * 10
  });
});

const renderer = new Sigma(graph, container);

const layout = new FA2Layout(graph);
layout.start({ settings: fa2.inferSettings(graph) });
