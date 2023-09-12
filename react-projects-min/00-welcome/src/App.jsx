import { TwitterFollowCard } from './TwitterFollowCard';
import './App.css';
import { isValidElement, useState } from 'react';
export function App() {
  const propsEnGrupos = { userName: 'segundo', name: 'segundo', initialIsFollowing: false };
  const [isFollowing, setIsFollowing] = useState(true);
  console.log('[App] Render with isFollowing', isFollowing);
  return (
    <section className="App">
      <TwitterFollowCard {...propsEnGrupos}>Propiedad childrn</TwitterFollowCard>
      <TwitterFollowCard userName="terciaro" name="munoz" initialIsFollowing={false} />
      <TwitterFollowCard userName="kenet" name="kenet" initialIsFollowing={isFollowing}>
        Vengo children kenet
      </TwitterFollowCard>
      <button onClick={() => setIsFollowing(!isFollowing)}>cmabiar estado de app</button>
    </section>
  );
}
