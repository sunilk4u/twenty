import React from 'react';
import styled from '@emotion/styled';
import { DroppableProvided } from '@hello-pangea/dnd'; // Atlassian dnd does not support StrictMode from RN 18, so we use a fork @hello-pangea/dnd https://github.com/atlassian/react-beautiful-dnd/issues/2350

export const StyledColumn = styled.div`
  background-color: ${({ theme }) => theme.primaryBackground};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  width: 300px;
`;

export const StyledColumnTitle = styled.h3`
  color: ${({ color }) => color};
  font-family: 'Inter';
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  line-height: ${({ theme }) => theme.lineHeight};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const StyledItemContainer = styled.div``;

export const ItemsContainer = ({
  children,
  droppableProvided,
}: {
  children: React.ReactNode;
  droppableProvided: DroppableProvided;
}) => {
  return (
    <StyledItemContainer
      ref={droppableProvided?.innerRef}
      {...droppableProvided?.droppableProps}
    >
      {children}
      {droppableProvided?.placeholder}
    </StyledItemContainer>
  );
};