import { StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './styles';
import PrimaryTitleMoblieNumber from '../../../global/PrimaryTitleMoblieNumber';
import { getTranslation } from '../../../localization/i18n/i18n.config';
import { formatPhoneNumber } from '../../../constants/TextInputConstant';
import PrimaryTitleTextInput from '../../../global/PrimaryTitleTextInput';
import { Colors } from '../../../constants/Colors';
import PrimaryTitleSecurityTextInput from '../../../global/PrimaryTitleSecurityTextInput';
import CustomButton from '../../../global/Buttons';
import TitleSubtitle from '../../../global/TitleSubtitle';
import { flashMessageSucess, flashMessageWarning, flashMessageWarningBottom } from '../../../constants/GConstant';

const LoginComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState<any>('');
  const [callingCode, setCallingCode] = useState<any>('39');

  const [phoneNumberError, setPhoneNumberError] = useState<any>('');

  const moblieNoRef = useRef<any>(null);

  //onChange
  const changeInput = (inputFieldName: any, text: any) => {
    switch (inputFieldName) {
      case 'Phone Number':
        setPhoneNumber(formatPhoneNumber(text));
        break;
      default:
        break;
    }
  };

  const [fullName, setFullName] = useState<any>('');

  const [fullNameError, setFullNameError] = useState<any>('');

  const fullNameRef = useRef<any>(null);

  const onChangeFullName = (text: any) => {
    let newText = text.replace(/[0-9]/g, '');
    newText = newText.replace(/^\s+/, '');
    newText = newText.replace(/\s{2,}/g, ' ');
    setFullName(newText);
  };

  const handle = () =>{
    if(phoneNumber.length === 0){
    {
      setPhoneNumberError('Phone number is required');
    }
  }
}

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white,paddingTop:100,gap:10 }} >
      <View style={{gap:10}}>
        <PrimaryTitleMoblieNumber
          blur={false}
          label={'moblieno'}
          value={phoneNumber}
          onChangeFun={(text: any) => changeInput('Phone Number', text)}
          maxLength={12}
          callingCode={callingCode}
          setCallingCode={setCallingCode}
          refs={moblieNoRef}
          inputLabel={'Email Or Mobile Number765765765'}
          errorMessage={phoneNumberError}
          setErrorMessage={setPhoneNumberError}
          leftIcon={false}
          isBorder={false}
          placHolderLabel={'333 000 0000'}
        />

        <PrimaryTitleTextInput
          placHolderLabel={'Brijes Bhikadiya'}
          refs={fullNameRef}
          label={'moblieno'}
          isflexstart={false}
          // focusnext={() => surnameRef.current?.focus()} // ✅ Now this works
          inputLabel={'Full Name'}
          blur={false}
          leftIcon={false}
          keyaboardType={'default'}
          value={fullName}
          onChangeFun={onChangeFullName}
          autoCapitalize={'none'}
          errorMessage={fullNameError}
          setErrorMessage={setFullNameError} // ✅ Just pass this once
          maxlength={200}
          isMultiline={false}
          isBorder={false}
        />

        <PrimaryTitleSecurityTextInput
          placHolderLabel={'Brijes Bhikadiya'}
          refs={fullNameRef}
          label={'moblieno'}
          isflexstart={false}
          // focusnext={() => surnameRef.current?.focus()} // ✅ Now this works
          inputLabel={'Full Name'}
          blur={false}
          leftIcon={false}
          keyaboardType={'default'}
          value={fullName}
          onChangeFun={onChangeFullName}
          autoCapitalize={'none'}
          errorMessage={fullNameError}
          setErrorMessage={setFullNameError} // ✅ Just pass this once
          maxlength={200}
          isMultiline={false}
          isBorder={false}
          isPassword={true}
        />

        <CustomButton
        btnTitle={'Login'}
        btnPress={handle}
        />

        <TitleSubtitle title={'Enter Verificatio Code'} subtitle={'We have sent you a verification code on your mobile number'}/>
      </View>
    </View>
  );
};

export default LoginComponent;
