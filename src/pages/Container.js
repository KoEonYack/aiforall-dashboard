import React from 'react'
import Lectures from './Lectures'
import Announce from './Announce'
import KMOOC_Famouse from './KMOOC_Famouse'
import KMOOC_AI from './KMOOC_AI'
import PYF from './pyf'
import Project from './Project'



function Container() {
    return (
        <div className="border-box">
            <Lectures />
            <Announce />
            <KMOOC_Famouse />
            <KMOOC_AI />
            <PYF />
            <Project />
        </div>
    )
}

export default Container
