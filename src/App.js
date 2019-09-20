import React from 'react';
import Link from './components/Link';
import MainNavbar from './components/MainNavbarLeft';
import SideNavbar from './components/SideNavbar';
import PageHeader from './components/PageHeader';
import Breadcrumb from './components/BreadCromb';
import Section from './components/Section';
import Footer from './components/Footer';
import Model from './components/Model';
// import logo from './logo.svg';
//import './App.css';

//  ******* All CSS FILE LINK **********
import './layouts/vendor/bootstrap/css/bootstrap.min.css';
import './layouts/vendor/font-awesome/css/font-awesome.min.css';
import './layouts/css/Fontastic.css';
//import './layouts/css/MystyleDefault.css';
import './layouts/css/Custom.css';
import './layouts/css/Me_custom.css';
import './layouts/css/Me_responsive.css'

// ***** Close CSS FILE LINK  *******

// ****** ALL JavsScript And Jquery File *******
//import Core from './layouts/vendor/jquery/core.js';
// ****** Close JavsScript And Jquery File *******






function App() {
  return (
<div className="App">
    <Model />
      <div class="dashboardsty">
        <div className="page">
           <MainNavbar />
          
          <div className="page-content d-flex align-items-stretch">
            <SideNavbar />
           
            <div className="content-inner">
              <PageHeader />
               <div className="breadcrumb-holder container-fluid">
                 <Breadcrumb />
               </div>
              <Section />
              <Footer />

            </div>
          </div>
        </div>
       </div>
        { /*  JavaScript files */}
</div>
  )
}

export default App;
