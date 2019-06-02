import React from 'react';
import ReactTooltip from 'react-tooltip'

import './AppLayout.css';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

const AppLayout = props => (<div className="app_container">
        <Header className="app_header"/>
        <Content {...props} className="app_body"/>
        <Footer className="app_footer"/>
        <ReactTooltip multiline={true}/>
</div>);

export default AppLayout;