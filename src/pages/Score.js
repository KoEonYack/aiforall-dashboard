import React from 'react'

function Score() {
    return (
        <div>
            <div className="block-header">
                <div className="block-title">5. 종료 과제 및 점수 공지 현황</div>
            </div>
            <div className="block-content">
            <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" class="table-head-data">이름</th>
                    <th scope="col" class="table-head-data">점수 공지 링크</th>
                    <th scope="col" class="table-head-data">점수 공지 날짜</th>
                  </tr>
                </thead>
                <tbody class="table-head-data">
                    <tr>
                        <th scope="col" class="table-head-data"> HW1. HW2 </th>   
                        <td scope="col" class="table-head-data"> <a href="https://piazza.com/class/k7222vwq8y61ni?cid=211">[점수] HW1, HW2 점수를 공지합니다.</a> </td>  
                        <th scope="col" class="table-head-data"> 20.03.11 AM 02:50 </th>   
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data"> HW3, HW4, Py4e 1, KMOOC 1주차 </th>   
                        <td scope="col" class="table-head-data"> <a href="https://piazza.com/class/k7222vwq8y61ni?cid=345">[점수] HW3, HW4, Py4e 1, KMOOC 1주차 점수를 공지합니다.</a> </td>  
                        <th scope="col" class="table-head-data"> 20.03.17 AM 01:50 </th>   
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data"> HW5, HW6, K-MOOC 2주차 </th>   
                        <td scope="col" class="table-head-data"> <a href="https://piazza.com/class/k7222vwq8y61ni?cid=441">[점수] HW5, HW6, K-MOOC 2주차 점수를 공지합니다. </a></td>  
                        <th scope="col" class="table-head-data"> 20.03.23 AM 01:30  </th>   
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data"> HW7, K-MOOC 3주차 </th>   
                        <td scope="col" class="table-head-data"> <a href="https://piazza.com/class/k7222vwq8y61ni?cid=441">[점수] HW7, K-MOOC 3주차 점수를 공지합니다. </a></td>  
                        <th scope="col" class="table-head-data"> 20.03.31 PM 16:00  </th>   
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data"> HW8, HW9, K-MOOC 4주차 </th>   
                        <td scope="col" class="table-head-data"> <a href="https://piazza.com/class/k7222vwq8y61ni?cid=441">[점수] HW8, HW9, K-MOOC 4주차 점수를 공지합니다.</a></td>  
                        <th scope="col" class="table-head-data"> 20.04.07 AM 07:50  </th>   
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data"> HW10, HW11, HW12, K-MOOC 5주차 </th>   
                        <td scope="col" class="table-head-data"> <a href="https://piazza.com/class/k7222vwq8y61ni?cid=702">[점수] HW10, HW11, HW12, K-MOOC 5주차 점수를 공지합니다.</a></td>  
                        <th scope="col" class="table-head-data"> 20.04.14 AM 01:04  </th>   
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data"> KMOOC 6주차, 7주차 명강의 </th>   
                        <td scope="col" class="table-head-data"> <a href="https://piazza.com/class/k7222vwq8y61ni?cid=727">[점수] KMOOC 6주차, 7주차 명강의 점수를 공지합니다.</a></td>  
                        <th scope="col" class="table-head-data"> 20.04.28 PM 00:26  </th>   
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data"> KMOOC 7주차, 8주차 명강의</th>   
                        <td scope="col" class="table-head-data"> <a href="https://piazza.com/class/k7222vwq8y61ni?cid=843">[점수] KMOOC 7주차, 8주차 명강의 점수를 공지합니다.</a></td>  
                        <th scope="col" class="table-head-data"> 20.05.09 PM 06:50  </th>   
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data"> HW13(기말고사)</th>   
                        <td scope="col" class="table-head-data"> <a href="https://piazza.com/class/k7222vwq8y61ni?cid=847">[점수] HW13 점수 공지를 공지합니다.</a></td>  
                        <th scope="col" class="table-head-data"> 20.05.10 AM 05:00  </th>   
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data"> KMOOC 인공지능 퀴즈 </th>   
                        <td scope="col" class="table-head-data"> 공개 완료</td>  
                        <th scope="col" class="table-head-data"> - </th>   
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data"> KMOOC 명강의 퀴즈 </th>   
                        <td scope="col" class="table-head-data"> 학기말에 일괄 공지 </td>  
                        <th scope="col" class="table-head-data"> 16주차 예정 </th>   
                    </tr>
                    
                </tbody>
            </table>
            - 시험, 과제 점수 문의는 <mark>공개 이후 72시간내 해주세요.</mark> 이후 문의 및 성적 정정은 어렵습니다.   <br/>
            - 제출 기간 이후 24시간 이내 제출 시 25% 감점. 48시간 이내 제출 시 50% 감점입니다. 모든 과제 동일합니다.   <br/>
            - KMOOC는 응시 직후 자신의 점수를 확인할 수 있기에 학기말에 최종 점수를 일괄 발표합니다.

            </div>
        </div>
    )
}

export default Score
