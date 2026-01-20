
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout";
import ClientLayout from "./layouts/ClientLayout";
import DocumentLayout from "./layouts/DocumentLayout";

import Home from "./pages/Home";
import ClientList from "./features/clients/ClientList";
import ClientForm from "./features/clients/ClientForm";

import DocumentList from "./features/documents/DocumentList";
import DocumentUpload from "./features/documents/DocumentUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="clients" element={<ClientLayout />}>
            <Route index element={<ClientList />} />
            <Route path="add" element={<ClientForm />} />
          </Route>

          <Route path="documents" element={<DocumentLayout />}>
            <Route index element={<DocumentList />} />
            <Route path="add" element={<DocumentUpload />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
