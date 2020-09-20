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
                                <a href="https://hducc.handong.edu/em/5f49b5de8503" target="_blank">01 강의계획(Syllabus), 출첵</a> <br/>
                                <a href="https://hducc.handong.edu/em/5f49b2830a6f9" target="_blank">02 1주차 안내(개발 환경)</a> <br/>
                                <a href="https://hducc.handong.edu/em/5f49b4fcbd6a5" target="_blank">03 Git, GitHub, GitHub Desktop 사용법</a> <br/>
                            </td>
                            <td>
                                1. 현재 Dashboard의 [Welcome!]의 '미리 준비해야하는 사항들' 준비<br/>
                                2. <a href="https://piazza.com/class/ke5chv2120x1e3?cid=8">Do the first things during the first week</a><br/> 
                            </td>
                            <td className="over-due">9/01 23:55</td>
                            <td>
                                Due 안에 Piazza 가입, 등록 시 출석 인정
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">1주차 금 (9/04)</th>
                            <td>
                                <a href="http://www.kmooc.kr/courses/course-v1:HGUk+HGU05+2020_T2/course/" target="_blank">KMOOC 1주차 강의 수강</a> <br/>
                            </td>
                            <td>
                                KMOOC 1주차 모든 퀴즈 응시<br/>
                            </td>
                            <td className="over-due">9/06 23:55</td>
                            <td>
                                기간 내 퀴즈 응시하면 출석 및 과제 인정
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">2주차 화 (9/08)</th>
                            <td>
                                <a href="https://www.youtube.com/watch?v=_G8cdbxNxBM&feature=youtu.be" target="_blank">AI 1-1 Getting Started</a> <br/>
                                <a href="https://www.youtube.com/watch?v=6qSN2rj5O9I&feature=youtu.be" target="_blank">AI 1-2 Jupyter Notebook</a> <br/>
                                <a href="https://www.youtube.com/watch?v=3scSkDX2kcM&feature=youtu.be" target="_blank">AI 1-3 Markdown (HW1)</a> <br/>
                                <a href="https://www.youtube.com/watch?v=ChzYKt20JKM&feature=youtu.be" target="_blank">Py01 Python Overview (CH1)</a> <br/>
                            </td>
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai1-1gettingstarted.ipynb" target="blank"> [GitHub] ai1-1gettingstarted.ipynb </a><br/>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai1-2jupyternotebook.ipynb" target="blank"> [GitHub] ai1-2jupyternotebook.ipynb </a><br/>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai1-3markdown.ipynb" target="blank"> [GitHub] ai1-3markdown.ipynb </a><br/>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/py01overview.ipynb" target="blank"> [GitHub] py01overview.ipynbs </a><br/>
                            </td>
                            <td>
                                <div className="over-due">[출첵] 9/08 23:55 </div>
                                <div className="over-due">[과제] 9/10 23:55 </div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=42" target="_blank"> [제출] CH1 제출 </a> <br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=44" target="_blank"> [제출] HW1 제출 </a> <br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">2주차 금 (9/11)</th>
                            <td>
                                <a href="http://www.kmooc.kr/courses/course-v1:HGUk+HGU05+2020_T2/course/" target="_blank">KMOOC 2주차 강의 수강</a> <br/>
                            </td>
                            <td>
                                KMOOC 2주차 모든 퀴즈 응시<br/>
                            </td>
                            <td className="over-due">9/13 23:55</td>
                            <td>
                                기간 내 퀴즈 응시하면 출석 및 과제 인정
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">3주차 화 (9/15)</th>
                            <td>
                                <a href="https://www.youtube.com/watch?v=SdKjMIKJa-0&feature=youtu.be" target="_blank">py02-1 Data Types (CH2)</a> <br/>
                                <a href="https://www.youtube.com/watch?v=iFKjNdC3BKM&feature=youtu.be" target="_blank">py02-2 Data Types (CH2, HW2)</a> <br/>
                            </td>
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/py02datatypes.ipynb"> [GitHub] py02datatypes.ipynbs </a><br/>
                                
                            </td>
                            <td>
                                <div className="over-due">[출첵] 9/15 23:55 </div>
                                <div className="in-due">[과제] 9/21 23:55 </div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=136" target="_blank"> [제출] CH2 제출 </a> <br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=137" target="_blank"> [제출] HW2 제출 </a> <br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">3주차 금 (9/18)</th>
                            <td>
                                <a href="http://www.kmooc.kr/courses/course-v1:HGUk+HGU05+2020_T2/course/" target="_blank">KMOOC 3주차 강의 수강</a> <br/>
                            </td>
                            <td>
                                KMOOC 3주차 모든 퀴즈 응시<br/>
                            </td>
                            <td className="over-due">9/20 23:55</td>
                            <td>
                                기간 내 퀴즈 응시하면 출석 및 과제 인정
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">4주차 화 (9/22)</th>
                            <td>
                                <a href="https://www.youtube.com/watch?v=Kbdb6BxxX2o&feature=youtu.be" target="_blank">py03 Iteration (CH3, HW3)</a> <br/>
                            </td>
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/py03Iteration.ipynb"> [GitHub] py03Iteration.ipynb </a><br/> 
                            </td>
                            <td>
                                <div className="in-due">[출첵] 9/22(화) 23:55 </div>
                                <div className="in-due">[과제] 9/26(토) 23:55 </div>
                            </td>
                            <td>
                                <a href="" target="_blank"> [제출] CH3 제출 </a> <br/>
                                <a href="" target="_blank"> [제출] HW3 제출 </a> <br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">4주차 금 (9/25)</th>
                            <td>
                                <a href="http://www.kmooc.kr/courses/course-v1:HGUk+HGU05+2020_T2/course/" target="_blank">KMOOC 4주차 강의 수강</a> <br/>
                            </td>
                            <td>
                                KMOOC 4주차 모든 퀴즈 응시<br/>
                            </td>
                            <td className="in-due">9/27(일) 23:55</td>
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
