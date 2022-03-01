import React, {useState} from 'react';
import PostPage from './PostPage';

const PostList = ({posts, title, remove}) => {
    const [page, setPage] = useState(1)

    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        )
    }
    const maxPosts = 10
    const pages = Math.ceil(posts.length / maxPosts)
    const massPages = []
    for(var i = 1; i < pages + 1; i++) {
        massPages.push(i)
    }

    const changePage = (e) => {
        const num = Number(e.target.innerText)
        setPage(num)
    }

    return (
        <div>
            
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <PostPage posts={posts} remove={remove} page={page} />

            <div style={{display: 'flex'}}>
                {massPages.map((item, index) =>
                    <div
                        style={
                            {marginRight: '25px', cursor: 'pointer'}
                        }
                        onClick={changePage}
                        key={index}
                     >
                        {item}
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostList