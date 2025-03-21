
import React from 'react';
import { Navigate } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { auth } from '@/lib/firebase';

const Dashboard = () => {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-fingray">
        <div className="page-container">
          <h1 className="text-3xl font-bold mb-6">Welcome to your dashboard</h1>
          <p className="text-lg text-finblack/70 mb-8">
            This is where you'll find all your financial information and insights.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
              <p>You're logged in as: {user.email}</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
              <p>Complete your profile and connect your accounts to get started.</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
