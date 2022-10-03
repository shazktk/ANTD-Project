import './LayoutOne.css'
import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;


const LayoutOne = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['5']}
        items={new Array(15).fill().map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '10px 50px'
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 10px'
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer
      style={{
        textAlign: 'center'
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default LayoutOne;