/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import useAxios from './hooks/useAxios';
import Item from './Item';

export default function 폴더 ({ activeFolderId, activeFolderTitle, setActiveFolderId, setActiveFolderTitle, setIsFolder }) {
  
  const [itemList, setItemList] = useState([]);

  const getItem = () => {
    useAxios.get('item/' + activeFolderId).then(({ data }) => {
      if (!data?.result || !data?.data) return setItemList([]);
      setItemList(data?.data);
    })
  }

  const close = () => {
    setIsFolder(false);
    setActiveFolderId(0);
  }

  useEffect(getItem, [activeFolderId]);

  return (
    <Container>
      <Header>
        <TitleName>{activeFolderTitle ?? '폴더'}</TitleName>
        <CloseBtn onClick={close} />
      </Header>
      <Body>
        {itemList?.map(item => (
          <Item 
            key={item?.ID} 
            data={item} 
            setIsFolder={setIsFolder}
            setActiveFolderId={setActiveFolderId}
            setActiveFolderTitle={setActiveFolderTitle}
          />
        ))}
      </Body>
    </Container>
  )
}

const Container = Styled.section`
  width: 80%;
  height: 70%;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 4px #00000040;
  display: flex;
  flex-direction: column;
`
const Header = Styled.section`
  padding: 6px;
  background-color: #f7963814;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TitleName = Styled.span`
  font-size: 14px;
  padding: 0 3px;
  user-select: none;
`
const CloseBtn = Styled(IoIosCloseCircle)`
  font-size: 22px;
  color: #db5757;
  cursor: pointer;
  &:hover {
    color: #f00;
  }
`
const Body = Styled.section`
  flex: 1;
  padding: 6px;
  display: flex;
  flex-wrap: wrap;
`