import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  max?: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  showScore?: boolean;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  max = 5,
  reviewCount,
  size = 'sm',
  showScore = true,
}) => {
  const starSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="inline-flex items-center gap-1.5">
      <div className="flex items-center text-amber-400">
        {Array.from({ length: max }).map((_, index) => {
          const filled = index + 1 <= Math.floor(rating);
          const half = !filled && index < rating;

          return (
            <Star
              key={index}
              className={`${starSizes[size]} ${
                filled
                  ? 'fill-amber-400 text-amber-400'
                  : half
                  ? 'fill-amber-400/50 text-amber-400'
                  : 'text-slate-600'
              }`}
            />
          );
        })}
      </div>

      {showScore && (
        <span className="text-xs font-semibold text-slate-200">
          {rating.toFixed(1)}
        </span>
      )}

      {reviewCount !== undefined && (
        <span className="text-xs text-slate-400">
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
};
