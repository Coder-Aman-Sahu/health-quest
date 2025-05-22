import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import WorkoutPlanner from './pages/WorkoutPlanner';
import WorkoutSession from './pages/WorkoutSession';
import Nutrition from './pages/Nutrition';
import Recipe from './pages/Recipe';
import Reminders from './pages/Reminders';
import Profile from './pages/Profile';

// Components
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/workout-planner" element={
            <ProtectedRoute>
              <Layout>
                <WorkoutPlanner />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/workout-session/:id" element={
            <ProtectedRoute>
              <Layout>
                <WorkoutSession />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/nutrition" element={
            <ProtectedRoute>
              <Layout>
                <Nutrition />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/recipe/:id" element={
            <ProtectedRoute>
              <Layout>
                <Recipe />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/reminders" element={
            <ProtectedRoute>
              <Layout>
                <Reminders />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;