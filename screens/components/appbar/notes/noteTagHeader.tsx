import { Text, View } from 'react-native';
import { MD3Colors } from 'react-native-paper/lib/typescript/src/types';
import BackButton from '../../../../components/buttons/backButton';
import { FONT_SIZE, ICONS } from '../../../../constants';

interface NoteTagHeaderParams {
   colors: MD3Colors;
   onPressTags: () => void;
}

const NoteTagHeader = ({ onPressTags, colors }: NoteTagHeaderParams) => {
   return (
      <View
         style={{
            margin: '4%',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
         }}
      >
         <Text
            style={{
               ...FONT_SIZE.title.extraSmall,
               fontWeight: 'bold',
               color: colors.onBackground,
               flexGrow: 0.56, // should subtract from margin
            }}
         >
            Tags
         </Text>
         <BackButton
            name='arrow-back'
            color={colors.onSurface}
            size={ICONS.MEDIUM}
            onPress={onPressTags}
            isHighlighted={true}
            activeOpacity={0.68}
            highlighterColor={colors.primary}
            style={{ padding: 20 }}
         />
      </View>
   );
};

export default NoteTagHeader;
