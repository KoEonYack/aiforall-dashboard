import React from 'react'

function Extra() {
    return (
        <div>
            <div>
            <div className="block-header">
                    <div className="block-title"> 3. Extra 과제 </div>
            </div>
            <div className="block-content">
            <p>
                - <a href="https://piazza.com/class/ke5chv2120x1e3?cid=189" target="_blank">Extra points (파이썬 문제풀기)</a>를 참고하시면 Extra point 획득 방법에 대해 알 수 있습니다! :) <br/>
                - n주차의 Extra 과제는 n+1주차 월요일 23:55까지가 과제 Due date입니다. <br/>
                - 문제 풀이 사이트: <a href="https://wikidocs.net/book/922" target="_blank"> 초보자를 위한 파이썬 300제</a>
            </p><br/>

            <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" class="table-head-data">주차</th>
                    <th scope="col" class="table-head-data">수업에서 배운 파이썬 개념</th>
                    <th scope="col" class="table-head-data">풀어야할 문제 범위</th>
                    <th scope="col" class="table-head-data">과제 Due</th>
                    <th scope="col" class="table-head-data">제출방법</th>
                  </tr>
                </thead>
                <tbody class="table-head-data">
                    <tr>
                        <th> 3주차 </th>
                        <td> 파이썬 자료형 (data types) </td>
                        <td> 01번 ~ 20번 <br/> (파이썬 시작하기, 파이썬 변수) </td>
                        <td> <div class="over-due">9/19(토) 23:55</div> </td>    
                        <td> Piazza - Extra-HW1 폴더에 문제 풀이 파일 업로드 </td>
                    </tr>
                    <tr>
                        <th> 4주차 </th>
                        <td> 파이썬 반복문 (Iteration) </td>
                        <td> 131번 ~ 200번 <br/> (파이썬 반복문) </td>
                        <td> <div class="over-due">9/28(월) 23:55</div> </td>    
                        <td> <a href="https://piazza.com/class/ke5chv2120x1e3?cid=227" target="_blank">[제출] Extra-HW2 제출</a> </td>
                    </tr>
                    <tr>
                        <th> 5주차 </th>
                        <td> 파이썬 함수 (Function) </td>
                        <td> 201번 ~ 240번 <br/> (파이썬 함수) </td>
                        <td> <div class="over-due">10/5(월) 23:55</div> </td>    
                        <td> <a href="https://piazza.com/class/ke5chv2120x1e3?cid=317" target="_blank">[제출] Extra-HW3 제출</a> </td>
                    </tr>
                    <tr>
                        <th> 6주차 </th>
                        <td> 파이썬 문자열 (String) </td>
                        <td> 21번 ~ 50번 <br/> (파이썬 문자열) </td>
                        <td> <div class="in-due">10/12(월) 23:55</div> </td>    
                        <td> <a href="https://piazza.com/class/ke5chv2120x1e3?cid=383" target="_blank">[제출] Extra-HW4 제출</a> </td>
                    </tr>
                </tbody>
            </table>

            </div>
        </div>
        </div>
    )
}

export default Extra