
interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  username: string;
}

interface StarsFromInstagramSectionProps {
  posts: InstagramPost[];
}

const StarsFromInstagramSection = ({ posts }: StarsFromInstagramSectionProps) => {
  return (
    <section className="px-3">
      <div className="bg-white rounded-lg p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">📸 Stars from Instagram</h2>
          <p className="text-sm text-gray-600 mt-1">See how others style our products</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {posts.map((post) => (
            <div key={post.id} className="relative">
              <img
                src={post.image}
                alt={`Post by ${post.username}`}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                @{post.username}
              </div>
              <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                ❤️ {post.likes}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarsFromInstagramSection;
