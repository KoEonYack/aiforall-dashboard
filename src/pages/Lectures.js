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
                            <th scope="row" className="table-head-data">1주차 화 (3/03)</th>
                            <td>
                                <a href="https://youtu.be/AQrsOyl7-U8">모인활 강의 1주차 안내</a> <br/>
                                <a href="https://www.youtube.com/watch?v=lmXxSkkoWSc&feature=youtu.be">01CrushPython Overview1</a> <br/>
                                <a href="https://youtu.be/dv7-iI3_4FM">01CrushPython Overview2</a><br/>
                                <a href="https://www.youtube.com/watch?v=4vhngnrWGi4">01CrushPython Overview3</a> <br/>
                            </td>
                            <td>
                                <a href="https://youtu.be/dv7-iI3_4FM">00 CrushPython Overview1, 2, 3 ... </a><br/>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=21">[3/3] 출석체크 방법과 숙제</a><br/>
                            </td>
                            <td className="future-due">3/05 23:55</td>
                            <td>
                                <a href="https://piazza.com/class/k7222vwq8y61ni?cid=24">[제출] HW1 제출</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Lectures
