import { Star } from "lucide-react"

type StarRatingProps = {
  rating: number
  size?: number
}

export default function StarRating({ rating, size = 14 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star
        const half = rating >= star - 0.5 && rating < star

        return (
          <div key={star} className="relative" style={{ width: size, height: size }}>

            <Star size={size} fill="#3A1C12" color="#3A1C12" />

            {filled && (
              <Star
                size={size}
                fill="#c08b4b"
                color="#c08b4b"
                className="absolute inset-0"
              />
            )}

            {half && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: size / 2, height: size }}  // 
              >
                <Star size={size} fill="#c08b4b" color="#c08b4b" />
              </div>
            )}

          </div>
        )
      })}
    </div>
  )
}