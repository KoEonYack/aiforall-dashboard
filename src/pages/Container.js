import React from 'react'
import Lectures from './Lectures'
import Announce from './Announce'
import KMOOC_Famouse from './KMOOC_Famouse'
import KMOOC_AI from './KMOOC_AI'
import PYF from './pyf'
import Project from './Project'
import Score from './Score'
import Bible from './Bible'
import Footer from './Footer'
import Button from './Button'


function Container() {
    return (
        <div>
            <div className="border-box">
                {/* <Button /> */}
                <Lectures />
                <KMOOC_AI />
                <KMOOC_Famouse />
            </div>
            <Footer />
        </div>

    )
}

export default Container
