import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import PostItem from './PostItem';

const PostPage = ({posts, remove, page}) => {
    var onOnePage = posts.slice((page - 1) * 10, page * 10)

    return ( 
        <TransitionGroup>
            {onOnePage.map((post, index) =>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem remove={remove} number={(page - 1) * 10 + index + 1} post={post} />
                </CSSTransition>  
            )}
        </TransitionGroup>
    );
}
 
export default PostPage;