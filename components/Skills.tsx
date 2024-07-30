import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteCards';
import { skills } from '@/data';

const Skills=()=> {
  return (
    <section id="skills">
    <div className=" py-20 w-full flex flex-col items-center">
    <h1 className="heading py-10 lg:max-w-[45vw]">
     My <span className="text-purple">skills</span>
    </h1>
    <InfiniteMovingCards
        items={skills}
        direction = "left"
        speed = "normal" />
    </div>
    </section>
  )
}


export default Skills;