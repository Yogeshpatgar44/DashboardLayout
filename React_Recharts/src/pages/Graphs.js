import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { AreaChart, Area } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { 
    name: 'Jan',
    value: 400,
    value2: 300 
  },
  { 
    name: 'Feb',
    value: 300,
    value2: 200 
  },
  { 
    name: 'Mar',
    value: 200,
    value2: 400 
  },
  { name: 'Apr',
    value: 278, 
    value2: 350 
  },
  { name: 'May',
    value: 189,
    value2: 180
  },
  { name: 'Jun',
    value: 239,
    value2: 280 
  },
  { name: 'Jul',
    value: 349,
    value2: 320
  },
];

const pieData = [
  { 
    name: 'A',
    value: 400 
  },
  { name: 'B',
    value: 300 
  },
  { name: 'C',
    value: 300
  },
  { name: 'D',
    value: 200
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Graphs() {
  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '20px', 
        padding: '20px',
        maxWidth: '100%',
      }}
    >
  
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={120} fill="#8884d8" dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

  
      <style>
        {`
          @media (max-width: 768px) {
            div {
              display: grid;
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Graphs;
