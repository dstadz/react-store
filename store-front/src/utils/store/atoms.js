import { atom } from 'recoil'

export const userState = atom({
  key: 'userState',
  default: null
  })

  export const isDropDownVisible = atom({
    key: 'isDropDownVisible',
    default: false
    })
