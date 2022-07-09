import Styled from "styled-components"
import { FcOpenedFolder, FcFile, FcLink, FcDocument, FcQuestions } from "react-icons/fc";
import { useMemo } from "react";

export default function 아이템({ data, setIsFolder, setActiveFolderId, setActiveFolderTitle }) {

  const click = () => {
    // 폴더
    if (isFolder) {
      setIsFolder(true);
      setActiveFolderId(data?.ID);
      setActiveFolderTitle(data?.NAME);
      return;
    }
    // 모달
    if (isModal) {
      // 모달 컴포넌트 제작 후 로직 추가..
      return;
    }
    // 링크
    if (isLink) return window.open(data?.URL);
    // 파일
    if (isFile) return window.open(data?.URL);
  }

  const isFolder = useMemo(() => data?.TYPE === 1, [data?.TYPE]);
  const isModal = useMemo(() => data?.TYPE === 2, [data?.TYPE]);
  const isLink = useMemo(() => data?.TYPE === 3, [data?.TYPE]);
  const isFile = useMemo(() => data?.TYPE === 4, [data?.TYPE]);

  return (
    <Container currentId={data?.CURRENT_ID} onDoubleClick={click}>
      <IconImg>
        {isFolder && <FcOpenedFolder />}
        {isModal && <FcFile />}
        {isLink && <FcLink />}
        {isFile && <FcDocument />}
        {data?.TYPE > 4 && <FcQuestions />}
      </IconImg>
      <Name>{data?.NAME}</Name>
    </Container>
  )
}

const Container = Styled.article`
  width: 90px;
  height: 110px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  background-color: transparent;
  border: 1px solid #ffffff00;
  cursor: default;
  &:hover {
    background-color: ${x => x?.currentId === 0 ? '#ffffff30' : '#00000010'};
    border: 1px solid ${x => x?.currentId === 0 ? '#ffffff40' : '#00000020'};
  }
`
const IconImg = Styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 66px;
`
const Name = Styled.p`
  height: 30px;
  font-size: 13px;
  text-align: center;
  padding: 0 3px;
  line-height: 20px;
  color: #333;
  user-select: none;
`