// TODO: Pull in IWebClientApi from @ohif/core
// TODO: Use constructor to create an instance of IWebClientApi
// TODO: Use existing DICOMWeb configuration (previously, appConfig, to configure instance)

import { createOrthancRestApi } from './OrthancDataSource/index.js';

/**
 *
 */
function getDataSourcesModule() {
  return [
    {
      name: 'orthancRest',
      type: 'webApi',
      createDataSource: createOrthancRestApi,
    },
  ];
}

export default getDataSourcesModule;
