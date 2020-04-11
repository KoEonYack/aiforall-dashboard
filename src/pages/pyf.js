import React from 'react'

function pyf() {
    return (
        <div>
            <div className="block-header">
                <div className="block-title">3-3. [종료] Py4e 과제 제출 일정</div>
            </div>
            <div className="end">
                <div className="block-content end">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col" class="table-head-data">이름</th>
                            <th scope="col" class="table-head-data">내용</th>
                            <th scope="col" class="table-head-data">Due</th>
                            <th scope="col" class="table-head-data">제출방법</th>
                            <th scope="col" class="table-head-data">제출란</th>
                        </tr>
                        </thead>
                        <tbody class="table-head-data">
                            <tr>
                                <th scope="col" class="table-head-data">Py4e Ch2</th> 
                                <td scope="col" class="table-head-data"> 3: Variables, expressions, and statements 수강 후 <br/>
                                                                        Exercise 2.3 풀고 Piazza에 업로드
                                </td> 
                                <td scope="col" class="table-head-data over-due">2주차 토요일(3/14) 23:55</td>     
                                <td scope="col" class="table-head-data"><a href="https://piazza.com/class/k7222vwq8y61ni?cid=62">[공지] py4e 제출 방법 </a></td>  
                                <td scope="col" class="table-head-data"><a href="https://piazza.com/class/k7222vwq8y61ni?cid=67">[제출] Py4e HW1 [Check]</a> </td>    
                            </tr>
                        </tbody>
                    </table>
                    - Py4e Ch2 Exercise 과제를 끝으로 Py4e 과제는 없습니다. 자유롭게 자습하세요~ <br/>
                    - Py4e Ch2 Exercise 과제는 점수에 들어갑니다.
                </div>
            </div>
        </div>
    )
}

export default pyf
