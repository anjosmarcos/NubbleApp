import {useNavigation} from '@react-navigation/native';

import {AuthStackParamList} from '@routes';

export function useResetNavigationSucess() {
  const navigation = useNavigation();

  function reset(params: AuthStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {name: 'LoginSreen'},
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }

  return {reset};
}
