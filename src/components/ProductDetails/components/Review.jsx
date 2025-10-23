import { Check, Star, StarsIcon } from 'lucide-react';
import React from 'react'

function Review() {
      const reviews = [
        {
          id: 1,
          name: 'Sarah Johnson',
          rating: 5,
          date: '2024-10-15',
          verified: true,
          title: 'Perfect fit and elegant!',
          comment: 'This dress is absolutely stunning! The material is high quality and the fit is perfect. The puff sleeves add a nice touch of elegance. Highly recommend!',
          helpful: 24
        },
        {
          id: 2,
          name: 'Emma Wilson',
          rating: 4,
          date: '2024-10-10',
          verified: true,
          title: 'Beautiful dress, runs slightly small',
          comment: 'Love the design and the square neck is very flattering. However, it runs a bit small so I recommend sizing up. The tie back detail is gorgeous.',
          helpful: 18
        },
        {
          id: 3,
          name: 'Olivia Brown',
          rating: 5,
          date: '2024-10-05',
          verified: true,
          title: 'Great for special occasions',
          comment: 'Wore this to a wedding and received so many compliments! The flared A-line cut is very feminine and comfortable to wear all day.',
          helpful: 31
        },
        {
          id: 4,
          name: 'Ava Martinez',
          rating: 4,
          date: '2024-09-28',
          verified: false,
          title: 'Good quality for the price',
          comment: 'Nice dress overall. The material feels premium and the cut is flattering. Only wish it came in more colors.',
          helpful: 12
        }
      ];
  return (
    <div>
              {/* Reviews Section */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          
          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b">
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold mb-2">4.1</div>
              {/* <Star rating={4} size="w-6 h-6" /> */}
              {/* <p className="text-sm text-gray-600 mt-2">67 global ratings</p> */}
            </div>
            
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-3">
                  <span className="text-sm w-12">{star} star</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-5">
                    <div
                      className="bg-yellow-400 h-5 rounded-full"
                      style={{
                        width: `${star === 5 ? 65 : star === 4 ? 25 : star === 3 ? 7 : star === 2 ? 2 : 1}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12">{star === 5 ? '65%' : star === 4 ? '25%' : star === 3 ? '7%' : star === 2 ? '2%' : '1%'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{review.name}</span>
                      {review.verified && (
                        <span className="flex items-center gap-1 text-xs text-green-600">
                          <Check className="w-3 h-3" />
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <StarsIcon rating={review.rating} />
                      <span className="text-sm text-gray-600">{review.date}</span>
                    </div>
                    <h4 className="font-semibold mb-2">{review.title}</h4>
                    <p className="text-gray-700 mb-3">{review.comment}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <button className="text-gray-600 hover:text-black">Helpful ({review.helpful})</button>
                      <button className="text-gray-600 hover:text-black">Report</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Write Review Button */}
          <div className="mt-8 pt-8 border-t text-center">
            <button className="px-8 py-3 border-2 border-black rounded-lg font-semibold hover:bg-black hover:text-white transition">
              Write a Review
            </button>
          </div>
        </div>
    </div>
  )
}

export default Review
