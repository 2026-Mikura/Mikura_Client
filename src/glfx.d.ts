declare module "glfx" {
  export interface FxTexture {
    destroy(): void;
  }

  export interface FxCanvas {
    texture(element: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement): FxTexture;
    draw(texture: FxTexture): FxCanvas;
    bulgePinch(centerX: number, centerY: number, radius: number, strength: number): FxCanvas;
    perspective(before: number[], after: number[]): FxCanvas;
    update(): void;
    toDataURL(type?: string, quality?: number): string;
  }

  export interface FxModule {
    canvas(): FxCanvas;
  }

  const fx: FxModule;
  export default fx;
}
