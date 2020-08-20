import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name IngenSwift
 * @description
 * testing swift support
 *
 * @interfaces
 * IngenSwiftStartupOptions
 */

export interface IngenSwift_INTERFACE_OPTIONS {
  option?: any;
}

@Plugin({
  pluginName: 'IngenSwift',
  plugin: 'ingen-swift',
  pluginRef: 'IngenSwift',
  repo: 'REPO',
  platforms: ['iOS'],
})
@Injectable()
export class IngenSwift extends IonicNativePlugin {
  /**
   * Starts IngenSwift.
   * @param {IngenSwift_INTERFACE_OPTIONS} options
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  startPlugin(options: IngenSwift_INTERFACE_OPTIONS): Promise<any> {
    return;
  }
}
