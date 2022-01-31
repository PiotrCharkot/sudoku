import React from "react";
import { View, Text } from "react-native";

const Timer = (params) => {
  return (
    <View>
      <Text>
        {params.time.hour < 10 ? "0" + params.time.hour : params.time.hour}:
        {params.time.minute < 10
          ? "0" + params.time.minute
          : params.time.minute}
        :
        {params.time.second < 10
          ? "0" + params.time.second
          : params.time.second}
      </Text>
    </View>
  );
};

export default Timer;
