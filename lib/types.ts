/**
 * @private
 */
 declare global {
    interface Window {
      chrome: any;
      createTFLiteSIMDModule: () => Promise<any>;
      OT: Object & { VideoEffects?: any };
    }
  }
  
  /**
   * @private
   */
  export interface Timing {
    delay?: number;
    end?: number;
    start?: number;
  }
  
  /**
   * @private
   */
  export interface Dimensions {
    height: number;
    width: number;
  }

  /**
   * @private
   */
   export interface InferenceDimensions {
    model96: Dimensions;
    model144: Dimensions;
  }
  
  /**
   * ImageFit specifies the positioning of an image inside a viewport.
   */
  export enum ImageFit {
    /**
     * Scale the image up or down to fill the viewport while preserving the aspect ratio.
     * The image will be fully visible but will add empty space in the viewport if
     * aspect ratios do not match.
     */
    Contain = 'Contain',
  
    /**
     * Scale the image to fill both height and width of the viewport while preserving
     * the aspect ratio, but will crop the image if aspect ratios do not match.
     */
    Cover = 'Cover',
  
    /**
     * Stretches the image to fill the viewport regardless of aspect ratio.
     */
    Fill = 'Fill',
  
    /**
     * Ignore height and width and use the original size.
     */
    None = 'None'
  }
  