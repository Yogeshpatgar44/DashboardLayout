import React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import NAVIGATION from "../navigation"; 

const DashboardLayoutBasic = ({ children }) => {
  return (
    <AppProvider navigation={NAVIGATION}>
      <div className="dashboard-container">
        <DashboardLayout>
          <PageContainer>
            {children} 
          </PageContainer>
        </DashboardLayout>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          .dashboard-container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          /* Responsive Header */
          @media (max-width: 768px) {
            .dashboard-container .DashboardLayout-header {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
          }
        `}
      </style>
    </AppProvider>
  );
};

export default DashboardLayoutBasic;
