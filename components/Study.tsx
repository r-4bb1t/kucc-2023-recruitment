export default function Study() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="text-2xl mb-16 font-bold px-12 text-center">
        지난 학기에 개설된
        <br />
        스터디, 세션 및 프로젝트
      </div>
      <div className="relative flex w-full overflow-visible justify-center">
        <div className="px-12 -mx-[10%] lg:mx-0 flex flex-wrap lg:gap-4 gap-2 justify-center">
          <div className="badge session">
            개발자가 되고 싶은데 이거 안들으면 인생 절반 손해보는겁니다
          </div>
          <div className="badge session">디비디비딥러닝</div>
          <div className="badge session">
            Unity로 FPS 멀티플레이 좀비 서바이벌 게임 개발
          </div>
          <div className="badge session">자연어녀석,,,처리해볼까..?</div>
          <div className="badge session">프론트엔드 Lite 버전</div>
          <div className="badge session">쉽게 배울 수 있는 R언어 기초</div>
          <div className="badge session">파이썬 기초 문법</div>
          <div className="badge session">알고리즘 초급</div>
          <div className="badge session">파이썬 데이터분석 기초</div>
          <div className="badge study">
            알고리즘 문제풀이, 블로그 글쓰기, 그리고 인생이라는 거대한 문제
          </div>
          <div className="badge study">확률론 기초</div>
          <div className="badge study">알고리즘</div>
          <div className="badge study">컴퓨터비전 / 자연어처리 논문 읽기</div>
          <div className="badge project">교내 정보 제공 웹사이트</div>
          <div className="badge project">데이터로 보는 축구</div>
          <div className="badge project">KUCC 온라인 저지 사이트</div>
          <div className="badge project">KUCC X YCC 고연전 이벤트 페이지</div>
          <div className="badge project">KUCC 도서관리 사이트</div>
        </div>
      </div>
    </div>
  );
}
