import { FC, useState } from 'react';
import { Post } from '../../../types/social/types';
import { Loader2, Image, Video } from 'lucide-react';

interface NewPostFormProps {
  onAddPost: (newPost: Post) => void;
  currentUser: Post['user'];
}

const PostForm: FC<NewPostFormProps> = ({ onAddPost, currentUser }) => {
  const [postContent, setPostContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!postContent.trim()) return;

    setIsPosting(true);

    setTimeout(() => {
      const newPost: Post = {
        id: crypto.randomUUID(),
        user: currentUser,
        content: postContent,
        createdAt: new Date().toISOString(),
        likes: 0,
        comments: 0,
        reposts: 0,
      };
      onAddPost(newPost);
      setPostContent('');
      setIsPosting(false);
    }, 1200);
  };

  const isDisabled = isPosting || !postContent.trim();

  return (
    <form onSubmit={handleSubmit} className="text-white p-4 mb-4 rounded-lg shadow-sm border border-zinc-800 w-full">
      <textarea
        className="w-full resize-none border border-zinc-800 rounded-lg p-2 text-sm focus:outline-none "
        rows={3}
        placeholder="¿En qué estás pensando?"
        value={postContent}
        onChange={(event) => setPostContent(event.target.value)}
        disabled={isPosting}
      />

      <div className="flex justify-between items-center mt-2">
        {/* Íconos decorativos */}
        <div className="flex items-center gap-3 text-gray-500">
          <button
            type="button"
            title="Agregar imagen"
            className="hover:text-indigo-600 transition-colors cursor-pointer"
          >
            <Image size={20} />
          </button>
          <button
            type="button"
            title="Agregar video"
            className="hover:text-indigo-600 transition-colors cursor-pointer"
          >
            <Video size={20} />
          </button>
        </div>

        {/* Botón Publicar */}
        <button
          type="submit"
          disabled={isDisabled}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium text-white ${
            isDisabled
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer'
          }`}
        >
          {isPosting ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              Publicando...
            </>
          ) : (
            'Publicar'
          )}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
