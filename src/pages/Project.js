import React from 'react'

function Project() {
    return (
        <div>
            <div className="block-header">
                <div className="block-title">2. 프로젝트</div>
            </div>
            <div className="block-content">
                - <a href="https://github.com/idebtor/JoyAI/blob/master/project_sample/2019-1ProjectSamples.md"> 19-1 모인활  프로젝트 모음</a> <br/>
                - <a href="https://github.com/idebtor/JoyAI/blob/master/project_sample/2019-2ProjectSamples.md"> 19-2 모인활  프로젝트 모음</a>

                <div>
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col" class="table-head-data">항목</th>
                            <th scope="col" class="table-head-data">안내</th>
                            <th scope="col" class="table-head-data">제출</th>
                            <th scope="col" class="table-head-data">Due</th>
                        </tr>
                        </thead>
                        <tbody class="table-head-data">
                            <tr>
                                <th scope="col" class="table-head-data">예비 보고서</th> 
                                <td scope="col" class="table-head-data">
                                    <a href="https://piazza.com/class/k7222vwq8y61ni?cid=856">[공지] 예비보고서 작성법</a>
                                </td>
                                <td scope="col" class="table-head-data">
                                    <a href="https://piazza.com/class/k7222vwq8y61ni?cid=857">[공지] 예비보고서 제출란</a>
                                </td>    
                                <td scope="col" class="table-head-data in-due">12주차 금(5/22) 11:55 PM </td>     
                            </tr>
                            <tr>
                                <th scope="col" class="table-head-data">최종 보고서</th> 
                                <td scope="col" class="table-head-data"><a href="">-</a></td>     
                                <td scope="col" class="table-head-data"><a href="">-</a></td>     
                                <td scope="col" class="table-head-data future-due">15주차 화(6/09) 11:30 AM</td>     
                            </tr>
                            <tr>
                                <th scope="col" class="table-head-data">동료평가</th> 
                                <td scope="col" class="table-head-data"><a href="">-</a></td>     
                                <td scope="col" class="table-head-data"><a href="">-</a></td>     
                                <td scope="col" class="table-head-data future-due">15주차 화(6/09) 11:30 AM 이후 ~ 15주차 목(6/12) 11:30 AM </td>     
                            </tr>


                        </tbody>
                    </table>    
            </div>






            </div>
        </div>
    )
}

export default Project
