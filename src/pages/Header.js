import React from 'react';
import jquery from 'jquery';

function Header() {
    return (
        <section className="HeaderSection">
            <div id="progress"></div>
            <div className="PageHeader">
                <div className="LogoContainer no-drag">
                        Covenant LAB
                </div>
            </div>

            <div className="HelloMessage">
                20-Spring Semester AI For All Dashboard!
            </div>

            <div className="warp-header">
            <div className="type-wrap">
                모인활 대시보드 9주차
            </div>
            </div>


            <span class="scroll-btn">
                <a href="#">
                    <span class="mouse">
                        <span>
                        </span>
                    </span>
                </a>
                <p>scroll me</p>
            </span>


            <div className="SocialSection">
                <div className="GitIcon">
                    <a href="https://github.com/KoEonYack/">
                        <i className="fa fa-github" id="test"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Header
