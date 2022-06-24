import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Event() {
  const [isOpened, setIsOpened] = useState(false);
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header value={isOpened} onChange={setIsOpened} />
      <main className="flex-1 flex relative overflow-x-hidden">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar visible={isOpened} />
      </main>
    </div>
  );
}
