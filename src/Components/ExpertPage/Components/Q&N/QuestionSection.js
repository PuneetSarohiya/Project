import React from 'react'
import qnastyles from '../../../../app/Styles/Questions.module.css'
import { Questionconstant } from '@/Constants/Constant'

function QuestionSection() {
  return (
    <div className={qnastyles['wrapper']}>
      <div>
        <p className={qnastyles['heading']}>Questions in mind?</p>
        <p className={qnastyles['subheading']}>Read our FAQ</p>  
        <div className={qnastyles['seperator-container']}>
        <div  className={qnastyles['seperator']} />  
        </div>

        {
          Questionconstant.map((item,index)=> (
            <div className={qnastyles['question-box']}>
            <span className={qnastyles['question-heading']}>{item.heading}</span>
            <span className={qnastyles['question-heading']}>+</span>
           </div>
          ))
        }

      </div>
    </div>
  )
}

export default QuestionSection
