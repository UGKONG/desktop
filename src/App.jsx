/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Styled from "styled-components";
import bgImg from './img/bg.jpg';
import useAxios from './hooks/useAxios';
import Item from './Item';
import Folder from './Folder';

function App() {
  const [itemList, setItemList] = useState([]);
  const [isFolder, setIsFolder] = useState(false);
  const [activeFolderId, setActiveFolderId] = useState(0);
  const [activeFolderTitle, setActiveFolderTitle] = useState('');

  const getItem = () => {
    useAxios.get('item/' + activeFolderId).then(({ data }) => {
      if (!data?.result || !data?.data) return setItemList([]);
      setItemList(data?.data);
    })
  }

  useEffect(getItem, []);

  return (
    <Container bg={bgImg}>
      {itemList?.map(item => (
        <Item 
          key={item?.ID} 
          data={item} 
          setIsFolder={setIsFolder}
          setActiveFolderId={setActiveFolderId}
          setActiveFolderTitle={setActiveFolderTitle}
        />
      ))}
      {isFolder && <ClickNotBg />}
      {isFolder && (
        <Folder
          activeFolderId={activeFolderId}
          activeFolderTitle={activeFolderTitle}
          setActiveFolderId={setActiveFolderId}
          setActiveFolderTitle={setActiveFolderTitle}
          setIsFolder={setIsFolder}
        />
      )}
    </Container>
  );
}

export default App;

const Container = Styled.main`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${x => x?.bg});
`
const ClickNotBg = Styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000020;
`