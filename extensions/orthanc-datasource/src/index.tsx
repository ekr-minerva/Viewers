import { id } from './id';

import getDataSourcesModule from './getDataSourcesModule.js';

export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   * You ID can be anything you want, but it should be unique.
   */
  id,
  getDataSourcesModule
};
