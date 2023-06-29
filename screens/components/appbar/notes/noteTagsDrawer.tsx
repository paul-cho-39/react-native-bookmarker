import React, { forwardRef, useState } from 'react';
import useGetKeyboardHeight from '../../../../library/hooks/useGetKeyboardHeight';
import { StyleSheet, View } from 'react-native';

import NoteTagHeader from './noteTagHeader';
import Tags from './noteTags';
import useBoundedStore from '../../../../library/zustand/store';
import { NoteAppbarParams, NotesHeightParams } from '../../../../constants';
import { Modalize } from 'react-native-modalize';
import { setNoteModalVisible } from '../../../../library/zustand/logic/connector-logic';
import { shallow } from 'zustand/shallow';

interface NoteTagsDrawerProps extends NoteAppbarParams {
   closeModal: () => void;
}

const NoteTagsDrawer = forwardRef<Modalize, NoteTagsDrawerProps>((props, ref) => {
   const { params, colors } = props;
   const { id, logIndex } = params;
   const [tags, headerColor] = useBoundedStore(
      (state) => [state.notes[id][logIndex].tags, state.notes[id][logIndex].meta?.headerColor],
      shallow
   );

   const keyboardHeight = useGetKeyboardHeight();
   const tagsContainerBottom = keyboardHeight >= 1 ? keyboardHeight : 5;
   const modalHeight = keyboardHeight >= 1 ? undefined : NotesHeightParams.TagsModalHeight;

   return (
      <Modalize
         closeOnOverlayTap
         threshold={100} // tags scroll should be priority
         dragToss={0.1}
         avoidKeyboardLikeIOS={true}
         modalHeight={modalHeight}
         closeAnimationConfig={{ timing: { duration: 50 } }}
         ref={ref}
         modalStyle={{ backgroundColor: headerColor }}
         HeaderComponent={<NoteTagHeader onPressTags={props.closeModal} colors={colors} />}
         FooterComponent={
            <>
               <View
                  accessibilityViewIsModal
                  style={{
                     ...styles.container,
                     bottom: tagsContainerBottom,
                  }}
               >
                  <Tags
                     tagsData={tags}
                     params={params}
                     colors={colors}
                     inputHeight={keyboardHeight}
                  />
               </View>
            </>
         }
      >
         <></>
      </Modalize>
   );
});

const styles = StyleSheet.create({
   bottomDrawer: {
      borderWidth: 0,
      borderRadius: 10,
   },
   // container: {
   //    flex: 1,
   //    position: 'absolute',
   //    width: '100%',
   //    // zIndex: 5000,

   // },
   container: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      // zIndex: 5000,
   },
   container__full: {
      flex: 1,
      width: '100%',
   },
});

export default NoteTagsDrawer;
