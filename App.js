```jsx
import React, { useState } from 'react';
import './App.css';
import Video from './Video';

function App() {
  const [videos, setVideos] = useState([
    {
      url: 'url_do_video_1.mp4',
      likes: 123,
      shares: 45,
      comments: 67,
      description: 'Descrição do vídeo 1',
      song: 'Nome da música 1',
      user: 'Usuário 1',
    },
    {
      url: 'url_do_video_2.mp4',
      likes: 456,
      shares: 78,
      comments: 90,
      description: 'Descrição do vídeo 2',
      song: 'Nome da música 2',
      user: 'Usuário 2',
    },
    // Adicione mais vídeos conforme necessário
  ]);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video, index) => (
          <Video
            key={index}
            url={video.url}
            likes={video.likes}
            shares={video.shares}
            comments={video.comments}
            description={video.description}
            song={video.song}
            user={video.user}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
