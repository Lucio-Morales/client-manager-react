import { FC } from 'react';

interface PostItemProps {
  post: {
    id: string;
    user: {
      name: string;
      role: 'admin' | 'entrenador' | 'cliente';
    };
    content: string;
    createdAt: string;
  };
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const formattedDate = new Date(post.createdAt).toLocaleString();

  return (
    <div className="bg-white p-4 rounded shadow-sm border border-gray-200 w-full">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="font-semibold text-gray-800">{post.user.name}</p>
          <span className="text-xs text-gray-500 capitalize">{post.user.role}</span>
        </div>
        <span className="text-xs text-gray-400">{formattedDate}</span>
      </div>
      <p className="text-gray-700 text-sm whitespace-pre-wrap">{post.content}</p>
    </div>
  );
};

export default PostItem;
