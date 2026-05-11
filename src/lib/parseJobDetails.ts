import type { JobDetailNode } from '@/components/premium-jobs/jobDetailsData'

export function parseMarkdownToNodes(markdown: string): JobDetailNode[] {
  const lines = markdown.split('\n')
  const nodes: JobDetailNode[] = []

  let i = 0
  while (i < lines.length) {
    const line = lines[i].trim()

    if (!line) {
      i++
      continue
    }

    if (line.startsWith('### ')) {
      nodes.push({ type: 'heading', text: line.replace(/^###\s+/, '') })
      i++
      continue
    }

    if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length) {
        const l = lines[i].trim()
        if (l.startsWith('- ')) {
          items.push(l.replace(/^- /, ''))
          i++
        } else if (l === '') {
          i++
          continue
        } else {
          break
        }
      }
      if (items.length > 0) {
        nodes.push({ type: 'bullets', items })
      }
      continue
    }

    if (line.startsWith('**') && line.endsWith('**')) {
      nodes.push({ type: 'heading', text: line.replace(/\*\*/g, '') })
      i++
      continue
    }

    nodes.push({ type: 'paragraph', text: line })
    i++
  }

  return nodes
}
