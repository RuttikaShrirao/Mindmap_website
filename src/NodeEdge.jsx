import React, { useState } from 'react';
import ReactFlow, { Controls, MiniMap } from 'react-flow-renderer';
// import React, { useCallback } from 'react';
import  { useNodesState, useEdgesState, addEdge, Background  } from 'reactflow';
import './App.css';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: 'Car Map',description: 'Mind-Map for BMW Project' , style: { backgroundColor: 'pink', padding: 10, borderRadius: 5 }} },
      { id: 'Research', position: { x: -410, y: 90 }, data: { label: 'Research', description: 'Market Research on Bmw',  style: { backgroundColor: 'pink', padding: 10, borderRadius: 5 } } },
      { id: 'Planning', position: { x: -190, y: 90 }, data: { label: 'Planning', description: 'Planning to present in Market' } },
      { id: 'Desiging', position: { x: 200, y: 90 }, data: { label: 'Desiging',description: 'Technology Used in designing' } },
      { id: 'Manufacturing', position: { x: 500, y: 90 }, data: { label: 'Manufacturing', description: 'Cost on Manufacturing' } },
      // { id: 'Sales/Marketing', position: { x: 500, y: 90 }, data: { label: 'Sales/Marketing',description: 'This is node 6' } },
    
      { id: 'External', position: { x: -510, y: 200 }, data: { label: 'External' ,description: 'External Research'} },
      { id: 'Internal', position: { x: -350, y: 200 }, data: { label: 'Internal' ,description: 'Internal Research'} },
    
      { id: 'PRD', position: { x: -190, y: 200 }, data: { label: 'PRD',description: 'Park Reverse Drive' } },
      { id: 'Specs', position: { x: -30, y: 200 }, data: { label: 'Specs',description: 'Engine, Airbags' } },
    
      { id: 'Hardware', position: { x: 125, y: 200 }, data: { label: 'Hardware' ,description: 'Engine, Transmission'} },
      { id: 'Software', position: { x: 280, y: 200 }, data: { label: 'Software',description: 'AutoAction' } },
  
      { id: 'Material', position: { x: 595, y: 200 }, data: { label: 'Material' ,description: 'BMW X5, Mini Cooper'} },
      { id: 'Production', position: { x: 440, y: 200 }, data: { label: 'Production',description: 'Two Production Network in India' } },
  
      // { id: 'Online', position: { x: 95, y: 200 }, data: { label: 'Online' } },
      // { id: 'Dealearship', position: { x: 250, y: 200 }, data: { label: 'Dealearship' } },
  ];
  const initialEdges = [{ id: 'e1', source: '1', target: 'Research' },
      { id: 'e2', source: '1', target: 'Planning' },
      { id: 'e3', source: '1', target: 'Desiging' },
      { id: 'e4', source: '1', target: 'Manufacturing' },
      { id: 'e5', source: '1', target: 'Sales/Marketing' },
      
      { id: 'e6', source: 'Research', target: 'External' },
      { id: 'e7', source: 'Research', target: 'Internal' },
      
      { id: 'e8', source: 'Planning', target: 'PRD' },
      { id: 'e9', source: 'Planning', target: 'Specs' },
      
      { id: 'e10', source: 'Desiging', target: 'Hardware' },
      { id: 'e2-2', source: 'Desiging', target: 'Software' },
      
      { id: 'e11', source: 'Manufacturing', target: 'Material' },
      { id: 'e12', source: 'Manufacturing', target: 'Production' },
      
      { id: 'e13', source: 'Sales/Marketing', target: 'Online' },
      { id: 'e14', source: 'Sales/Marketing', target: 'Dealearship' },
      ];

      export default function NodeEdge(){
        const [hoveredNode, setHoveredNode] = useState(null);
        const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
      const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

       var tooltip = document.querySelector('.tooltip');
  
    
      const handleNodeMouseEnter = (event, node) => {
    document.onmousemove = function (e) {
      setHoveredNode(node);
      console.log('done',"ddddddd")
        var x = e.clientX,
            y = e.clientY;
            tooltip.style.top= (e.y + 20) + 'px';   
            tooltip.style.left = (e.x + 20) + 'px';
    };
    };
    const handleNodeMouseLeave = () => {

      document.onmouseleave = function (e) {
        setHoveredNode(null);
        console.log(hoveredNode,"oooooo")
              tooltip.style.opacity=0
      };

    
    };
      
return(
    <>
             <ReactFlow
       nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}

        // nodeTypes={{
        //   custom: ({ data }) => <div className="node" style={data.style}>{data.label}</div>,
        // }}
        onNodeMouseEnter={handleNodeMouseEnter}
        onNodeMouseLeave={handleNodeMouseLeave}
        style={{ width: '100%', height: '100vh',  }}
        >
  
        {hoveredNode && (
          <div className="tooltip" style={{border:'1px solid black'}}>
            {hoveredNode.data.description}
           
          </div>
        )}
        {/* <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'output') return '#ff0072';
            if (n.type === 'default') return '#1a192b';

            return '#eee';
          }}
          nodeColor={(n) => {
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'output') return '#ff0072';
            if (n.type === 'default') return '#1a192b';

            return '#eee';
          }}
          nodeBorderRadius={2}
        /> */}
        <Controls />
      </ReactFlow>
    </>
)

      }