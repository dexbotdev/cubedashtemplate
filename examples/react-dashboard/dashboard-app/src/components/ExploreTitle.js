import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Typography.Title)`
  && {
    color: #43436B;
    fontSize:16px !important;
    &:hover {
      color: #7A77FF;
    }
  }
`
 

const ExploreTitle = ({ itemTitle }) => (
  <Typography.Title level={4}>  
        Dashboard 
  </Typography.Title>
);

export default ExploreTitle;
