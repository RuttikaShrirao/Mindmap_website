import React from 'react';
// import ReactFlow from 'reactflow';
import ReactFlow, { Controls, MiniMap } from 'react-flow-renderer';
import 'reactflow/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: 'Research', position: { x: -300, y: 90 }, data: { label: 'Research' } },
  { id: 'Planning', position: { x: -100, y: 90 }, data: { label: 'Planning' } },
  { id: 'Desiging', position: { x: 100, y: 90 }, data: { label: 'Desiging' } },
  { id: 'Manufacturing', position: { x: 300, y: 90 }, data: { label: 'Manufacturing' } },
  { id: 'Sales/Marketing', position: { x: 500, y: 90 }, data: { label: 'Sales/Marketing' } },

  { id: 'External', position: { x: -400, y: 200 }, data: { label: 'External' } },
  { id: 'Internal', position: { x: -200, y: 200 }, data: { label: 'Internal' } },

];
const initialEdges = [{ id: 'e1-1', source: '1', target: 'Research' },
{ id: 'e1-2', source: '1', target: 'Planning' },
{ id: 'e1-3', source: '1', target: 'Desiging' },
{ id: 'e1-4', source: '1', target: 'Manufacturing' },
{ id: 'e1-5', source: '1', target: 'Sales/Marketing' },

{ id: 'e2-1', source: 'Research', target: 'External' },
{ id: 'e2-2', source: 'Research', target: 'Internal' },
];
 
const nodeStyle = {
  width: 100, // Set the width of the node
  height: 50, // Set the height of the node
  background: '#0099ff',
  color: '#fff',
  borderRadius: '8px',
  padding: '8px',
  textAlign: 'center',
};
export default function App() {
  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
  };
  return (
    <div style={{ height: '100vh',width:"100vw",display:'flex',justifyContent:'center', border: '1px solid red' }}>
    {/* <div style={{position:'relative'}}> */}
      <ReactFlow onLoad={onLoad}
      style={{ height: '100%', width: '100%' }}
      snapToGrid={true}
        snapGrid={[15, 15]}
       nodes={initialNodes} 
       edges={initialEdges} />
      {/* </div> */}
      {/* {ini  */}
    </div>
  );
}