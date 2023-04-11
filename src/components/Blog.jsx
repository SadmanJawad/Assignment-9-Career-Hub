import React from 'react';

const Blog = () => {
    return (
        <div className='px-96 my-24 text-start'>
            <h1 className='bg-slate-400 text-xl font-semibold'>Q-1 : When should we use Context API?</h1>
            <p className='bg-slate-400'>Ans: In normal react application data is passed from top to down (parent to child) via props. But Context API provides a way to share or state between multiple components without prop drilling .</p>
            <h1 className='bg-green-400 mt-5 text-xl font-semibold'>Q-2 : What is custom hook?</h1>
            <p  className='bg-green-400'>Ans: In React, custom hook is a reusable function that can use to add special and unique function to use react application.If anyone have multiple react hooks that will be used at multiple location in a code , one should use custom React hooks.This helps making the code more readable and make the code clean.</p>
            <h1 className='bg-red-400 mt-5 text-xl font-semibold'>What is useRef()?When should we use this?</h1>
            <p className='bg-red-400'>Ans: In React, useRef is a hook that allows you to create a mutable reference that can be attached to a DOM element or any other value and persist across renders without causing the component to re-render. It enables you to directly access and modify DOM elements, as well as store values that do not require re-rendering when updated.</p>
            <h1 className='bg-yellow-300 mt-5 text-xl font-semibold'>What is useMemo()?When should we use this?</h1>
            <p className='bg-yellow-300'>Ans: useMemo is actually a hook which  memorize computation which is valuable and over the odds.It is also avoid unnecessary re-renders.</p>
        </div>
    );
};

export default Blog;