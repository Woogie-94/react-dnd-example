import styled from "styled-components";

export const KanbanContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 80px;
  background: rgb(245, 247, 250);
`;

export const ListDropZone = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  height: 100%;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 430px;
  padding: 0 20px;
  margin-right: 40px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.1);
`;

export const ListTitle = styled.p`
  cursor: pointer;
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #478bff;
`;

export const ItemDropsZone = styled.div`
  width: 100%;
  height: 100%;
`;

export const ItemContainer = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #f3f3f3;
`;
