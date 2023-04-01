export interface Year {
  year: string
  achievement: [Achievement]
}

export interface Achievement {
  state: string
  title: string
  desc: string
  place: string
}
