
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout";
import ClientLayout from "./layouts/ClientLayout";
import DocumentLayout from "./layouts/DocumentLayout";

import Home from "./pages/Home";
import ClientList from "./features/clients/ClientList";
import ClientForm from "./features/clients/ClientForm";

import ClientTasksDashboard from "./features/clients/tasks/ClientTasksDashboard";



import DocumentList from "./features/documents/DocumentList";
import DocumentUpload from "./features/documents/DocumentUpload";

import InboxLayout from "./layouts/InboxLayout";
import InboxLanding from "./features/inbox/InboxLanding";
import OutboxLanding from "./features/inbox/OutboxLanding";
import DraftLanding from "./pages/DraftLanding";
import ComposeMessage from "./features/inbox/ComposeMessage";
import MessageThread from "./features/inbox/MessageThread";


import AdminLayout from "./layouts/AdminLayout";
import AdminLanding from "./pages/AdminLanding";
import InviteUser from "./features/admin/InviteUser";
import ProductRates from "./features/admin/ProductRates";
import FeatureFlags from "./features/admin/FeatureFlags";

import ChatLauncherButton from "./features/aichat/components/ChatLauncherButton";

import ExperiencePage from "./features/experience/ExperiencePage";

import DemoSessionGate from "./features/admin/demoAccess/DemoSessionGate";


function App() {
  return (
    <BrowserRouter>
       <DemoSessionGate>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="clients" element={<ClientLayout />}>
            <Route index element={<ClientList />} />
            <Route path="add" element={<ClientForm />} />
            <Route path="tasks" element={<ClientTasksDashboard />} />

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
            <Route path="featureflags" element={<FeatureFlags />} />
          </Route>

          <Route path="inbox" element={<InboxLayout />}>
            <Route index element={<InboxLanding />} />
             <Route path="draft" element={<DraftLanding />} />
              <Route path="outbox" element={<OutboxLanding />} />
            <Route path="compose" element={<ComposeMessage />} />
            <Route path="message/:id" element={<MessageThread />} />
          </Route>


        </Route>
      </Routes>
      </DemoSessionGate>
<ChatLauncherButton />

      
    </BrowserRouter>
  );
}

export default App;
