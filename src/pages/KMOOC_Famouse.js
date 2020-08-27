import React from 'react'

function KMOOC_Famouse() {
    return (
        <div>
            <div>
            <div className="block-header">
                    <div className="block-title">2-2. KMOOC 명강의 퀴즈 응시 일정</div>
            </div>
            <div className="block-content">
            <p>- <a href="https://piazza.com/class/k7222vwq8y61ni?cid=166">[공지] KMOOC 명강의 Part 수강법에 대해서 알려드립니다.</a>에서 응시 방법을 확인하세요!</p>

            <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" class="table-head-data">KMOOC 주차</th>
                    <th scope="col" class="table-head-data">응시 기간</th>
                    <th scope="col" class="table-head-data">제출방법</th>
                  </tr>
                </thead>
                <tbody class="table-head-data">
                    <tr>
                        <th scope="col" class="table-head-data"> KMOOC 명강의 1주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="future-due">1주차 월요일 9:30 ~ 1주차 일요일 23:55</div> </td>    
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 퀴즈 응시 </td>
                    </tr>
                </tbody>
            </table>

            </div>
        </div>
        </div>
    )
}

export default KMOOC_Famouse
