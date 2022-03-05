import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";
import { db, auth } from "../firebase";
import styles from "./styles";

const RankEasyScreen = () => {
  const [numberOfGames, setNumberOfGames] = useState(0);
  const [finishedGames, setFinishedGames] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [bestTime, setBestTime] = useState(0);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hourB, setHourB] = useState(0);
  const [minutesB, setMinutesB] = useState(0);
  const [secondsB, setSecondsB] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const anon = "Guest Player";

  const setTime = (time) => {
    setHour(() => {
      return Math.floor(time / 3600);
    });
    setMinutes(() => {
      let min = Math.floor(time / 60);
      if (min > 59) {
        min = min % 60;
      }
      return min;
    });
    setSeconds(() => {
      return Math.floor(time % 60);
    });
  };

  const setTimeB = (time) => {
    setHourB(() => {
      return Math.floor(time / 3600);
    });
    setMinutesB(() => {
      let min = Math.floor(time / 60);
      if (min > 59) {
        min = min % 60;
      }
      return min;
    });
    setSecondsB(() => {
      return Math.floor(time % 60);
    });
  };

  const getDataFromFB = (doc) => {
    setNumberOfGames(doc.data().numberOfGamesM);
    setFinishedGames(doc.data().numberOfFinishedGamesM);
    setBestTime(doc.data().bestTimeM);
    setTotalTime(doc.data().totalTimeM);
    setShowResult(true);
  };

  useEffect(() => {
    const setData = db
      .collection("usersData")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.id === auth.currentUser.uid) {
            getDataFromFB(doc);
          }
        });
      });
    return setData;
  }, []);

  useEffect(() => {
    if (showResult) {
      if (finishedGames !== 0) {
        setTime(totalTime / finishedGames);
      }
      setTimeB(bestTime);
    }
  }, [showResult]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/gadientBlue-Blue.png")}
        resizeMode="cover"
        style={styles.backgroundImg}
      >
        <View style={styles.resultContainer}>
          <View>
            <Text style={styles.playersName}>
              {auth.currentUser.displayName || anon}
            </Text>
          </View>

          <View style={styles.inLine}>
            <View style={styles.inLineLeft}>
              <Text style={[styles.textRes, { fontFamily: "Caveat" }]}>
                Games Played
              </Text>
            </View>
            <View style={styles.inLineRight}>
              <Text style={styles.textRes}>{numberOfGames}</Text>
            </View>
          </View>
          <View style={styles.inLine}>
            <View style={styles.inLineLeft}>
              <Text style={[styles.textRes, { fontFamily: "Caveat" }]}>
                Games Won
              </Text>
            </View>
            <View style={styles.inLineRight}>
              <Text style={styles.textRes}>{finishedGames}</Text>
            </View>
          </View>
          <View style={styles.inLine}>
            <View style={styles.inLineLeft}>
              <Text style={[styles.textRes, { fontFamily: "Caveat" }]}>
                Success ratio
              </Text>
            </View>
            <View style={styles.inLineRight}>
              <Text style={styles.textRes}>
                {finishedGames !== 0
                  ? ((finishedGames * 100) / numberOfGames) % 1 === 0
                    ? (finishedGames * 100) / numberOfGames
                    : ((finishedGames * 100) / numberOfGames).toFixed(2)
                  : 0}{" "}
                %
              </Text>
            </View>
          </View>
          <View style={styles.inLine}>
            <View style={styles.inLineLeft}>
              <Text style={[styles.textRes, { fontFamily: "Caveat" }]}>
                Best Time
              </Text>
            </View>
            <View style={styles.inLineRight}>
              <Text style={styles.textRes}>
                {" "}
                {hourB < 10 ? "0" + hourB : hourB}:
                {minutesB < 10 ? "0" + minutesB : minutesB}:
                {secondsB < 10 ? "0" + secondsB : secondsB}
              </Text>
            </View>
          </View>
          <View style={styles.inLine}>
            <View style={styles.inLineLeft}>
              <Text style={[styles.textRes, { fontFamily: "Caveat" }]}>
                Average Time
              </Text>
            </View>
            <View style={styles.inLineRight}>
              <Text style={styles.textRes}>
                {hour < 10 ? "0" + hour : hour}:
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RankEasyScreen;
