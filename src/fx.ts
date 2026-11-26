// Game effects, not class names
export type Effect =
  | { kind: 'ring'; x: number; y: number }
  | { kind: 'spark'; x: number; y: number }

export type Shape = 'ring' | 'blur'

export function addRing(effects: Effect[], x: number, y: number) {
  effects.push({ kind: 'ring', x, y })
}

export function draw(e: Effect) {
  switch (e.kind) {
    case 'ring':
      return 'circle'
  }
  if (e.kind === 'ring') return 'circle'
}

export const chart = { axisPointer: { type: 'shadow' } }

export const calls: unknown[][] = []
export const spy = (...a: unknown[]) => calls.push(['ring', ...a])

export const help = `A badge with only an outline: you have enough ki, but the opponent is out of range.`

// Real class strings: these must still migrate
export const button = 'shadow'
export const card = cn('rounded', isOpen && 'ring')
declare function cn(...a: unknown[]): string
declare const isOpen: boolean
