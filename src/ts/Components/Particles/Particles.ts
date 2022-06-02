export function textContrastClass(contrast?:string) {
  return {
    'txt-cont-hst': contrast === 'highest',
    'txt-cont-h': contrast === 'high',
    'txt-cont-m': contrast === 'mid',
    'txt-cont-l': contrast === 'low',
    'txt-cont-lst': contrast === 'lowest',
  }
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