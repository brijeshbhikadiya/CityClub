import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  getHeight,
  getWidth,
  ScreenDimensions,
} from '../../../constants/utils/Dimensions';
import { Colors } from '../../../constants/Colors';
import { images } from '../../../constants/Images';
import { fontsfamily } from '../../../constants/FontFamily';
import { getTranslation } from '../../../localization/i18n/i18n.config';
import { activityOpacity } from '../../../constants/GConstant';

const CustomBottomTabsComponent = (props: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
      }}
    >
      <View
        style={[
          styles.vwTabs,
          {
            marginBottom:
              insets.bottom > 0
                ? insets.bottom + getHeight(5)
                : insets.bottom + getHeight(10),
          },
          ,
        ]}
      >
        {props?.tabs?.map((route: any, index: number) =>
          props?.onPressBottomTab(route, index),
        )}
      </View>
    </View>
  );
};

export default CustomBottomTabsComponent;
