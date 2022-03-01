import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {
    const remove = () => {
        props.remove(props.post)
        
    }

    return (
        <div className="post">
            <div className="post__content">
                <div className="something">
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={remove}>
                        Удалить
                    </MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem