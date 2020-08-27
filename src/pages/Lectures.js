import React from 'react'

function Lectures() {
    return (
        <div>
            <div className="block-header">
                <div className="block-title">1. 강의 진행 현황</div>
            </div>
            <div className="block-content">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className="table-head-data">주차</th>
                            <th scope="col" className="table-head-data">강의명</th>
                            <th scope="col" className="table-head-data">강의 공지 및 과제안내</th>
                            <th scope="col" className="table-head-data">과제 Due</th>
                            <th scope="col" className="table-head-data">과제 제출란</th>
                        </tr>
                    </thead>
                    <tbody className="table-head-data">
                        <tr>
                            <th scope="row" className="table-head-data">1주차 화 (9/01)</th>
                            <td>
                                <a href="https://youtu.be/AQrsOyl7-U8">미정</a> <br/>
                            </td>
                            <td>
                                <a href="https://youtu.be/dv7-iI3_4FM">미정</a><br/>
                            </td>
                            <td className="future-due">미정 23:55</td>
                            <td>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=24">미정</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">1주차 금 (9/04)</th>
                            <td>
                                <a href="http://www.kmooc.kr/courses/course-v1:HGUk+HGU05+2020_T2/course/">KMOOC 1주차 강의 수강</a> <br/>
                            </td>
                            <td>
                                >KMOOC 1주차 모든 퀴즈 응시<br/>
                            </td>
                            <td className="future-due">9/06 23:55</td>
                            <td>
                                기간 내 퀴즈 응시하면 출석 및 과제 인정
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Lectures
