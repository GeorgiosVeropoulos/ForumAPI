import React from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { BsFillSpeakerFill, BsFillPencilFill } from 'react-icons/bs'

const CategoryIcon = ({ postCategory }) => {
    switch (postCategory) {
        case 0:
            return <AiFillQuestionCircle />
        case 1:
            return <BsFillSpeakerFill />
        case 2:
            return <BsFillPencilFill />
}
}

export default CategoryIcon