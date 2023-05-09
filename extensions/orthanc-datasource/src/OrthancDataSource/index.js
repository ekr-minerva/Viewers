//import { WebClient } from 'javascript-web-client';
//const WebClient = require('javascript-web-client');

import {
  DicomMetadataStore,
  IWebApiDataSource,
  utils,
  errorHandler,
  classes,
} from '@ohif/core';

import dcmjs from 'dcmjs';

const { DicomMetaDictionary, DicomDict } = dcmjs.data;

const { naturalizeDataset, denaturalizeDataset } = DicomMetaDictionary;

const metadataProvider = classes.MetadataProvider;

/**
 *
 * @param {string} name - Data source name
 * @param {string} uriRoot - 
 */
function createOrthancRestApi(dicomWebConfig, userAuthenticationService) {
  const {
    uriRoot
  } = dicomWebConfig;

  //const myApiWebClient = WebClient("test");

  const implementation = {
    initialize: ({ params, query }) => {
      return null;
    },
    query: {
      studies: {
        // mapParams: mapParams.bind(),
        search: async function(origParams) {

          return null; //myApiWebClient.request("instances");
        },
        //processResults: processResults.bind(),
      },
      series: {
        // mapParams: mapParams.bind(),
        search: async function(studyInstanceUid) {
          
          return null;
        },
        // processResults: processResults.bind(),
      },
      instances: {
        search: (studyInstanceUid, queryParameters) => {
          // null
        },
      },
    },
    retrieve: {
      /**
       * Generates a URL that can be used for direct retrieve of the bulkdata
       *
       * @param {object} params
       * @param {string} params.tag is the tag name of the URL to retrieve
       * @param {object} params.instance is the instance object that the tag is in
       * @param {string} params.defaultType is the mime type of the response
       * @param {string} params.singlepart is the type of the part to retrieve
       * @returns an absolute URL to the resource, if the absolute URL can be retrieved as singlepart,
       *    or is already retrieved, or a promise to a URL for such use if a BulkDataURI
       */
      directURL: params => {
        return null;
      },
      bulkDataURI: async ({ StudyInstanceUID, BulkDataURI }) => {
        return null;
      },
      series: {
        metadata: async ({
          StudyInstanceUID,
          filters,
          sortCriteria,
          sortFunction,
          madeInClient = false,
        } = {}) => {
          

          return null;
        },
      },
    },

    store: {
      dicom: async (dataset, request) => {
        const headers = userAuthenticationService.getAuthorizationHeader();
        

        

          await null;
        
      },
    },

    deleteStudyMetadataPromise() {
      return null
    },
    getImageIdsForDisplaySet(displaySet, thumbnail = false) {
      

      return null;
    },
    getImageIdsForInstance({ instance, frame, thumbnail }) {
      
      return null;
    },
    getConfig() {
      return null;
    },
  };

  return IWebApiDataSource.create(implementation);
}

export { createOrthancRestApi };
