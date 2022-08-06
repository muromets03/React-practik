import React from 'react';

const CiaoHeading = (props) => {
    const {content, className, title}=props
    return (
        <div>
            <h1 className={className} title={title}>
          {content}
        </h1>
        </div>
    );
}

export default CiaoHeading;
