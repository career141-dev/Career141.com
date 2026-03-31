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
      className="flex-shrink-0 w-[250px] md:w-[300px] bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer snap-start"
    >
      <img
        src={withBasePath(thumbnail)}
        alt={title}
        className="w-full h-[150px] md:h-[200px] object-cover"
      />
      <div className="p-3 md:p-4">
        <p className="[font-family:'Quicksand',Sans-serif] text-[#531590] text-xs font-bold mb-1 md:mb-2">
          {category}
        </p>
        <p style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '0.9em', lineHeight: '1.4em', color: '#626262', fontWeight: 600 }}>
          {title}
        </p>
      </div>
    </a>
  )
}
