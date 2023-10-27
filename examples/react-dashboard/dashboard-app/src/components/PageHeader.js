import React from "react";
import { Row, Col  } from "antd";
import styled from 'styled-components';

const StyledRow = styled(Row)`
  padding: 12px 16px 7px 22px;
  background: #ffffff;
  border-radius:10px;
  box-shadow: 0px 1px 1px 0px lightblue;
`

const ButtonsCol = styled(Col)`
  text-align: right;
`

const PageHeader = ({ title, button, noBorder }) => (
  <StyledRow>
    <Col span={12}>
      {title}
    </Col>
    <ButtonsCol span={12}>
      {button}
    </ButtonsCol>
  </StyledRow>
);

export default PageHeader;
