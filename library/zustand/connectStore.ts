import { create } from 'zustand';
import { ConnectorStoreProps } from './types/@types';
import { immer } from 'zustand/middleware/immer';

const initialState: ConnectorStoreProps = {
   inputs: {
      email: '',
      query: '',
      search: '',
   },
   data: {
      library: {
         hasMutated: false, // refresh for react query
      },
      notes: {
         isDataAvailable: false,
         shouldSave: false,
      },
      network: {
         isConnected: null,
      },
      loader: {
         isSearchLoading: false,
      },
   },
   modal: {
      edit: {
         isChangeBookVisible: false,
      },
      timer: {
         isStopTimeVisible: false,
      },
      note: {
         isUploadNotesVisible: false,
         isModalVisible: {
            visible: false,
            dismissKeyboard: false,
         },
      },
   },
};

const useConnectStore = create(immer(() => initialState));

export default useConnectStore;
