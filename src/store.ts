import { reactive } from "vue"

export const store = reactive({
  color: "#1abc9c",
  dataURL: '',
  size: {
    height: 256,
    width: 256
  },
  threshold: 32,
})
