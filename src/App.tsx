import { Navigate, Route, Routes } from 'react-router-dom';
import { Shipments, ShipmentDetails } from 'pages';
import { Layout } from 'components';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="shipments" element={<Shipments />} /> 
        <Route path="shipments/:id" element={<ShipmentDetails />} />
        <Route path="*" element={<Navigate replace to="shipments" />} />
      </Routes>
    </Layout>
  );
}

export default App;
