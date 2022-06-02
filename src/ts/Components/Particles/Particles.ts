export function ColorContrastClass(color?:string, contrast?:string, type?: 'txt' | 'bg') {
return [`${color}-${type}`, {
    'cont-hst': contrast === 'highest',
    'cont-h': contrast === 'high',
    'cont-m': contrast === 'mid',
    'cont-l': contrast === 'low',
    'cont-lst': contrast === 'lowest',
  }]
}

export function LayoutClass(type?:string, margin?:string) {
  return [{
    'a-Layout-full': type === 'full',
    'a-Layout-center': type === 'center',
    'a-Layout-focus': type === 'focus',
    'a-Layout-halves': type === 'halves',
    'a-Layout-thirds': type === 'thirds',
    'a-Layout-quarters': type === 'quarters',
    'a-Layout-right': type === 'right',
    'a-Layout-left': type === 'left'
  }, {
    'a-Layout-margin-full': margin === 'full',
    'a-Layout-margin-single': margin === 'single',
    'a-Layout-margin-none': margin === 'none'
  }]
}