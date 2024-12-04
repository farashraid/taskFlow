import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from 'antd';
import { Graph } from '@antv/x6';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const graph = new Graph({
      container: document.getElementById('container')|| undefined,
      width: 800,
      height: 600,
    });

    const data = {
      // 节点
      nodes: [
        {
          id: 'node1', // String，可选，节点的唯一标识
          x: 40,       // Number，必选，节点位置的 x 值
          y: 40,       // Number，必选，节点位置的 y 值
          width: 80,   // Number，可选，节点大小的 width 值
          height: 40,  // Number，可选，节点大小的 height 值
          label: 'hello', // String，节点标签
        },
        {
          id: 'node2', // String，节点的唯一标识
          x: 160,      // Number，必选，节点位置的 x 值
          y: 180,      // Number，必选，节点位置的 y 值
          width: 80,   // Number，可选，节点大小的 width 值
          height: 40,  // Number，可选，节点大小的 height 值
          label: 'world', // String，节点标签
        },
      ],
      // 边
      edges: [
        {
          source: 'node1', // String，必须，起始节点 id
          target: 'node2', // String，必须，目标节点 id
        },
      ],
    };

    graph.fromJSON(data);
  }, []); // 空数组确保 useEffect 只运行一次

  return (
    <>
      <div id="container" style={{ width: '800px', height: '600px', border: '1px solid #ccc' }}></div>
      <Button type="primary">Button</Button>
    </>
  );
}

export default App;
