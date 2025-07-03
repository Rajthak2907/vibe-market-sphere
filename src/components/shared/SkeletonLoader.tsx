
interface SkeletonLoaderProps {
  type: 'product' | 'brand' | 'category';
}

const SkeletonLoader = ({ type }: SkeletonLoaderProps) => {
  if (type === 'product') {
    return (
      <div className="animate-pulse">
        <div className="bg-gray-200 aspect-square rounded-lg mb-2"></div>
        <div className="space-y-1">
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    );
  }

  if (type === 'brand') {
    return (
      <div className="animate-pulse">
        <div className="bg-gray-200 aspect-square rounded-lg mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-32 rounded-lg mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto"></div>
    </div>
  );
};

export default SkeletonLoader;
