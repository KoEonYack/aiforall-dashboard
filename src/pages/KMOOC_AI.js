import React from 'react'

function KMOOC_AI() {
    return (
        <div>
            <div className="block-header">
                <div className="block-title">2-1. KMOOC 인공지능 퀴즈 응시 일정</div>
            </div>
            <div className="block-content">
                <p>- <a href="https://piazza.com/class/ke5chv2120x1e3?cid=19" target="_blank">[공지] KMOOC 인공지능 Part 수강법에 대해서 알려드립니다.</a>에서 응시 방법을 확인하세요!</p>
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
                            <th scope="col" class="table-head-data"> KMOOC 인공지능 1주차 퀴즈</th>   
                            <td scope="col" class="table-head-data"> <div class="over-due">1주차 월요일 9:30 ~ 1주차 일요일 23:55</div> </td>    
                            <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 퀴즈 응시 </td>    
                        </tr>
                        <tr>
                            <th scope="col" class="table-head-data"> KMOOC 인공지능 2주차 퀴즈</th>   
                            <td scope="col" class="table-head-data"> <div class="over-due">2주차 월요일 9:30 ~ 2주차 일요일 23:55</div> </td>    
                            <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 퀴즈 응시 </td>    
                        </tr>
                        <tr>
                            <th scope="col" class="table-head-data"> KMOOC 인공지능 3주차 퀴즈</th>   
                            <td scope="col" class="table-head-data"> <div class="over-due">3주차 월요일 9:30 ~ 3주차 일요일 23:55</div> </td>    
                            <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 퀴즈 응시 </td>    
                        </tr>
                        <tr>
                            <th scope="col" class="table-head-data"> KMOOC 인공지능 4주차 퀴즈</th>   
                            <td scope="col" class="table-head-data"> <div class="in-due">4주차 월요일 9:30 ~ 4주차 일요일 23:55</div> </td>    
                            <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 퀴즈 응시 </td>    
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default KMOOC_AI
