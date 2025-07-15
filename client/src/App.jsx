import "./App.css";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import DisplayPage from "./pages/DisplayPage";
import Layout from "./components/Layout";
import { NotificatioProvider } from "./providers/NotificationProvider";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <Router>
        <NotificatioProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<FormPage />} />
              <Route path="/display" element={<DisplayPage />} />
            </Routes>
          </Layout>
        </NotificatioProvider>
      </Router>
    </ConfigProvider>
  );
}

export default App;
