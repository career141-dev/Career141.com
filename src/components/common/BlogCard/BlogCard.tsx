import { withBasePath } from '@/lib/assetPath'

interface BlogCardProps {
  slug: string
  title: string
  category: string
  thumbnail: string
}

export function BlogCard({ slug, title, category, thumbnail }: BlogCardProps) {
  return (
    <a 
      href={`/blogs/${slug}/`}
      className="flex-shrink-0 w-[280px] md:w-[380px] bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer snap-start"
    >
      <img
        src={withBasePath(thumbnail)}
        alt={title}
        className="w-full h-[180px] md:h-[240px] object-cover"
      />
      <div className="p-4 md:p-5">
        <p className="[font-family:'Quicksand',Sans-serif] text-[#531590] text-sm font-bold mb-2 md:mb-3">
          {category}
        </p>
        <p style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '1em', lineHeight: '1.4em', color: '#626262', fontWeight: 600 }}>
          {title}
        </p>
      </div>
    </a>
  )
}
