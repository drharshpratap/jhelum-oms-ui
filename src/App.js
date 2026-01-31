
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout";
import ClientLayout from "./layouts/ClientLayout";
import DocumentLayout from "./layouts/DocumentLayout";

import Home from "./pages/Home";
import ClientList from "./features/clients/ClientList";
import ClientForm from "./features/clients/ClientForm";

import DocumentList from "./features/documents/DocumentList";
import DocumentUpload from "./features/documents/DocumentUpload";

import InboxLayout from "./layouts/InboxLayout";
import InboxLanding from "./pages/InboxLanding";
import ComposeMessage from "./features/inbox/ComposeMessage";
import MessageThread from "./features/inbox/MessageThread";


import AdminLayout from "./layouts/AdminLayout";
import AdminLanding from "./pages/AdminLanding";
import InviteUser from "./features/admin/InviteUser";
import ProductRates from "./features/admin/ProductRates";

import ChatLauncherButton from "./features/aichat/components/ChatLauncherButton";

import ExperiencePage from "./features/experience/ExperiencePage";


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
          
          <Route path="experience" element={<ExperiencePage />} />

          <Route path="documents" element={<DocumentLayout />}>
            <Route index element={<DocumentList />} />
            <Route path="add" element={<DocumentUpload />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminLanding />} />
            <Route path="invite" element={<InviteUser />} />
            <Route path="rates" element={<ProductRates />} />
          </Route>

          <Route path="inbox" element={<InboxLayout />}>
            <Route index element={<InboxLanding />} />
            <Route path="compose" element={<ComposeMessage />} />
            <Route path="message/:id" element={<MessageThread />} />
          </Route>


        </Route>
      </Routes>
<ChatLauncherButton />

      
    </BrowserRouter>
  );
}

export default App;
