import React from 'react';
import { Wrapper, Inner } from './App.styles';

import { PostsList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';


function App({children}) {
  return (
    <Wrapper>
    <Inner>
      {children}
    </Inner>
  </Wrapper>
  )
}

export default App
