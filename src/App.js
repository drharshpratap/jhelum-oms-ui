
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout";
import ClientLayout from "./layouts/ClientLayout";

import Home from "./pages/Home";
import ClientList from "./features/clients/ClientList";
import ClientForm from "./features/clients/ClientForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<GlobalLayout />}>

          {/* HOME DASHBOARD */}
          <Route path="/" element={<Home />} />

          {/* CLIENT DOMAIN */}
          <Route path="/clients" element={<ClientLayout />}>
            <Route index element={<ClientList />} />
            <Route path="add" element={<ClientForm />} />
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
