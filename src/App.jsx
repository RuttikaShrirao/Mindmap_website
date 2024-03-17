import React from 'react';
import ReactFlow from 'reactflow';
 
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
 
export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}