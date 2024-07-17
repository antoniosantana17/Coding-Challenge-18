// src/components/Toolbar.js
import React from 'react';
import styled from 'styled-components';

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  color: white;
`;

const Toolbar = ({ children }) => {
  return <ToolbarContainer>{children}</ToolbarContainer>;
};

export default Toolbar;
