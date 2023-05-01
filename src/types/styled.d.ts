
import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      "green-light" : string,
      white: string,
      gray: string,
      "gray-200": string,
      "gray-400" : string,
      dark: string
    }
  }
}