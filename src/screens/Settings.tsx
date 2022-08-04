import React from 'react';
import { View} from 'react-native';
import SettingsList from 'react-native-settings-list';
import styles from "./screenStyles/SettingStyles";


interface Props {
  navigation: any;
}

const Settings: React.FC<Props> = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <SettingsList borderColor="white" backgroundColor="white">
        <SettingsList.Header
          headerText="Settings"
          headerStyle={styles.setting}
          testId='settings'
        />
        <SettingsList.Item
          hasNavArrow={true}
          title="Notification settings"
          titleStyle={styles.settingItems}
          testId='openSettings'
        />

        <SettingsList.Header
          headerText="General"
          headerStyle={styles.general}
        />
        <SettingsList.Item
          hasNavArrow={false}
          title="About Medstick"
          titleStyle={styles.settingItems}
          testId='aboutApp'
        />
        <SettingsList.Item
          hasNavArrow={false}
          title="Share with friends and family"
          titleStyle={styles.settingItems}
          
        />
      </SettingsList>
    </View>
  );
};

export default Settings;

