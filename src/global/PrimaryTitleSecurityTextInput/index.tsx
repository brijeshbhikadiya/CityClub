// import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import React, { useEffect, useRef, useState } from 'react';
// import { styles } from './styles';
// import { getHeight, getWidth } from '../../constants/StylesConstants';

// import { ImageConstants } from '../../constants/ImageConstants';
// import { FontFamily } from '../../constants/FontFamily';
// import { Colors } from '../../constants/Colors';

// const PrimaryTitleSecurityTextInput = ({
//   label,
//   value,
//   onChangeFun,
//   isPassword,
//   isMobile,
//   isMultiline,
//   countryCodePressed,
//   screenName,
//   refs,
//   blur,
//   focusnext,
//   isBorder,
//   ...props
// }: any) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [multiline, setMultiline] = useState(isMultiline);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <View
//         style={[
//           styles.container,
//           multiline && styles.multilineContainer,
//           multiline && {
//             paddingVertical: getWidth(8),
//           }
//         ]}
//       >
//         <View style={styles.vwTextInputAndIcon}>
//           <Image source={props.fieldIcon} style={styles.imgLeftIcon}></Image>
//         </View>
//         <View
//           style={styles.verticalLine}
//         ></View>
//         <View style={{ flex: 1 }}>
//           <TextInput
//             keyboardAppearance="dark"
//             selectionColor={Colors.black}
//             returnKeyType={focusnext ? 'next' : 'default'}
//             blurOnSubmit={blur ? true : false}
//             ref={refs}
//             onSubmitEditing={focusnext}
//             value={value}
//             placeholder={label}
//             placeholderTextColor={Colors.black30}
//             onChangeText={onChangeFun}
//             style={[
//               styles.input,
//               multiline && styles.multilineInput,
//               {
//                 fontFamily: value.length>0?FontFamily.Medium:FontFamily.Regular,
//                 marginTop:!multiline && 4
//               },
//             ]}
//             multiline={multiline}
//             secureTextEntry={isPassword && !isPasswordVisible}
//             {...props}
//           />
//         </View>
//         <TouchableOpacity
//           style={{ alignSelf: 'center',marginLeft:getWidth(10) }}
//           onPress={() => setIsPasswordVisible(prevState => !prevState)}
//         >
//           <Image
//             style={{ height: getHeight(25), aspectRatio:1 }}
//             tintColor={Colors.black30}
//             source={
//               isPasswordVisible
//                 ? ImageConstants.imgEyeShow
//                 : ImageConstants.imgEyeHide
//             }
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default PrimaryTitleSecurityTextInput;
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useImperativeHandle, useRef, useState } from 'react';
import { styles } from './styles';
import { getHeight, getWidth } from '../../constants/utils/Dimensions';
import { Colors } from '../../constants/Colors';
import { images } from '../../constants/Images';

const PrimaryTitleSecurityTextInput = ({
  label,
  value,
  onChangeFun,
  isPassword,
  isMobile,
  isMultiline,
  countryCodePressed,
  screenName,
  refs,
  blur,
  isBorder,
  focusnext,
  errorMessage,
  setErrorMessage,
  onFocus,
  onBlur,
  ...props
}: any) => {
  const [multiline, setMultiline] = useState(isMultiline);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [internalError, setInternalError] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useImperativeHandle(refs, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    setError: (error: string) => {
      setInternalError(error);
    },
    clearError: () => {
      setInternalError('');
    },
  }));

  const displayError = errorMessage || internalError;

  const getBorderColor = () => {
    if (displayError) return Colors.red8C;
    if (isFocused) return Colors.orangeEa;
    return Colors.greyef;
  };

  const getBackgroundColor = () => {
    if (displayError) return Colors.redFD;
    return Colors.greyf8;
  };

  const handleFocus = () => {
    setIsFocused(true);

    if (internalError) {
      setInternalError('');
    }
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const handleChangeText = (text: string) => {
    if (internalError) {
      setInternalError('');
    }
    if (errorMessage && setErrorMessage) {
      setErrorMessage('');
    }

    onChangeFun(text);
  };

  return (
    <View style={{}}>
      {props.inputLabel && (
        <Text style={styles.lblTitleInput} numberOfLines={1}>
          {props.inputLabel}123
        </Text>
      )}
      <View
        style={[
          styles.container,
          multiline && styles.multilineContainer,
          multiline && {
            paddingVertical: getWidth(16),
          },
          {
            borderColor: getBorderColor(),
            backgroundColor: getBackgroundColor(),
            // flex: props?.flex ? props?.flex : 0,
          },
        ]}
      >
        {props.leftIcon && (
          <View style={styles.vwTextInputAndIcon}>
            <Image
              source={props.fieldIcon}
              style={[
                styles.imgLeftIcon,
                {
                  alignSelf: isMultiline ? 'flex-start' : 'center',
                },
              ]}
            />
          </View>
        )}

        <View style={{ flex: 1 ,flexDirection:'row'}}>
          <TextInput
            ref={inputRef}
            keyboardAppearance="dark"
            selectionColor={Colors.greybc}
            cursorColor={Colors.black}
            editable={props.editable}
            keyboardType={props.keyaboardType}
            autoCapitalize={props.autoCapitalize ? 'none' : 'sentences'}
            maxLength={props.maxlength}
            returnKeyType={focusnext ? 'next' : 'default'}
            blurOnSubmit={blur ? true : false}
            onSubmitEditing={focusnext}
            scrollEnabled={multiline}
            value={value}
            placeholder={props.placHolderLabel}
            placeholderTextColor={Colors.greybc}
            onChangeText={handleChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={[styles.input, multiline && styles.multilineInput, {}]}
            multiline={multiline}
            numberOfLines={multiline ? 0 : 4}
            secureTextEntry={isPassword && !isPasswordVisible}
            {...props}
          />
          <TouchableOpacity
            style={{ alignSelf: 'center', marginLeft: getWidth(10) }}
            onPress={() => setIsPasswordVisible(prevState => !prevState)}
          >
            <Text>hy</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Error Message */}
      {displayError && (
        <View style={styles.vwError}>
          <Image source={images.imgWarning} />
          <Text style={styles.lablWarning}>{displayError}</Text>
        </View>
      )}
    </View>
  );
};

export default PrimaryTitleSecurityTextInput;
