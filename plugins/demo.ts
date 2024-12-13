export default defineNuxtPlugin(() => {
    return {
      provide: {
        demo: (msg: string) => {
            alert(' Demo Plugins:  ' + msg)
        }
      }
    }
  })
  