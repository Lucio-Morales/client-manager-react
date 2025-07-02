import { useState } from 'react';
import { Post } from '../../../types/social/types';
import PostForm from '../components/PostForm';
import PostItem from '../components/PostItem';
import { mockPosts } from '../data/mockPosts';

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const handleAddPost = (newPost: Post) => {
    setPosts([newPost, ...posts]); // Agrega el nuevo post arriba
  };

  const currentUser: Post['user'] = {
    name: 'Lucio Morales',
    role: 'admin',
  };
  return (
    <section className="w-full max-w-2xl mx-auto ">
      <h2 className="text-xl font-bold text-gray-800">Comunidad Fit</h2>
      <PostForm onAddPost={handleAddPost} currentUser={currentUser} />
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Feed;
