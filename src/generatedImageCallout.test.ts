import { describe, expect, it } from 'vitest'
import { SAVEABLE_IMAGE_CLASS } from './generatedImageCalloutStyles'

describe('generated image iOS callout styles', () => {
  it('uses the explicit class that restores native long-press behavior for generated images', () => {
    expect(SAVEABLE_IMAGE_CLASS).toBe('saveable-image')
  })
})
