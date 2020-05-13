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
                            <th scope="col" class="table-head-data">주차</th>
                            <th scope="col" class="table-head-data">강의명</th>
                            <th scope="col" class="table-head-data">강의 공지 및 과제안내</th>
                            <th scope="col" class="table-head-data">과제 Due</th>
                            <th scope="col" class="table-head-data">과제 제출란</th>
                        </tr>
                    </thead>
                    <tbody className="table-head-data">
                        <tr>
                            <th scope="row" class="table-head-data">1주차 화 (3/03)</th>
                            <td>
                                <a href="https://youtu.be/AQrsOyl7-U8">모인활 강의 1주차 안내</a><br/>
                                <a href="https://www.youtube.com/watch?v=lmXxSkkoWSc&feature=youtu.be">01CrushPython Overview1</a><br/>
                                <a href="https://youtu.be/dv7-iI3_4FM">01CrushPython Overview2</a><br/>
                                <a href="https://www.youtube.com/watch?v=4vhngnrWGi4">01CrushPython Overview3</a><br/>
                            </td>
                            <td>
                                <a href="https://youtu.be/dv7-iI3_4FM">00 CrushPython Overview1, 2, 3 ... </a><br/>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=21">[3/3] 출석체크 방법과 숙제</a><br/>
                            </td>
                            <td class="over-due">3/05 23:55</td>
                            <td>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=24">[제출] HW1 제출</a>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" class="table-head-data ">1주차 금 (3/06)</th>
                            <td>
                                <a href="https://youtu.be/E7WCMCk1Zl0">02CrushPython Shell</a> <br/>
                                <a href="https://www.youtube.com/watch?v=HcP_GtQSrWc">02CrushPython DataTypes</a> <br/>
                                <a href="https://vimeo.com/395616874?ref=em-share">Github 이용시 주의사항</a>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=73"> [3/6출첵] 01Overview.ipynb has been added ... </a> <br/>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=121"> [3/6강의와 과제] 02CrushPython DataTypes ... </a>
                            </td>
                            <td>
                                <div class="over-due">3/06 23:55</div>
                                <div class="over-due">3/11 23:55</div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=94">[제출] HW2 제출</a> <br/>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=137">[제출] HW3 제출</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">2주차 화 (3/10)</th>
                            <td>KMOOC 1주차 강의 수강</td>
                            <td>KMOOC 1주차 모든 퀴즈 응시</td>
                            <td><div class="over-due">3/16 23:55</div></td>
                            <td>기간 내 퀴즈 응시하면 출석</td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data" >2주차 금 (3/13)</th>
                            <td><a href="https://hducc.handong.edu/em/5e69146ccd228">03CrushPython Iteration</a> </td>
                            <td><a href="https://piazza.com/class/k7222vwq8y61ni?cid=239">[3/13출첵/강의/숙제] 03CrushPython...</a>
                            </td>
                            <td>
                            <div class="over-due">3/13 23:55</div>
                            <div class="over-due">3/18 23:55</div>
                            </td>
                            <td>
                            <a href="https://piazza.com/class/k7222vwq8y61ni?cid=240">[제출] HW4 출석과제 제출</a> <br/>
                            <a href="https://piazza.com/class/k7222vwq8y61ni?cid=261">[제출] HW5 과제 제출</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">3주차 화 (3/17)</th>
                            <td>KMOOC 2주차 강의 수강</td> 
                            <td>KMOOC 2차 모든 퀴즈 응시</td>  
                            <td><div class="over-due">3/23 23:55</div></td>
                            <td>기간 내 퀴즈 응시하면 출석</td> 
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">3주차 금 (3/17)</th>
                            <td>
                                <a href="https://www.youtube.com/watch?v=ub4mYMZQeIs&feature=youtu.be">04CrushPython Strings</a>
                            </td> 
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/04Strings.ipynb">[Github] 04Strings.ipynb </a>
                            </td>  
                            <td>
                                <div class="over-due">3/20 23:55</div>
                                <div class="over-due">3/25 23:55</div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=374">[제출] HW6 출석과제 제출</a> <br/>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=375">[제출] HW7 과제 제출</a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th scope="row" class="table-head-data">4주차 화 (3/24)</th>
                            <td>KMOOC 3주차 강의 수강</td>
                            <td>KMOOC 3주차 모든 퀴즈 응시</td>  
                            <td><div class="over-due">3/30 23:55</div></td>
                            <td>기간 내 퀴즈 응시하면 출석</td> 
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">4주차 금 (3/27)</th>
                            <td>
                                <a href="https://www.youtube.com/watch?v=qg9iCMSSk4g&feature=youtu.be">05 CrushPython List</a>
                            </td> 
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/05List.ipynb">[Github] 05List.ipynb</a>
                            </td>  
                            <td>
                                <div class="over-due">4/03 23:55</div>
                            </td>
                            <td>
                                출석과제 없음 <br/>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=480">[제출] HW8 과제 제출 </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">5주차 화 (3/31)</th>
                            <td>
                                KMOOC 4주차 강의 수강
                            </td> 
                            <td>
                                KMOOC 4주차 모든 퀴즈 응시
                            </td> 
                            <td>
                                <div class="over-due">4/06 23:55</div>
                            </td>
                            <td>
                                기간 내 퀴즈 응시하면 출석
                            </td> 
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">5주차 금 (4/03)</th>
                            <td>
                                <a href="https://www.youtube.com/watch?v=G3dEN4MAmxk&feature=youtu.be">06 CrushPython ListComprehension</a>
                            </td> 
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/06ListCom.ipynb">[Github] 06ListCom.ipynb</a>
                            </td>  
                            <td>
                                <div class="over-due">4/03 23:55</div>
                                <div class="over-due">4/08 23:55</div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=491">[제출] HW9 출석과제 제출</a> <br/>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=492">[제출] HW10 과제 제출 </a> 
                            </td> 
                        </tr>
                        <tr>
                        <th scope="row" class="table-head-data">6주차 화 (4/07)</th>
                            <td>
                                KMOOC 5주차 강의 수강
                            </td>
                            <td>
                                KMOOC 5주차 모든 퀴즈 응시
                            </td> 
                            <td>
                                <div class="over-due">4/13 23:55</div>
                            </td>
                            <td>
                                기간 내 퀴즈 응시하면 출석
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">6주차 금 (4/10)</th>
                            <td>
                                <a href="https://youtu.be/vLom_ni7HRI">07 CrushPython Functions</a>
                            </td> 
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/09Functions.ipynb">[Github] 09Functions.ipynb</a>
                            </td>  
                            <td>
                                <div class="over-due">4/10 23:55</div>
                                <div class="over-due">4/13 23:55</div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=621">[제출] HW11 출석과제 제출</a> <br/>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=622">[제출] HW12 과제 제출 </a> 
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">7주차 화 (4/14)</th>
                            <td>
                                KMOOC 6주차 강의 수강
                            </td>
                            <td>
                                KMOOC 6주차 모든 퀴즈 응시
                            </td> 
                            <td>
                                <div class="over-due">4/20 23:55</div>
                            </td>
                            <td>
                                기간 내 퀴즈 응시하면 출석
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">7주차 금 (4/17)</th>
                            <td>
                                <a href="">08 CrushPython MontyHall Problem</a>
                            </td> 
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/08MontyHall.ipynb">[Github] 08MontyHall.ipynb</a>
                            </td>  
                            <td>
                                <div class="over-due">5/02 23:55</div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=712">[제출] HW13 과제 제출</a><br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">8주차 화 (4/21)</th>
                            <td>
                                KMOOC 7주차 명강의만 수강
                            </td>
                            <td>
                                KMOOC 7주차 명강의 퀴즈만 응시
                            </td> 
                            <td>
                                <div class="over-due">4/27 23:55</div>
                            </td>
                            <td>
                                기간 내 퀴즈 응시하면 출석
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">8주차 금 (4/24)</th>
                            <td>
                                휴강입니다.
                            </td>
                            <td>
                               3Blue1Brown 강의 
                               <a href="https://youtu.be/aircAruvnKk"> [1강] </a>
                               <a href="https://youtu.be/IHZwWFHWa-w"> [2강] </a>
                               <a href="https://youtu.be/Ilg3gGewQ5U"> [3강] </a>
                               <a href="https://youtu.be/Ilg3gGewQ5U"> [4강] </a>
                            </td> 
                            <td>
                                <div class="over-due">내용이 어려우니 시간날 때 미리 시청</div>
                            </td>
                            <td>
                                자발적으로 강의 수강
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">9주차 화 (4/28)</th>
                            <td>
                                [마지막] KMOOC 7주차 인공지능 <br/> KMOOC 8주차 명강의 수강
                            </td>
                            <td>
                                [마지막] KMOOC 7주차 인공지능 퀴즈 <br/>
                                KMOOC 8주차 명강의 퀴즈 응시
                            </td> 
                            <td>
                                <div class="over-due">5/04 23:55</div>
                                <div class="over-due">5/04 23:55</div>
                            </td>
                            <td>
                                기간 내 퀴즈 응시하면 출석
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">9주차 금 (5/01)</th>
                            <td>
                                3Blue1Brown                                
                                <a href="https://youtu.be/aircAruvnKk"> [1강] </a>
                               <a href="https://youtu.be/IHZwWFHWa-w"> [2강] </a>
                               <a href="https://youtu.be/Ilg3gGewQ5U"> [3강] </a>
                               <a href="https://youtu.be/Ilg3gGewQ5U"> [4강] </a>
                            </td>
                            <td>
                                x
                            </td> 
                            <td>
                                <div class="over-due">x</div>
                            </td>
                            <td>
                                과제 없음
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">10주차 화 (5/05)</th>
                            <td>
                                KMOOC 9주차 명강의 수강 <br />
                                Tensorflow PART1
                            </td>
                            <td>
                                KMOOC 9주차 명강의 퀴즈 응시 <br />
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=771"> Tensorflow PART 1 </a>
                            </td> 
                            <td>
                                <div class="over-due">5/11 23:55</div>
                                <div class="over-due">5/05 23:55</div>
                            </td>
                            <td>
                                기간 내 퀴즈 응시 <br />
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=772">[제출] HW14 출석과제 제출</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">10주차 금 (5/08)</th>
                            <td>
                                Tensorflow PART2 
                            </td>
                            <td>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=808"> Tensorflow PART2 </a>
                            </td> 
                            <td>
                                <div class="over-due">5/08 23:55</div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=809">[제출] HW15 출석과제 제출</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">11주차 화 (5/12)</th>
                            <td>
                                KMOOC 10주차 명강의 수강 <br />
                                프로젝트 진행 방법 안내(TA 고언약)
                            </td>
                            <td>
                                - <br />
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=854">[공지] 11주차 화요일 강의노트</a>
                            </td> 
                            <td>
                                <div class="in-due">5/18 23:55</div>
                                <div class="over-due">5/12 10:55</div>
                            </td>
                            <td>
                                기간 내 퀴즈 응시 <br />
                                생방송
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">11주차 금 (5/15)</th>
                            <td>
                                기말고사
                            </td>
                            <td>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=841">[공지] 기말고사 안내</a>
                            </td> 
                            <td>
                                <div class="in-due">5/15 10:00</div>
                            </td>
                            <td>
                                시험응시하면 출석
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">12주차 ~ 14주차</th>
                            <td>
                                KMOOC 11~13주차 명강의 수강 <br />
                                프로젝트 진행기간
                            </td>
                            <td>
                                - <br />
                                4. 프로젝트 항목 참조
                            </td> 
                            <td>
                                <div class="future-due">12주차 ~ 14주차</div>
                                -
                            </td>
                            <td>
                                기간 내 퀴즈 응시 <br />
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=855">프로젝트 일정안내</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">15주차</th>
                            <td>
                                프로젝트 발표
                            </td>
                            <td>
                                TBA
                            </td> 
                            <td>
                                <div class="future-due">-</div>
                            </td>
                            <td>
                                -
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-head-data">16주차</th>
                            <td>
                                종강
                            </td>
                            <td>
                                성적 산출 및 정정
                            </td> 
                            <td>
                                <div class="future-due">-</div>
                            </td>
                            <td>
                                -
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Lectures
