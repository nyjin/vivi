import { useState } from 'react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const categories = ['전체', '인테리어', '팀워크', '분석', '창의', '기술'];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              포트폴리오
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              비비의정원의 다양한 프로젝트와 서비스 현장을 만나보세요.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-gray-600">이미지 {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
