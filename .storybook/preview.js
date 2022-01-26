import '../public/css/style.css'
import DATA from '../test/utils/sampleData'

export const parameters = {
  viewMode: 'docs',
  previewTabs: {
    canvas: { hidden: true },
  },
}

export const args = (description, defaultValue) => {
  return {
    description: description,
    table: { defaultValue: { summary: defaultValue } },
  }
}
