declare module "ogl" {
  export class Renderer {
    constructor(options?: any)
    gl: WebGLRenderingContext & { canvas: HTMLCanvasElement }
    setSize(width: number, height: number): void
  }
  export class Camera {
    constructor(gl: any)
    fov: number
    aspect: number
    position: { z: number }
    perspective(options: { aspect: number }): void
  }
  export class Transform {
    constructor()
  }
  export class Plane {
    constructor(gl: any, options?: any)
  }
  export class Program {
    constructor(gl: any, options: any)
    uniforms: Record<string, { value: any }>
    transparent?: boolean
    depthTest?: boolean
    depthWrite?: boolean
  }
  export class Mesh {
    constructor(gl: any, options: any)
    position: { x: number; y: number; z: number }
    rotation: { x: number; y: number; z: number }
    scale: { x: number; y: number; z: number; set: (x: number, y: number, z: number) => void }
    program: any
    setParent(parent: any): void
  }
  export class Texture {
    constructor(gl: any, options?: any)
    image: any
  }
}
