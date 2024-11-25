import React from "react";
import S from "./style";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

const PetsonalTest = () => {
  return (
    <div>
      <S.Frame>
        <S.PetTestContainer>
          <S.Questions>
            <S.Question>
              Q1. 집사가 간식을 들고 오면 신나서 방방 뛰어요!
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <S.Questions>
          <S.Question>
          Q2. 처음 만난 사람에게도 배를 보여주며 애교를 부려요.
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <S.Questions>
          <S.Question>
          Q3. 새로운 장난감이 생기면 하루 종일 그것만 가지고 놀아요.
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <S.Questions>
          <S.Question>
          Q4. 친구 강아지와 만나면 끝없이 따라다니며 놀아요.
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <S.Questions>
          <S.Question>
          Q5. 집사가 잠자리를 준비하면 그곳에 먼저 뛰어들어요.
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <S.Questions>
          <S.Question>
          Q6. 밥 시간이 되면 집사 옆에서 꼬리를 흔들며 재촉해요.
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <S.Questions>
          <S.Question>
          Q7. 간식을 받으면 신나서 간식 자리까지 달려가요!
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <S.Questions>
          <S.Question>
          Q8. 집사가 없으면 여기저기 돌아다니며 집안을 확인해요.
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <S.Questions>
          <S.Question>
          Q9. 새로운 물건이 보이면 바로 다가가 확인해요.
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <S.Questions>
          <S.Question>
          Q10. 친구들과 끝없이 놀고 싶어해요. 
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <S.Questions>
          <S.Question>
          Q11. 자리에 눕자마자 바로 꿀잠을 자요.
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <S.Questions>
          <S.Question>
          Q12. 낯선 환경에서도 여기저기 뛰어다니며 구경해요.
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <S.Questions>
          <S.Question>
          Q13. 집사가 부르면 달려가면서 꼬리를 흔들어요!
            </S.Question>
            <S.CirclesWrap>
              <span>그렇지 않다</span>
              <S.Circles>
                <S.BigCircle></S.BigCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.SmallCircle></S.SmallCircle>
                <S.MiddleCircle></S.MiddleCircle>
                <S.BigCircle></S.BigCircle>
              </S.Circles>
              <span>그렇다</span>
            </S.CirclesWrap>
          </S.Questions>
          <Link to={"/petsonal/test2"}><S.NextButton>다음</S.NextButton></Link>
        </S.PetTestContainer>
      </S.Frame>

      <Footer />
    </div>
  );
};

export default PetsonalTest;
