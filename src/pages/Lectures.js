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
                                <div className="over-due">[과제] 9/21 23:55 </div>
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
                                <div className="over-due">[출첵] 9/22(화) 23:55 </div>
                                <div className="over-due">[과제] 9/26(토) 23:55 </div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=221" target="_blank"> [제출] CH3 제출 </a> <br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=222" target="_blank"> [제출] HW3 제출 </a> <br/>
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
                            <td className="over-due">9/27(일) 23:55</td>
                            <td>
                                기간 내 퀴즈 응시하면 출석 및 과제 인정
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">5주차 화 (9/29)</th>
                            <td>
                                <a href="https://www.youtube.com/watch?v=C47OtMj9MmY&feature=youtu.be" target="_blank">py04 Function (CH4, HW4)</a> <br/>
                            </td>
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/py04Function.ipynb"> [GitHub] py04 Function.ipynb </a><br/>
                            </td>
                            <td>
                                <div className="over-due">[출첵] 9/29(화) 23:55 </div>
                                <div className="over-due">[과제] 10/5(월) 23:55 </div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=310" target="_blank"> [제출] CH4 제출 </a> <br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=309" target="_blank"> [제출] HW4 제출 </a> <br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">5주차 금 (10/2)</th>
                            <td>
                                <a href="http://www.kmooc.kr/courses/course-v1:HGUk+HGU05+2020_T2/course/" target="_blank">KMOOC 5주차 강의 수강</a> <br/>
                            </td>
                            <td>
                                KMOOC 5주차 모든 퀴즈 응시<br/>
                            </td>
                            <td className="over-due">10/4(일) 23:55</td>
                            <td>
                                기간 내 퀴즈 응시하면 출석 및 과제 인정
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">6주차 화 (10/6)</th>
                            <td>
                                <a href="https://www.youtube.com/watch?v=1jzlYWTGNMU&feature=youtu.be" target="_blank">py05 Strings (CH5, HW5)</a> <br/>
                            </td>
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/py05strings.ipynb"> [GitHub] py05Strings.ipynb </a><br/>
                            </td>
                            <td>
                                <div className="over-due">[출첵] 10/7(수) 23:55 </div>
                                <div className="over-due">[과제] 10/12(월) 23:55 </div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=380" target="_blank"> [제출] CH5 제출 </a> <br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=381" target="_blank"> [제출] HW5 제출 </a> <br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">6주차 금 (10/9)</th>
                            <td>
                                <a href="http://www.kmooc.kr/courses/course-v1:HGUk+HGU05+2020_T2/course/" target="_blank">KMOOC 6주차 강의 수강</a> <br/>
                            </td>
                            <td>
                                KMOOC 6주차 모든 퀴즈 응시<br/>
                            </td>
                            <td className="over-due">10/11(일) 23:55</td>
                            <td>
                                기간 내 퀴즈 응시하면 출석 및 과제 인정
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">7주차 화 (10/13)</th>
                            <td>
                                <a href="https://www.youtube.com/watch?v=gH8o6FujOT0&feature=youtu.be" target="_blank">py06 List (CH6, HW6)</a> <br/>
                                <a href="https://www.youtube.com/watch?v=IH9Z6TBfvVw&feature=youtu.be" target="_blank">py07 List Comprehension (CH7, HW7)</a> <br/>
                            </td>
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/py06list.ipynb"> [GitHub] py06list.ipynb </a><br/>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/py07listcomp.ipynb"> [GitHub] py06listcomp.ipynb </a><br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=475" target="_blank"> midterm </a>
                            </td>
                            <td>
                                <div className="over-due">[출첵] 10/13(화) 23:55 </div>
                                <div className="over-due">[과제] 10/19(월) 23:55 </div>
                                <div className="over-due">[midterm] 10/23(금) 23:55 </div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=439" target="_blank"> [제출] CH6 제출 </a> <br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=441" target="_blank"> [제출] HW6 제출 </a> <br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=440" target="_blank"> [제출] CH7 제출 </a> <br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=442" target="_blank"> [제출] HW7 제출 </a> <br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=486" target="_blank"> [제출] midterm 제출 </a> <br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">7주차 금 (10/16)</th>
                            <td>
                                <a href="http://www.kmooc.kr/courses/course-v1:HGUk+HGU05+2020_T2/course/" target="_blank">KMOOC 7주차 강의 수강</a> <br/>
                            </td>
                            <td>
                                KMOOC 7주차 모든 퀴즈 응시<br/>
                            </td>
                            <td className="over-due">10/18(일) 23:55</td>
                            <td>
                                기간 내 퀴즈 응시하면 출석 및 과제 인정
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">8주차 화 (10/20)</th>
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai2-1%20MLintroduction.ipynb"> ai2-1 MLintroduction.ipynb </a><br/>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai2-2%20DLintroduction.ipynb"> ai2-2 DLintroduction.ipynb (AI1) </a><br/>
                                <a href="https://www.youtube.com/watch?v=4h90mwIWNvs&feature=youtu.be" target="_blank">AI3-1 NumPy Tutorial(1/3) (AI1)</a> <br/>
                            </td>
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai2-1%20MLintroduction.ipynb"> [GitHub] ai2-1 MLintroduction.ipynb </a><br/>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai2-2%20DLintroduction.ipynb"> [GitHub] ai2-2 DLintroduction.ipynb (AI1) </a><br/>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai3-1%20NumPyTutorial.ipynb"> [GitHub] ai3-1 NumPyTutorial.ipynb (AI1) </a><br/>
                            </td>
                            <td>
                                <div className="over-due">[AI1] 10/22(목) 23:55 </div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=597" target="_blank"> [AI1] 제출 </a> <br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">8주차 금 (10/23)</th>
                            <td>
                                <a href="http://www.kmooc.kr/courses/course-v1:HGUk+HGU05+2020_T2/course/" target="_blank">KMOOC 8주차 명강의 수강</a> <br/>
                                <a href="https://www.youtube.com/watch?v=ic6D9PqurfA&feature=youtu.be" target="_blank">AI3-2 NumPy Tutorial(2/3) (AI2)</a> <br/>
                                <a href="https://www.youtube.com/watch?v=1HhNSNeCmr8&feature=youtu.be" target="_blank">AI3-3 NumPy Tutorial(3/3) (AI2)</a> <br/>
                            </td>
                            <td>
                                KMOOC 8주차 명강의 퀴즈 응시<br/>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai3-2%20NumPyTutorial.ipynb"> [GitHub] ai3-2 NumPyTutorial.ipynb (AI2) </a><br/>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai3-3%20NumPyTutorial.ipynb"> [GitHub] ai3-3 NumPyTutorial.ipynb (AI2) </a><br/>
                            </td>
                            <td>
                                <div className="over-due">[KMOOC] 10/25(일) 23:55 </div>
                                <div className="over-due">[AI2] 10/26(월) 23:55 </div>     
                            </td>
                            <td>
                                기간 내 퀴즈 응시하면 출석 및 과제 인정 <br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=616" target="_blank"> [AI2] 제출 </a> <br/>   
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">9주차 화 (10/27)</th>
                            <td>
                                <a href="https://www.youtube.com/watch?v=vtszeLWdLvs&feature=youtu.be"> AI3-4 Tensor </a><br/>
                                <a href="https://www.youtube.com/watch?v=VGv5xzkgRkY&feature=youtu.be"> AI4-1 Linear Regression </a><br/>
                            </td>
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai3-4%20Tensor.ipynb"> [GitHub] ai3-4 Tensor.ipynb </a><br/>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai4-1%20LinearRegression.ipynb"> [GitHub] ai4-1 LinearRegression.ipynb </a><br/>
                            </td>
                            <td>
                                <div className="over-due">[AI3] 10/29(목) 23:55 </div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=674" target="_blank"> [AI3] 제출 </a> <br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">9주차 금 (10/30)</th>
                            <td>
                                <a href="http://www.kmooc.kr/courses/course-v1:HGUk+HGU05+2020_T2/course/" target="_blank">KMOOC 9주차 명강의 수강</a> <br/>
                                <a href="https://www.youtube.com/watch?v=doimcT-_-WE&feature=youtu.be" target="_blank">AI4-2 Gradient Descent Algorithm </a> <br/>
                                <a href="https://www.youtube.com/watch?v=VmGjbJsR3Z0&feature=youtu.be" target="_blank">AI4-3 Loss Function </a> <br/>
                            </td>
                            <td>
                                KMOOC 9주차 명강의 퀴즈 응시<br/>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai4-2%20GradientDescent.ipynb"> [GitHub] ai4-2 GradientDescent.ipynb </a><br/>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai4-3%20LossFunction.ipynb"> [GitHub] ai4-3 LossFunction.ipynb </a><br/>                               
                            </td>
                            <td>
                                <div className="over-due">[KMOOC] 11/1(일) 23:55 </div>
                                <div className="over-due">[AI4] 11/2(월) 23:55 </div>
                            </td>
                            <td>
                                기간 내 퀴즈 응시하면 출석 및 과제 인정 <br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=710" target="_blank"> [AI4] 제출 </a> <br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">10주차 화 (11/2)</th>
                            <td>
                                <a href="https://www.youtube.com/watch?v=ktfBO7A-1W4&feature=youtu.be" target="_blank"> AI4-4 Neuron Class </a><br/>
                            </td>
                            <td>
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai4-4%20NeuronClass.ipynb"> [GitHub] ai4-4 NeuronClass.ipynb </a><br/>
                            </td>
                            <td>
                                <div className="over-due">[AI5] 11/5(목) 23:55 </div>
                            </td>
                            <td>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=742" target="_blank"> [AI5] 제출 </a> <br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-head-data">10주차 금 (11/6)</th>
                            <td>
                                <a href="http://www.kmooc.kr/courses/course-v1:HGUk+HGU05+2020_T2/course/" target="_blank">KMOOC 10주차 명강의 수강</a> <br/>
                                <a href="https://www.youtube.com/watch?v=7QZ1atUpc9s&feature=youtu.be" target="_blank"> AI5-1 Perceptron and <br /> AI5-2 Sigmoid Function </a><br/>

                            </td>
                            <td>
                                KMOOC 10주차 명강의 퀴즈 응시<br/>             
                                <a href="https://github.com/idebtor/JoyAI/blob/master/ipynb/ai5-1%262%20PerceptronSigmoid.ipynb"> ai5-1&2 PerceptronSigmoid.ipynb </a><br/>                 
                            </td>
                            <td>
                                <div className="in-due">[KMOOC] 11/8(일) 23:55 </div>
                                <div className="in-due">[AI6] 11/6(금) 23:55 </div>
                            </td>
                            <td>
                                기간 내 퀴즈 응시하면 출석 및 과제 인정 <br/>
                                <a href="https://piazza.com/class/ke5chv2120x1e3?cid=765" target="_blank"> [AI6] 제출 </a> <br/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Lectures
