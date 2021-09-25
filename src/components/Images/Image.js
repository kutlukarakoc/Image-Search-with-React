import { useState, useRef, useEffect } from 'react';

const Image = ({image}) => {

    const myRef = useRef();
    const [countSpan, setCountSpan] = useState(1);
    const [fullWidth, setFullWidth] = useState(false);

    useEffect(() => {
        myRef.current.addEventListener("load", () => {
            const spanResult = Math.round(myRef.current.clientHeight / 5) + 1;
            setCountSpan(spanResult)
        });
    });

    const clickHandler = (e) => {
        setFullWidth(prevFullWidth => !prevFullWidth);
        fullWidth ? e.target.style.width = "100%" : e.target.style.width = "";
    };

    const mouseOutHandler = (e) => {
        e.target.style.width = "";
    };

    return (
        <img
            style={{ gridRowEnd: `span ${countSpan}`, transition: "300ms all ease-in-out" }}
            ref={myRef} key={image.id}
            src={image.urls.small} alt={image.alt_description}
            onClick={clickHandler}
            onMouseOut={mouseOutHandler}
        />
    );
};

export default Image;