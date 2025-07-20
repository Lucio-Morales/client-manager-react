import { Post } from '../../../types/social/types';
import { FC, useState } from 'react';
import { Heart, MessageCircle, Repeat, Send } from 'lucide-react';

interface PostItemProps {
  post: Post;
}

const roleStyles: Record<Post['user']['role'], string> = {
  admin: 'text-purple-700',
  trainer: 'text-blue-700',
  client: 'text-orange-700',
};

const PostItem: FC<PostItemProps> = ({ post }) => {
  const { user, content, createdAt } = post;
  const [mockContent, setMockContent] = useState(content);
  const formattedDate = new Date(createdAt).toLocaleString();

  return (
    <article className="p-4 rounded-lg shadow-sm bg-zinc-950 w-full border-b border-zinc-800 mb-4 last:border-b-0 last:mb-0">
      <header className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-semibold text-white text-sm">{user.name}</p>
          <span className={`text-xs font-medium px-2 py-0.5 border rounded ${roleStyles[user.role]} capitalize`}>
            {user.role}
          </span>
        </div>
        <span className="text-xs text-zinc-500">{formattedDate}</span>
      </header>
      <p className="text-zinc-400 text-sm whitespace-pre-wrap mb-3">{content}</p>

      {/* ACCIONES */}
      <div className="flex justify-between text-zinc-500 text-sm pt-2 border-t border-zinc-800">
        <button className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
          <Heart size={16} />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
          <MessageCircle size={16} />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center gap-1 hover:text-green-600 transition-colors cursor-pointer">
          <Repeat size={16} />
          <span>{post.reposts}</span>
        </button>
        <button className="flex items-center gap-1 hover:text-gray-700 transition-colors cursor-pointer">
          <Send size={16} />
        </button>
      </div>
    </article>
  );
};

export default PostItem;
