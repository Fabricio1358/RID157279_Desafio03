import React from 'react';
import './blog_Home.css';

const BlogHome: React.FC = (): JSX.Element => {
    return (
        <div className="container">
            <div className="box-container">
                <div className="box">Caixa 1</div>
                <div className="box">Caixa 2</div>
            </div>
        </div>
    );
};

export default BlogHome;