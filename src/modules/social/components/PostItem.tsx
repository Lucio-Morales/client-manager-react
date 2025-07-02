import { Post } from '../../../types/social/types';
import { FC, useState } from 'react';
import { Heart, MessageCircle, Repeat, Send } from 'lucide-react';

interface PostItemProps {
  post: Post;
}

const roleStyles: Record<Post['user']['role'], string> = {
  admin: 'bg-purple-100 text-purple-700',
  trainer: 'bg-blue-100 text-blue-700',
  client: 'bg-orange-100 text-orange-700',
};

const PostItem: FC<PostItemProps> = ({ post }) => {
  const { user, content, createdAt } = post;
  const [mockContent, setMockContent] = useState(content);
  const formattedDate = new Date(createdAt).toLocaleString();

  return (
    <article className="bg-white p-4 rounded shadow-sm border border-gray-200 w-full">
      <header className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-semibold text-gray-800 text-sm">{user.name}</p>
          <span className={`text-xs font-medium px-2 py-0.5 rounded ${roleStyles[user.role]} capitalize`}>
            {user.role}
          </span>
        </div>
        <span className="text-xs text-gray-400">{formattedDate}</span>
      </header>
      <p className="text-gray-700 text-sm whitespace-pre-wrap mb-3">{content}</p>

      {/* ACCIONES */}
      <div className="flex justify-between text-gray-500 text-sm pt-2 border-t border-gray-100">
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
