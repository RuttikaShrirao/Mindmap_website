// import React from 'react';;
// import ReactFlow, { Controls, MiniMap } from 'react-flow-renderer';
// import 'reactflow/dist/style.css';
 
// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: 'Research', position: { x: -410, y: 90 }, data: { label: 'Research' } },
//   { id: 'Planning', position: { x: -190, y: 90 }, data: { label: 'Planning' } },
//   { id: 'Desiging', position: { x: 100, y: 90 }, data: { label: 'Desiging' } },
//   { id: 'Manufacturing', position: { x: 300, y: 90 }, data: { label: 'Manufacturing' } },
//   { id: 'Sales/Marketing', position: { x: 500, y: 90 }, data: { label: 'Sales/Marketing' } },

//   { id: 'External', position: { x: -510, y: 200 }, data: { label: 'External' } },
//   { id: 'Internal', position: { x: -350, y: 200 }, data: { label: 'Internal' } },

//   { id: 'PRD', position: { x: -190, y: 200 }, data: { label: 'PRD' } },
//   { id: 'Specs', position: { x: -30, y: 200 }, data: { label: 'Specs' } },

//   { id: 'Hardware', position: { x: 95, y: 200 }, data: { label: 'Hardware' } },
//   { id: 'Software', position: { x: 250, y: 200 }, data: { label: 'Software' } },
// ];
// const initialEdges = [{ id: 'e1-1', source: '1', target: 'Research' },
// { id: 'e1-2', source: '1', target: 'Planning' },
// { id: 'e1-3', source: '1', target: 'Desiging' },
// { id: 'e1-4', source: '1', target: 'Manufacturing' },
// { id: 'e1-5', source: '1', target: 'Sales/Marketing' },

// { id: 'e2-1', source: 'Research', target: 'External' },
// { id: 'e2-2', source: 'Research', target: 'Internal' },

// { id: 'e2-1', source: 'Planning', target: 'PRD' },
// { id: 'e2-2', source: 'Planning', target: 'Specs' },

// { id: 'e2-1', source: 'Desiging', target: 'Hardware' },
// { id: 'e2-2', source: 'Desiging', target: 'Software' },
// ];
 
// const nodeStyle = {
//   width: 100, // Set the width of the node
//   height: 50, // Set the height of the node
//   background: '#0099ff',
//   color: '#fff',
//   borderRadius: '8px',
//   padding: '8px',
//   textAlign: 'center',
// };
// export default function App() {
//   const onLoad = (reactFlowInstance) => {
//     reactFlowInstance.fitView();
//   };
//   return (
//     <div style={{ height: '100vh',width:"100vw",display:'flex',justifyContent:'center', border: '1px solid red' }}>
//     {/* <div style={{position:'relative'}}> */}
//       <ReactFlow onLoad={onLoad}
//       style={{ height: '100%', width: '100%' }}
//       snapToGrid={true}
//         // snapGrid={[1, 1]}
//        nodes={initialNodes} 
//        edges={initialEdges} />
//     </div>
//   );
// }

// import React, { useCallback } from 'react';
// import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
 
// import 'reactflow/dist/style.css';
 
// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//     { id: 'Research', position: { x: -410, y: 90 }, data: { label: 'Research' } },
//     { id: 'Planning', position: { x: -190, y: 90 }, data: { label: 'Planning' } },
//     { id: 'Desiging', position: { x: 100, y: 90 }, data: { label: 'Desiging' } },
//     { id: 'Manufacturing', position: { x: 300, y: 90 }, data: { label: 'Manufacturing' } },
//     { id: 'Sales/Marketing', position: { x: 500, y: 90 }, data: { label: 'Sales/Marketing' } },
  
//     { id: 'External', position: { x: -510, y: 200 }, data: { label: 'External' } },
//     { id: 'Internal', position: { x: -350, y: 200 }, data: { label: 'Internal' } },
  
//     { id: 'PRD', position: { x: -190, y: 200 }, data: { label: 'PRD' } },
//     { id: 'Specs', position: { x: -30, y: 200 }, data: { label: 'Specs' } },
  
//     { id: 'Hardware', position: { x: 95, y: 200 }, data: { label: 'Hardware' } },
//     { id: 'Software', position: { x: 250, y: 200 }, data: { label: 'Software' } },

//     { id: 'Material', position: { x: 95, y: 200 }, data: { label: 'Material' } },
//     { id: 'Production', position: { x: 250, y: 200 }, data: { label: 'Production' } },

//     { id: 'Online', position: { x: 95, y: 200 }, data: { label: 'Online' } },
//     { id: 'Dealearship', position: { x: 250, y: 200 }, data: { label: 'Dealearship' } },
// ];
// const initialEdges = [{ id: 'e1-1', source: '1', target: 'Research' },
// { id: 'e1-2', source: '1', target: 'Planning' },
// { id: 'e1-3', source: '1', target: 'Desiging' },
// { id: 'e1-4', source: '1', target: 'Manufacturing' },
// { id: 'e1-5', source: '1', target: 'Sales/Marketing' },

// { id: 'e2-1', source: 'Research', target: 'External' },
// { id: 'e2-2', source: 'Research', target: 'Internal' },

// { id: 'e2-1', source: 'Planning', target: 'PRD' },
// { id: 'e2-2', source: 'Planning', target: 'Specs' },

// { id: 'e2-1', source: 'Desiging', target: 'Hardware' },
// { id: 'e2-2', source: 'Desiging', target: 'Software' },

// { id: 'e2-1', source: 'Manufacturing', target: 'Material' },
// { id: 'e2-2', source: 'Manufacturing', target: 'Production' },

// { id: 'e2-1', source: 'Sales/Marketing', target: 'Online' },
// { id: 'e2-2', source: 'Sales/Marketing', target: 'Dealearship' },
// ];
 
// export default function App() {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges],
//   );
 
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//       />
//     </div>
//   );
// }


// import ReactFlow, { Controls, MiniMap } from 'react-flow-renderer';
// import React, { useCallback } from 'react';
// import { useNodesState, useEdgesState, addEdge } from 'reactflow';
 
// import './App.css';

// function App() {
//   const initialNodes = [
//       { id: '1', position: { x: 0, y: 0 }, data: { label: '+' } },
//         { id: 'Research', position: { x: -510, y: 90 }, data: { label: 'Research' } },
//         { id: 'Planning', position: { x: -190, y: 90 }, data: { label: 'Planning' } },
//         { id: 'Desiging', position: { x: 100, y: 90 }, data: { label: 'Desiging' } },
//         { id: 'Manufacturing', position: { x: 300, y: 90 }, data: { label: 'Manufacturing' } },
//         { id: 'Sales/Marketing', position: { x: 500, y: 90 }, data: { label: 'Sales/Marketing' } },
      
//         { id: 'External', position: { x: -710, y: 200 }, data: { label: 'External' } },
//         { id: 'Internal', position: { x: -450, y: 200 }, data: { label: 'Internal' } },
      
//         { id: 'PRD', position: { x: -190, y: 200 }, data: { label: 'PRD' } },
//         { id: 'Specs', position: { x: -30, y: 200 }, data: { label: 'Specs' } },
      
//         { id: 'Hardware', position: { x: 95, y: 200 }, data: { label: 'Hardware' } },
//         { id: 'Software', position: { x: 250, y: 200 }, data: { label: 'Software' } },
    
//         { id: 'Material', position: { x: 595, y: 200 }, data: { label: 'Material' } },
//         { id: 'Production', position: { x: 450, y: 200 }, data: { label: 'Production' } },
    
//         { id: 'Online', position: { x: 795, y: 200 }, data: { label: 'Online' } },
//         { id: 'Dealearship', position: { x: 650, y: 200 }, data: { label: 'Dealearship' } },
//     ];
//     const initialEdges = [{ id: 'e1', source: '1', target: 'Research' },
//     { id: 'e2', source: '1', target: 'Planning' },
//     { id: 'e3', source: '1', target: 'Desiging' },
//     { id: 'e4', source: '1', target: 'Manufacturing' },
//     { id: 'e5', source: '1', target: 'Sales/Marketing' },
    
//     { id: 'e6', source: 'Research', target: 'External' },
//     { id: 'e7', source: 'Research', target: 'Internal' },
    
//     { id: 'e8', source: 'Planning', target: 'PRD' },
//     { id: 'e9', source: 'Planning', target: 'Specs' },
    
//     { id: 'e10', source: 'Desiging', target: 'Hardware' },
//     { id: 'e2-2', source: 'Desiging', target: 'Software' },
    
//     { id: 'e11', source: 'Manufacturing', target: 'Material' },
//     { id: 'e12', source: 'Manufacturing', target: 'Production' },
    
//     { id: 'e13', source: 'Sales/Marketing', target: 'Online' },
//     { id: 'e14', source: 'Sales/Marketing', target: 'Dealearship' },
//     ];

//     const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//       const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
     
//       const onConnect = useCallback(
//         (params) => setEdges((eds) => addEdge(params, eds)),
//         [setEdges],
//       );

//   return (
//     <div className="app">
//       <ReactFlow
//          nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         nodeTypes={{
//           custom: ({ data }) => <div className="node">{data.label}</div>,
//         }}
//         style={{ width: '100%', height: '100vh' }}
//       >
//         <MiniMap
//           nodeStrokeColor={(n) => {
//             if (n.type === 'input') return '#0041d0';
//             if (n.type === 'output') return '#ff0072';
//             if (n.type === 'default') return '#1a192b';

//             return '#eee';
//           }}
//           nodeColor={(n) => {
//             if (n.type === 'input') return '#0041d0';
//             if (n.type === 'output') return '#ff0072';
//             if (n.type === 'default') return '#1a192b';

//             return '#eee';
//           }}
//           nodeBorderRadius={2}
//         />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// }

// export default App;


import ReactFlow, { Controls, MiniMap } from 'react-flow-renderer';
import NodeEdge from "./NodeEdge";



const nodeTypes = {
  NodeEdge: NodeEdge,
};


function App() {
 

  return (
    <div className="app">
    {/* <ReactFlow
{/* nodeTypes= {nodeTypes} 
 /> **/}

 <NodeEdge />
    </div>
  );
}

export default App;
