import PostItem from '../Post/PostItem';
import styled from '@emotion/styled';
import { useState, useEffect, useCallback } from 'react';
import { SortPost } from '../../apis/post/Sort/sortPost';
import { MainPostType } from '../../apis/Interface';
import { getToken } from '../../utils/token';

function Main() {
  const [click, setclick] = useState<boolean>(true);
  const [isBottom, setBottom] = useState<boolean>(false);
  const [n, setnew] = useState(1);
  const [end, setend] = useState<boolean>(false);
  const [like, setlike] = useState(1);
  const [Obj, setobj] = useState<MainPostType>({
    NEW: [],
    LIKE: [],
  });

  const Click = useCallback(() => {
    return click ? 'NEW' : 'LIKE';
  }, [click]);

  const Page = useCallback(
    (touch: boolean) => {
      return touch ? 'new' : 'like';
    },
    [click]
  );

  const CallChange = useCallback(
    (touch: boolean) =>
      Page(touch) === 'new'
        ? setnew((pre) => pre + 1)
        : setlike((pre) => pre + 1),
    [click]
  );

  const CallPost = useCallback(
    (touch: boolean) => {
      SortPost(Click(), Page(touch) === 'new' ? n + 1 : like + 1).then((e) => {
        if (e.length === 0) {
          setend(() => true);
        }
        setBottom(() => false);
        setobj((O) => {
          return { ...O, [Click()]: [...O[Click()], ...e] };
        });
      });
      CallChange(touch);
    },
    [like, n, click]
  );

  useEffect(() => {
    const HandleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight && isBottom === false) {
        setBottom(() => true);
      }
    };
    setTimeout(() =>{
    SortPost("NEW",1).then(e => {
      setobj((O) => {
        return { ...O, NEW: [...O.NEW, ...e] };
      });
    })
    SortPost("LIKE",1).then(e => {
      setobj((O) => {
        return { ...O, LIKE: [...O.LIKE, ...e] };
      });
    })},500)

    window.addEventListener('scroll', HandleScroll);
    return () => {
      window.removeEventListener('scroll', HandleScroll);
    };
  }, []);

  useEffect(() => {
    if (!end) {
      isBottom && CallPost(click);
      setBottom(false);
    }
  }, [isBottom]);

  return (
    <>
      <MainContainer>
        <MainImg
          src="/images/main/MainImage.png"
          alt="메인배너"
        />
        <SortBox>
          <Blog onClick={() => setclick(true)}>
            최신순
            {click && <EmBlog />}
          </Blog>
          <TradeBox onClick={() => setclick(false)}>
            인기순
            {!click && <EmTrade />}
          </TradeBox>
        </SortBox>
      </MainContainer>
      <ReadContainer>
        <PostContainer>
          {Obj[Click()] &&
            Obj[Click()].map((e) => {
              return <PostItem key={e.id} Obj={e} />;
            })}
        </PostContainer>
      </ReadContainer>
    </>
  );
}

const MainScroll = styled.div`
  ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #303f9f;
    }
`

const MainImg = styled.img`
  width: 1536px;
`;

const PostContainer = styled.div`
  width: 1340px;
  @media (max-width: 1353px) {
    justify-content: center;
  }
  display: flex;
  flex-wrap: wrap;
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  padding-top: 60px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  
`;
const ReadContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SortBox = styled.div`
  margin-top: 64px;
  margin-bottom: 144px;
  width: 480px;
  display: flex;
  justify-content: space-between;
`;
const TradeBox = styled.div`
  font-size: 32px;
  cursor: pointer;
`;
const EmTrade = styled.div`
  position: absolute;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 16px solid black;
  margin-left: 32px;
  margin-top: 8px;
`;

const EmBlog = styled.div`
  position: absolute;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 16px solid black;
  margin-left: 30px;
  margin-top: 8px;
`;

const Blog = styled.div`
  font-size: 32px;
  cursor: pointer;
`;

export default Main;
