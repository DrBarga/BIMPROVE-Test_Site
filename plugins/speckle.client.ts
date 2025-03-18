import { defineNuxtPlugin } from '#app'
import { Viewer } from '@speckle/viewer'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      speckle: {
        Viewer
      }
    }
  }
}) 