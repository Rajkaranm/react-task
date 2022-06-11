import React from 'react'
import "./comment.css"

export default function Comment(props) {
  return (
    <div className='comment'>
        <div className="commentWrapper">
            <div className="commentProfilePicture">
                <img style={props.isActive ? { border: '4px solid #008ae6'} : {}} className="commentImg" src="rahul.jpeg" alt="" />
            </div>
            <div className="commentTexts">
                <div className="commentTextsName">
                    Rahul Gupta
                <span className="CommentsTextDate">2 months ago</span>
                </div>
                
                <div className="commentText">
                    This is great post
                </div>
            </div>
        </div>

    </div>
  )
}
