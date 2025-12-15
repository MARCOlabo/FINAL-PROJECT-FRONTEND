import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import Adminlogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminControl/AdminDashboard.jsx";
import ManageRecords from "./pages/AdminControl/ManageRecords.jsx";
import NotificationCenter from "./pages/AdminControl/NotificationCenter.jsx";
import Profiles from "./pages/AdminControl/Profiles.jsx";
import ManageCustomers from "./pages/AdminControl/ManageCustomers.jsx";
import ManageAllUnpaidRecords from "./pages/AdminControl/ManageAllUnpaidRecords.jsx";

import ResidentLogin from "./pages/ResidentLogin.jsx";
import ResidentDashboard from "./pages/ResidentControl/ResidentDashboard.jsx";
import Payment from "./pages/ResidentControl/ResidentPaymentDashboard.jsx";

import MeterReaderLogin from "./pages/MeterReaderLogin.jsx";
import ReaderDashboard from "./pages/MeterReaderControl/MeterReaderDashboard.jsx";
import RecordConsumption from "./pages/MeterReaderControl/RecordConsumption.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";
import Unauthorized from "./pages/Unauthorized.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin-login" element={<Adminlogin />} />
        <Route path="/resident-login" element={<ResidentLogin />} />
        <Route path="/meter-reader" element={<MeterReaderLogin />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manage-records" element={<ManageRecords />} />
          <Route path="/notification-center" element={<NotificationCenter />} />
          <Route path="/manage-customers" element={<ManageCustomers />} />
          <Route path="/admin-profiles" element={<Profiles />} />
          <Route path="/unpaid-bills" element={<ManageAllUnpaidRecords />} />
        </Route>

        {/* Resident Routes */}
        <Route>
          <Route path="/resident-dashboard" element={<ResidentDashboard />} />
          <Route path="/payment" element={<Payment />} />
        </Route>

        {/* Meter Reader Routes */}
        <Route element={<ProtectedRoute allowedRoles={["meter_reader"]} />}>
          <Route path="/reader-dashboard" element={<ReaderDashboard />} />
          <Route path="/record-consumption" element={<RecordConsumption />} />
          <Route path="/meter-dashboard" element={<ReaderDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
