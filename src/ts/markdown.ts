//    __  __            _       _
//   |  \/  | __ _ _ __| | ____| | _____      ___ __
//   | |\/| |/ _` | '__| |/ / _` |/ _ \ \ /\ / / '_ \
//   | |  | | (_| | |  |   < (_| | (_) \ V  V /| | | |
//   |_|  |_|\__,_|_|  |_|\_\__,_|\___/ \_/\_/ |_| |_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Markdown Module
 * @module Ana/Markdown
 */

/**
 *
 */
export class AnaMarkdown {
  /**
   *
   * @param text
   * @param customId
   * @returns
   */
  public h1: Function = (text: string = 'Title', customId?: string): string =>
    `# ${text}${customId ? ` {#${customId}}` : ''}`

  /**
   *
   * @param text
   * @param customId
   * @returns
   */
  public h2: Function = (text: string = 'Heading', customId?: string): string =>
    `## ${text}${customId ? ` {#${customId}}` : ''}`

  /**
   *
   * @param text
   * @param customId
   * @returns
   */
  public h3: Function = (text: string = 'Subheading', customId?: string): string =>
    `### ${text}${customId ? ` {#${customId}}` : ''}`

  /**
   *
   * @param text
   * @returns
   */
  public b: Function = (text: string = 'Bold'): string => `**${text}**`

  /**
   *
   * @param text
   * @returns
   */
  public i: Function = (text: string = 'Italic'): string => `*${text}*`

  /**
   *
   * @param items
   */
  public ul: Function = (items: string[] = ['Red', 'Green', 'Blue']): string =>
    items.map((item) => ` - ${item}`).join('\n')

  /**
   *
   * @param items
   */
  public ol: Function = (items: string[] = ['First', 'Second', 'Third']) => items.map((item, index) => ` ${index}. ${item}`).join('\n')
}
