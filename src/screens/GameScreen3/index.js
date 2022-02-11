import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import { Audio } from "expo-av";
import { db, auth } from "../firebase";
import NoteFiled from "../../components/NoteField";
import NumField from "../../components/NumField";
import AnimatedTest from "../AnimatedTest";
import Timer from "../../components/Timer";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlay,
  faPause,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";

//send data fo firebase
//game lost func
//fix color in dark mode
//personal statistisk and overall ranking for diff levels
//changess!

const GameScreen3 = ({ route }) => {
  const screenWidth = Dimensions.get("window").width;
  const urlLink = "https://knotty-alpine-puppy.glitch.me/gridData";
  const messagesSecond = [
    "Oh well... That is not correct...",
    "I'm sure you can do better",
    "Come on... really...",
    "Are you sure???",
    "Nope, nope, nope",
    "That's not correct",
  ];
  const messagesThird = [
    "That was your last chance...",
    "You'll do better next time",
    "You can't win every time...",
  ];
  const [darkMode, setDarkMode] = useState(false);
  const [showTime, setShowTime] = useState(true);
  const [soundOn, setSoundOn] = useState(true); 
  const [sound, setSound] = useState();
  const [numberOfGames, setNumberOfGames] = 0;
  const [numberOfFinishedGames, setNumberOfFinishedGames] = 0;
  const [gameWon, setGameWon] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [notesOn, setNotesOn] = useState(false);
  const [pauseOn, setPauseOn] = useState(false);
  const [blurLayer, setBlurLayer] = useState(0);
  const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });
  const [interv, setInterv] = useState();
  const [dummy, setDummy] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState(
    messagesSecond[Math.floor(Math.random() * messagesSecond.length)]
  );
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);
  const [pressed4, setPressed4] = useState(false);
  const [pressed5, setPressed5] = useState(false);
  const [pressed6, setPressed6] = useState(false);
  const [pressed7, setPressed7] = useState(false);
  const [pressed8, setPressed8] = useState(false);
  const [pressed9, setPressed9] = useState(false);
  const [pressed10, setPressed10] = useState(false);
  const [pressed11, setPressed11] = useState(false);
  const [pressed12, setPressed12] = useState(false);
  const [pressed13, setPressed13] = useState(false);
  const [pressed14, setPressed14] = useState(false);
  const [pressed15, setPressed15] = useState(false);
  const [pressed16, setPressed16] = useState(false);
  const [pressed17, setPressed17] = useState(false);
  const [pressed18, setPressed18] = useState(false);
  const [pressed19, setPressed19] = useState(false);
  const [pressed20, setPressed20] = useState(false);
  const [pressed21, setPressed21] = useState(false);
  const [pressed22, setPressed22] = useState(false);
  const [pressed23, setPressed23] = useState(false);
  const [pressed24, setPressed24] = useState(false);
  const [pressed25, setPressed25] = useState(false);
  const [pressed26, setPressed26] = useState(false);
  const [pressed27, setPressed27] = useState(false);
  const [pressed28, setPressed28] = useState(false);
  const [pressed29, setPressed29] = useState(false);
  const [pressed30, setPressed30] = useState(false);
  const [pressed31, setPressed31] = useState(false);
  const [pressed32, setPressed32] = useState(false);
  const [pressed33, setPressed33] = useState(false);
  const [pressed34, setPressed34] = useState(false);
  const [pressed35, setPressed35] = useState(false);
  const [pressed36, setPressed36] = useState(false);
  const [pressed37, setPressed37] = useState(false);
  const [pressed38, setPressed38] = useState(false);
  const [pressed39, setPressed39] = useState(false);
  const [pressed40, setPressed40] = useState(false);
  const [pressed41, setPressed41] = useState(false);
  const [pressed42, setPressed42] = useState(false);
  const [pressed43, setPressed43] = useState(false);
  const [pressed44, setPressed44] = useState(false);
  const [pressed45, setPressed45] = useState(false);
  const [pressed46, setPressed46] = useState(false);
  const [pressed47, setPressed47] = useState(false);
  const [pressed48, setPressed48] = useState(false);
  const [pressed49, setPressed49] = useState(false);
  const [pressed50, setPressed50] = useState(false);
  const [pressed51, setPressed51] = useState(false);
  const [pressed52, setPressed52] = useState(false);
  const [pressed53, setPressed53] = useState(false);
  const [pressed54, setPressed54] = useState(false);
  const [pressed55, setPressed55] = useState(false);
  const [pressed56, setPressed56] = useState(false);
  const [pressed57, setPressed57] = useState(false);
  const [pressed58, setPressed58] = useState(false);
  const [pressed59, setPressed59] = useState(false);
  const [pressed60, setPressed60] = useState(false);
  const [pressed61, setPressed61] = useState(false);
  const [pressed62, setPressed62] = useState(false);
  const [pressed63, setPressed63] = useState(false);
  const [pressed64, setPressed64] = useState(false);
  const [pressed65, setPressed65] = useState(false);
  const [pressed66, setPressed66] = useState(false);
  const [pressed67, setPressed67] = useState(false);
  const [pressed68, setPressed68] = useState(false);
  const [pressed69, setPressed69] = useState(false);
  const [pressed70, setPressed70] = useState(false);
  const [pressed71, setPressed71] = useState(false);
  const [pressed72, setPressed72] = useState(false);
  const [pressed73, setPressed73] = useState(false);
  const [pressed74, setPressed74] = useState(false);
  const [pressed75, setPressed75] = useState(false);
  const [pressed76, setPressed76] = useState(false);
  const [pressed77, setPressed77] = useState(false);
  const [pressed78, setPressed78] = useState(false);
  const [pressed79, setPressed79] = useState(false);
  const [pressed80, setPressed80] = useState(false);
  const [pressed81, setPressed81] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");
  const [value10, setValue10] = useState("");
  const [value11, setValue11] = useState("");
  const [value12, setValue12] = useState("");
  const [value13, setValue13] = useState("");
  const [value14, setValue14] = useState("");
  const [value15, setValue15] = useState("");
  const [value16, setValue16] = useState("");
  const [value17, setValue17] = useState("");
  const [value18, setValue18] = useState("");
  const [value19, setValue19] = useState("");
  const [value20, setValue20] = useState("");
  const [value21, setValue21] = useState("");
  const [value22, setValue22] = useState("");
  const [value23, setValue23] = useState("");
  const [value24, setValue24] = useState("");
  const [value25, setValue25] = useState("");
  const [value26, setValue26] = useState("");
  const [value27, setValue27] = useState("");
  const [value28, setValue28] = useState("");
  const [value29, setValue29] = useState("");
  const [value30, setValue30] = useState("");
  const [value31, setValue31] = useState("");
  const [value32, setValue32] = useState("");
  const [value33, setValue33] = useState("");
  const [value34, setValue34] = useState("");
  const [value35, setValue35] = useState("");
  const [value36, setValue36] = useState("");
  const [value37, setValue37] = useState("");
  const [value38, setValue38] = useState("");
  const [value39, setValue39] = useState("");
  const [value40, setValue40] = useState("");
  const [value41, setValue41] = useState("");
  const [value42, setValue42] = useState("");
  const [value43, setValue43] = useState("");
  const [value44, setValue44] = useState("");
  const [value45, setValue45] = useState("");
  const [value46, setValue46] = useState("");
  const [value47, setValue47] = useState("");
  const [value48, setValue48] = useState("");
  const [value49, setValue49] = useState("");
  const [value50, setValue50] = useState("");
  const [value51, setValue51] = useState("");
  const [value52, setValue52] = useState("");
  const [value53, setValue53] = useState("");
  const [value54, setValue54] = useState("");
  const [value55, setValue55] = useState("");
  const [value56, setValue56] = useState("");
  const [value57, setValue57] = useState("");
  const [value58, setValue58] = useState("");
  const [value59, setValue59] = useState("");
  const [value60, setValue60] = useState("");
  const [value61, setValue61] = useState("");
  const [value62, setValue62] = useState("");
  const [value63, setValue63] = useState("");
  const [value64, setValue64] = useState("");
  const [value65, setValue65] = useState("");
  const [value66, setValue66] = useState("");
  const [value67, setValue67] = useState("");
  const [value68, setValue68] = useState("");
  const [value69, setValue69] = useState("");
  const [value70, setValue70] = useState("");
  const [value71, setValue71] = useState("");
  const [value72, setValue72] = useState("");
  const [value73, setValue73] = useState("");
  const [value74, setValue74] = useState("");
  const [value75, setValue75] = useState("");
  const [value76, setValue76] = useState("");
  const [value77, setValue77] = useState("");
  const [value78, setValue78] = useState("");
  const [value79, setValue79] = useState("");
  const [value80, setValue80] = useState("");
  const [value81, setValue81] = useState("");
  const [fixed1, setFixed1] = useState(true);
  const [fixed2, setFixed2] = useState(true);
  const [fixed3, setFixed3] = useState(true);
  const [fixed4, setFixed4] = useState(true);
  const [fixed5, setFixed5] = useState(true);
  const [fixed6, setFixed6] = useState(true);
  const [fixed7, setFixed7] = useState(true);
  const [fixed8, setFixed8] = useState(true);
  const [fixed9, setFixed9] = useState(true);
  const [fixed10, setFixed10] = useState(true);
  const [fixed11, setFixed11] = useState(true);
  const [fixed12, setFixed12] = useState(true);
  const [fixed13, setFixed13] = useState(true);
  const [fixed14, setFixed14] = useState(true);
  const [fixed15, setFixed15] = useState(true);
  const [fixed16, setFixed16] = useState(true);
  const [fixed17, setFixed17] = useState(true);
  const [fixed18, setFixed18] = useState(false);
  const [fixed19, setFixed19] = useState(false);
  const [fixed20, setFixed20] = useState(true);
  const [fixed21, setFixed21] = useState(true);
  const [fixed22, setFixed22] = useState(true);
  const [fixed23, setFixed23] = useState(true);
  const [fixed24, setFixed24] = useState(true);
  const [fixed25, setFixed25] = useState(true);
  const [fixed26, setFixed26] = useState(true);
  const [fixed27, setFixed27] = useState(false);
  const [fixed28, setFixed28] = useState(true);
  const [fixed29, setFixed29] = useState(true);
  const [fixed30, setFixed30] = useState(true);
  const [fixed31, setFixed31] = useState(true);
  const [fixed32, setFixed32] = useState(true);
  const [fixed33, setFixed33] = useState(true);
  const [fixed34, setFixed34] = useState(true);
  const [fixed35, setFixed35] = useState(true);
  const [fixed36, setFixed36] = useState(true);
  const [fixed37, setFixed37] = useState(true);
  const [fixed38, setFixed38] = useState(true);
  const [fixed39, setFixed39] = useState(true);
  const [fixed40, setFixed40] = useState(true);
  const [fixed41, setFixed41] = useState(true);
  const [fixed42, setFixed42] = useState(true);
  const [fixed43, setFixed43] = useState(true);
  const [fixed44, setFixed44] = useState(true);
  const [fixed45, setFixed45] = useState(true);
  const [fixed46, setFixed46] = useState(false);
  const [fixed47, setFixed47] = useState(true);
  const [fixed48, setFixed48] = useState(true);
  const [fixed49, setFixed49] = useState(true);
  const [fixed50, setFixed50] = useState(true);
  const [fixed51, setFixed51] = useState(true);
  const [fixed52, setFixed52] = useState(true);
  const [fixed53, setFixed53] = useState(true);
  const [fixed54, setFixed54] = useState(true);
  const [fixed55, setFixed55] = useState(true);
  const [fixed56, setFixed56] = useState(true);
  const [fixed57, setFixed57] = useState(true);
  const [fixed58, setFixed58] = useState(true);
  const [fixed59, setFixed59] = useState(true);
  const [fixed60, setFixed60] = useState(true);
  const [fixed61, setFixed61] = useState(true);
  const [fixed62, setFixed62] = useState(true);
  const [fixed63, setFixed63] = useState(true);
  const [fixed64, setFixed64] = useState(true);
  const [fixed65, setFixed65] = useState(true);
  const [fixed66, setFixed66] = useState(true);
  const [fixed67, setFixed67] = useState(true);
  const [fixed68, setFixed68] = useState(true);
  const [fixed69, setFixed69] = useState(true);
  const [fixed70, setFixed70] = useState(true);
  const [fixed71, setFixed71] = useState(true);
  const [fixed72, setFixed72] = useState(true);
  const [fixed73, setFixed73] = useState(true);
  const [fixed74, setFixed74] = useState(true);
  const [fixed75, setFixed75] = useState(true);
  const [fixed76, setFixed76] = useState(true);
  const [fixed77, setFixed77] = useState(true);
  const [fixed78, setFixed78] = useState(true);
  const [fixed79, setFixed79] = useState(true);
  const [fixed80, setFixed80] = useState(true);
  const [fixed81, setFixed81] = useState(true);
  const [choosenNum, setChoosenNum] = useState("A");
  const [notes, setNotes] = useState([
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
  ]);
  const arrOfChoice = [
    pressed1,
    pressed2,
    pressed3,
    pressed4,
    pressed5,
    pressed6,
    pressed7,
    pressed8,
    pressed9,
    pressed10,
    pressed11,
    pressed12,
    pressed13,
    pressed14,
    pressed15,
    pressed16,
    pressed17,
    pressed18,
    pressed19,
    pressed20,
    pressed21,
    pressed22,
    pressed23,
    pressed24,
    pressed25,
    pressed26,
    pressed27,
    pressed28,
    pressed29,
    pressed30,
    pressed31,
    pressed32,
    pressed33,
    pressed34,
    pressed35,
    pressed36,
    pressed37,
    pressed38,
    pressed39,
    pressed40,
    pressed41,
    pressed42,
    pressed43,
    pressed44,
    pressed45,
    pressed46,
    pressed47,
    pressed48,
    pressed49,
    pressed50,
    pressed51,
    pressed52,
    pressed53,
    pressed54,
    pressed55,
    pressed56,
    pressed57,
    pressed58,
    pressed59,
    pressed60,
    pressed61,
    pressed62,
    pressed63,
    pressed64,
    pressed65,
    pressed66,
    pressed67,
    pressed68,
    pressed69,
    pressed70,
    pressed71,
    pressed72,
    pressed73,
    pressed74,
    pressed75,
    pressed76,
    pressed77,
    pressed78,
    pressed79,
    pressed80,
    pressed81,
  ];
  const arrOfChoice1 = [
    setPressed1,
    setPressed2,
    setPressed3,
    setPressed4,
    setPressed5,
    setPressed6,
    setPressed7,
    setPressed8,
    setPressed9,
    setPressed10,
    setPressed11,
    setPressed12,
    setPressed13,
    setPressed14,
    setPressed15,
    setPressed16,
    setPressed17,
    setPressed18,
    setPressed19,
    setPressed20,
    setPressed21,
    setPressed22,
    setPressed23,
    setPressed24,
    setPressed25,
    setPressed26,
    setPressed27,
    setPressed28,
    setPressed29,
    setPressed30,
    setPressed31,
    setPressed32,
    setPressed33,
    setPressed34,
    setPressed35,
    setPressed36,
    setPressed37,
    setPressed38,
    setPressed39,
    setPressed40,
    setPressed41,
    setPressed42,
    setPressed43,
    setPressed44,
    setPressed45,
    setPressed46,
    setPressed47,
    setPressed48,
    setPressed49,
    setPressed50,
    setPressed51,
    setPressed52,
    setPressed53,
    setPressed54,
    setPressed55,
    setPressed56,
    setPressed57,
    setPressed58,
    setPressed59,
    setPressed60,
    setPressed61,
    setPressed62,
    setPressed63,
    setPressed64,
    setPressed65,
    setPressed66,
    setPressed67,
    setPressed68,
    setPressed69,
    setPressed70,
    setPressed71,
    setPressed72,
    setPressed73,
    setPressed74,
    setPressed75,
    setPressed76,
    setPressed77,
    setPressed78,
    setPressed79,
    setPressed80,
    setPressed81,
  ];
  const arrOFValues = [
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
    value14,
    value15,
    value16,
    value17,
    value18,
    value19,
    value20,
    value21,
    value22,
    value23,
    value24,
    value25,
    value26,
    value27,
    value28,
    value29,
    value30,
    value31,
    value32,
    value33,
    value34,
    value35,
    value36,
    value37,
    value38,
    value39,
    value40,
    value41,
    value42,
    value43,
    value44,
    value45,
    value46,
    value47,
    value48,
    value49,
    value50,
    value51,
    value52,
    value53,
    value54,
    value55,
    value56,
    value57,
    value58,
    value59,
    value60,
    value61,
    value62,
    value63,
    value64,
    value65,
    value66,
    value67,
    value68,
    value69,
    value70,
    value71,
    value72,
    value73,
    value74,
    value75,
    value76,
    value77,
    value78,
    value79,
    value80,
    value81,
  ];
  const arrOfFixed = [
    setFixed1,
    setFixed2,
    setFixed3,
    setFixed4,
    setFixed5,
    setFixed6,
    setFixed7,
    setFixed8,
    setFixed9,
    setFixed10,
    setFixed11,
    setFixed12,
    setFixed13,
    setFixed14,
    setFixed15,
    setFixed16,
    setFixed17,
    setFixed18,
    setFixed19,
    setFixed20,
    setFixed21,
    setFixed22,
    setFixed23,
    setFixed24,
    setFixed25,
    setFixed26,
    setFixed27,
    setFixed28,
    setFixed29,
    setFixed30,
    setFixed31,
    setFixed32,
    setFixed33,
    setFixed34,
    setFixed35,
    setFixed36,
    setFixed37,
    setFixed38,
    setFixed39,
    setFixed40,
    setFixed41,
    setFixed42,
    setFixed43,
    setFixed44,
    setFixed45,
    setFixed46,
    setFixed47,
    setFixed48,
    setFixed49,
    setFixed50,
    setFixed51,
    setFixed52,
    setFixed53,
    setFixed54,
    setFixed55,
    setFixed56,
    setFixed57,
    setFixed58,
    setFixed59,
    setFixed60,
    setFixed61,
    setFixed62,
    setFixed63,
    setFixed64,
    setFixed65,
    setFixed66,
    setFixed67,
    setFixed68,
    setFixed69,
    setFixed70,
    setFixed71,
    setFixed72,
    setFixed73,
    setFixed74,
    setFixed75,
    setFixed76,
    setFixed77,
    setFixed78,
    setFixed79,
    setFixed80,
    setFixed81,
  ];
  const arrOfFixed1 = [
    fixed1,
    fixed2,
    fixed3,
    fixed4,
    fixed5,
    fixed6,
    fixed7,
    fixed8,
    fixed9,
    fixed10,
    fixed11,
    fixed12,
    fixed13,
    fixed14,
    fixed15,
    fixed16,
    fixed17,
    fixed18,
    fixed19,
    fixed20,
    fixed21,
    fixed22,
    fixed23,
    fixed24,
    fixed25,
    fixed26,
    fixed27,
    fixed28,
    fixed29,
    fixed30,
    fixed31,
    fixed32,
    fixed33,
    fixed34,
    fixed35,
    fixed36,
    fixed37,
    fixed38,
    fixed39,
    fixed40,
    fixed41,
    fixed42,
    fixed43,
    fixed44,
    fixed45,
    fixed46,
    fixed47,
    fixed48,
    fixed49,
    fixed50,
    fixed51,
    fixed52,
    fixed53,
    fixed54,
    fixed55,
    fixed56,
    fixed57,
    fixed58,
    fixed59,
    fixed60,
    fixed61,
    fixed62,
    fixed63,
    fixed64,
    fixed65,
    fixed66,
    fixed67,
    fixed68,
    fixed69,
    fixed70,
    fixed71,
    fixed72,
    fixed73,
    fixed74,
    fixed75,
    fixed76,
    fixed77,
    fixed78,
    fixed79,
    fixed80,
    fixed81,
  ];
  const r1 = [
    fixed1,
    fixed2,
    fixed3,
    fixed4,
    fixed5,
    fixed6,
    fixed7,
    fixed8,
    fixed9,
  ];
  const r2 = [
    fixed10,
    fixed11,
    fixed12,
    fixed13,
    fixed14,
    fixed15,
    fixed16,
    fixed17,
    fixed18,
  ];
  const r3 = [
    fixed19,
    fixed20,
    fixed21,
    fixed22,
    fixed23,
    fixed24,
    fixed25,
    fixed26,
    fixed27,
  ];
  const r4 = [
    fixed28,
    fixed29,
    fixed30,
    fixed31,
    fixed32,
    fixed33,
    fixed34,
    fixed35,
    fixed36,
  ];
  const r5 = [
    fixed37,
    fixed38,
    fixed39,
    fixed40,
    fixed41,
    fixed42,
    fixed43,
    fixed44,
    fixed45,
  ];
  const r6 = [
    fixed46,
    fixed47,
    fixed48,
    fixed49,
    fixed50,
    fixed51,
    fixed52,
    fixed53,
    fixed54,
  ];
  const r7 = [
    fixed55,
    fixed56,
    fixed57,
    fixed58,
    fixed59,
    fixed60,
    fixed61,
    fixed62,
    fixed63,
  ];
  const r8 = [
    fixed64,
    fixed65,
    fixed66,
    fixed67,
    fixed68,
    fixed69,
    fixed70,
    fixed71,
    fixed72,
  ];
  const r9 = [
    fixed73,
    fixed74,
    fixed75,
    fixed76,
    fixed77,
    fixed78,
    fixed79,
    fixed80,
    fixed81,
  ];
  const c1 = [
    fixed1,
    fixed10,
    fixed19,
    fixed28,
    fixed37,
    fixed46,
    fixed55,
    fixed64,
    fixed73,
  ];
  const c2 = [
    fixed2,
    fixed11,
    fixed20,
    fixed29,
    fixed38,
    fixed47,
    fixed56,
    fixed65,
    fixed74,
  ];
  const c3 = [
    fixed3,
    fixed12,
    fixed21,
    fixed30,
    fixed39,
    fixed48,
    fixed57,
    fixed66,
    fixed75,
  ];
  const c4 = [
    fixed4,
    fixed13,
    fixed22,
    fixed31,
    fixed40,
    fixed49,
    fixed58,
    fixed67,
    fixed76,
  ];
  const c5 = [
    fixed5,
    fixed14,
    fixed23,
    fixed32,
    fixed41,
    fixed50,
    fixed59,
    fixed68,
    fixed77,
  ];
  const c6 = [
    fixed6,
    fixed15,
    fixed24,
    fixed33,
    fixed42,
    fixed51,
    fixed60,
    fixed69,
    fixed78,
  ];
  const c7 = [
    fixed7,
    fixed16,
    fixed25,
    fixed34,
    fixed43,
    fixed52,
    fixed61,
    fixed70,
    fixed79,
  ];
  const c8 = [
    fixed8,
    fixed17,
    fixed26,
    fixed35,
    fixed44,
    fixed53,
    fixed62,
    fixed71,
    fixed80,
  ];
  const c9 = [
    fixed9,
    fixed18,
    fixed27,
    fixed36,
    fixed45,
    fixed54,
    fixed63,
    fixed72,
    fixed81,
  ];
  const s1 = [
    fixed1,
    fixed2,
    fixed3,
    fixed10,
    fixed11,
    fixed12,
    fixed19,
    fixed20,
    fixed21,
  ];
  const s2 = [
    fixed4,
    fixed5,
    fixed6,
    fixed13,
    fixed14,
    fixed15,
    fixed22,
    fixed23,
    fixed24,
  ];
  const s3 = [
    fixed7,
    fixed8,
    fixed9,
    fixed16,
    fixed17,
    fixed18,
    fixed25,
    fixed26,
    fixed27,
  ];
  const s4 = [
    fixed28,
    fixed29,
    fixed30,
    fixed37,
    fixed38,
    fixed39,
    fixed46,
    fixed47,
    fixed48,
  ];
  const s5 = [
    fixed31,
    fixed32,
    fixed33,
    fixed40,
    fixed41,
    fixed42,
    fixed49,
    fixed50,
    fixed51,
  ];
  const s6 = [
    fixed34,
    fixed35,
    fixed36,
    fixed43,
    fixed44,
    fixed45,
    fixed52,
    fixed53,
    fixed54,
  ];
  const s7 = [
    fixed55,
    fixed56,
    fixed57,
    fixed64,
    fixed65,
    fixed66,
    fixed73,
    fixed74,
    fixed75,
  ];
  const s8 = [
    fixed58,
    fixed59,
    fixed60,
    fixed67,
    fixed68,
    fixed69,
    fixed76,
    fixed77,
    fixed78,
  ];
  const s9 = [
    fixed61,
    fixed62,
    fixed63,
    fixed70,
    fixed71,
    fixed72,
    fixed79,
    fixed80,
    fixed81,
  ];

  const moveMessage = useRef(new Animated.Value(-screenWidth)).current;
  const blurIntensity = useRef(new Animated.Value(0)).current;
  const infoOpacity = useRef(new Animated.Value(0)).current;
  const endOpacity1 = useRef(new Animated.Value(1)).current;
  const endOpacity2 = useRef(new Animated.Value(1)).current;
  const endOpacity3 = useRef(new Animated.Value(1)).current;
  const endOpacity4 = useRef(new Animated.Value(1)).current;
  const endOpacity5 = useRef(new Animated.Value(1)).current;
  const endOpacity6 = useRef(new Animated.Value(1)).current;
  const endOpacity7 = useRef(new Animated.Value(1)).current;
  const endOpacity8 = useRef(new Animated.Value(1)).current;
  const endOpacity9 = useRef(new Animated.Value(1)).current;
  const endOpacity10 = useRef(new Animated.Value(1)).current;
  const endOpacity11 = useRef(new Animated.Value(1)).current;
  const endOpacity12 = useRef(new Animated.Value(1)).current;
  const endOpacity13 = useRef(new Animated.Value(1)).current;
  const endOpacity14 = useRef(new Animated.Value(1)).current;
  const endOpacity15 = useRef(new Animated.Value(1)).current;
  const endOpacity16 = useRef(new Animated.Value(1)).current;
  const endOpacity17 = useRef(new Animated.Value(1)).current;
  const endOpacity18 = useRef(new Animated.Value(1)).current;
  const endOpacity19 = useRef(new Animated.Value(1)).current;
  const endOpacity20 = useRef(new Animated.Value(1)).current;
  const endOpacity21 = useRef(new Animated.Value(1)).current;
  const endOpacity22 = useRef(new Animated.Value(1)).current;
  const endOpacity23 = useRef(new Animated.Value(1)).current;
  const endOpacity24 = useRef(new Animated.Value(1)).current;
  const endOpacity25 = useRef(new Animated.Value(1)).current;
  const endOpacity26 = useRef(new Animated.Value(1)).current;
  const endOpacity27 = useRef(new Animated.Value(1)).current;
  const endOpacity28 = useRef(new Animated.Value(1)).current;
  const endOpacity29 = useRef(new Animated.Value(1)).current;
  const endOpacity30 = useRef(new Animated.Value(1)).current;
  const endOpacity31 = useRef(new Animated.Value(1)).current;
  const endOpacity32 = useRef(new Animated.Value(1)).current;
  const endOpacity33 = useRef(new Animated.Value(1)).current;
  const endOpacity34 = useRef(new Animated.Value(1)).current;
  const endOpacity35 = useRef(new Animated.Value(1)).current;
  const endOpacity36 = useRef(new Animated.Value(1)).current;
  const endOpacity37 = useRef(new Animated.Value(1)).current;
  const endOpacity38 = useRef(new Animated.Value(1)).current;
  const endOpacity39 = useRef(new Animated.Value(1)).current;
  const endOpacity40 = useRef(new Animated.Value(1)).current;
  const endOpacity41 = useRef(new Animated.Value(1)).current;
  const endOpacity42 = useRef(new Animated.Value(1)).current;
  const endOpacity43 = useRef(new Animated.Value(1)).current;
  const endOpacity44 = useRef(new Animated.Value(1)).current;
  const endOpacity45 = useRef(new Animated.Value(1)).current;
  const endOpacity46 = useRef(new Animated.Value(1)).current;
  const endOpacity47 = useRef(new Animated.Value(1)).current;
  const endOpacity48 = useRef(new Animated.Value(1)).current;
  const endOpacity49 = useRef(new Animated.Value(1)).current;
  const endOpacity50 = useRef(new Animated.Value(1)).current;
  const endOpacity51 = useRef(new Animated.Value(1)).current;
  const endOpacity52 = useRef(new Animated.Value(1)).current;
  const endOpacity53 = useRef(new Animated.Value(1)).current;
  const endOpacity54 = useRef(new Animated.Value(1)).current;
  const endOpacity55 = useRef(new Animated.Value(1)).current;
  const endOpacity56 = useRef(new Animated.Value(1)).current;
  const endOpacity57 = useRef(new Animated.Value(1)).current;
  const endOpacity58 = useRef(new Animated.Value(1)).current;
  const endOpacity59 = useRef(new Animated.Value(1)).current;
  const endOpacity60 = useRef(new Animated.Value(1)).current;
  const endOpacity61 = useRef(new Animated.Value(1)).current;
  const endOpacity62 = useRef(new Animated.Value(1)).current;
  const endOpacity63 = useRef(new Animated.Value(1)).current;
  const endOpacity64 = useRef(new Animated.Value(1)).current;
  const endOpacity65 = useRef(new Animated.Value(1)).current;
  const endOpacity66 = useRef(new Animated.Value(1)).current;
  const endOpacity67 = useRef(new Animated.Value(1)).current;
  const endOpacity68 = useRef(new Animated.Value(1)).current;
  const endOpacity69 = useRef(new Animated.Value(1)).current;
  const endOpacity70 = useRef(new Animated.Value(1)).current;
  const endOpacity71 = useRef(new Animated.Value(1)).current;
  const endOpacity72 = useRef(new Animated.Value(1)).current;
  const endOpacity73 = useRef(new Animated.Value(1)).current;
  const endOpacity74 = useRef(new Animated.Value(1)).current;
  const endOpacity75 = useRef(new Animated.Value(1)).current;
  const endOpacity76 = useRef(new Animated.Value(1)).current;
  const endOpacity77 = useRef(new Animated.Value(1)).current;
  const endOpacity78 = useRef(new Animated.Value(1)).current;
  const endOpacity79 = useRef(new Animated.Value(1)).current;
  const endOpacity80 = useRef(new Animated.Value(1)).current;
  const endOpacity81 = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();
  var updateH = time.hour,
    updateM = time.minute,
    updateS = time.second;

  const updateClock = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    updateS++;
    return setTime({ hour: updateH, minute: updateM, second: updateS });
  };

  const pressedSquare = (ind) => {
    console.log("numer", ind);
    arrOfChoice1.forEach((el) => el(false));
    if (!arrOfFixed1[ind - 1]) {
      arrOfChoice1[ind - 1](!arrOfChoice[ind - 1]);
      if (!arrOfChoice[ind - 1]) {
        setChoosenNum(ind);
      } else {
        setChoosenNum("A");
      }
    } else {
      setChoosenNum("A");
    }
    if (soundOn) {
      playSound();
    }
  };

  const switchNotes = () => {
    setNotesOn(() => {
      return !notesOn;
    });
  };

  const switchPause = () => {
    if (!pauseOn) {
      clearInterval(interv);
      setBlurLayer(2);
      Animated.timing(blurIntensity, {
        toValue: 1,
        useNativeDriver: true,
        duration: 1000,
      }).start();
    } else if (pauseOn) {
      setTimeout(() => {
        if (!gameWon) {
          updateClock();
          setInterv(setInterval(updateClock, 1000));
        }
        setBlurLayer(0);
      }, 1000);
      Animated.timing(blurIntensity, {
        toValue: 0,
        useNativeDriver: true,
        duration: 1000,
      }).start();
    }
    setPauseOn(() => {
      return !pauseOn;
    });
  };

  const updateNotes = (num) => {
    if (choosenNum > 0) {
      if (num === 1) {
        notes[choosenNum - 1].a = !notes[choosenNum - 1].a;
      } else if (num === 2) {
        notes[choosenNum - 1].b = !notes[choosenNum - 1].b;
      } else if (num === 3) {
        notes[choosenNum - 1].c = !notes[choosenNum - 1].c;
      } else if (num === 4) {
        notes[choosenNum - 1].d = !notes[choosenNum - 1].d;
      } else if (num === 5) {
        notes[choosenNum - 1].e = !notes[choosenNum - 1].e;
      } else if (num === 6) {
        notes[choosenNum - 1].f = !notes[choosenNum - 1].f;
      } else if (num === 7) {
        notes[choosenNum - 1].g = !notes[choosenNum - 1].g;
      } else if (num === 8) {
        notes[choosenNum - 1].h = !notes[choosenNum - 1].h;
      } else if (num === 9) {
        notes[choosenNum - 1].i = !notes[choosenNum - 1].i;
      }
      setNotes(() => {
        return notes;
      });
      setDummy(() => {
        return !dummy;
      });
    }
  };

  const chooseNumber = (num) => {
    if (notesOn) {
      updateNotes(num);
    } else if (arrOFValues[choosenNum - 1] === num.toString()) {
      arrOfFixed[choosenNum - 1](true);
      arrOfChoice1[choosenNum - 1](false);
      setChoosenNum("A");
      if (soundOn) {
        playSoundPebbel();
      }
      runAnimation();
    } else if (
      arrOFValues[choosenNum - 1] !== num.toString() &&
      choosenNum !== "A"
    ) {
      if (mistakes < 3) {
        setMistakes(() => {
          return mistakes + 1;
        });
      }
      if (mistakes === 1) {
        let tempMessage =
          messagesSecond[Math.floor(Math.random() * messagesSecond.length)];
        console.log(tempMessage);
        setMessage(() => {
          return tempMessage;
        });
      } else if (mistakes === 2) {
        let tempMessage2 =
          messagesThird[Math.floor(Math.random() * messagesThird.length)];
        setMessage(() => {
          return tempMessage2;
        });
        //add view with choice of another game
      }
    }
    console.log(
      "square: ",
      choosenNum,
      "value in square: ",
      arrOFValues[choosenNum - 1],
      "number passed in params: ",
      num
    );
  };

  const getDataFromFB = (doc) => {
    setDarkMode(doc.data().darkMode);
    setShowTime(doc.data().showTimer);
    setSoundOn(doc.data().soundOn);
    // setNumberOfGames(doc.data().numberOfGames);
    // setNumberOfFinishedGames(doc.data().numberOfFinishedGames);
  };

  const runEndAnimation = ([p1, p2, p3, p4, p5, p6, p7, p8, p9], type) => {
    let lastSort = sortAnimation([p1, p2, p3, p4, p5, p6, p7, p8, p9], type);
    Animated.sequence([
      Animated.stagger(850, [
        Animated.parallel([
          Animated.timing(lastSort[0], {
            toValue: 0.3,
            useNativeDriver: true,
            duration: 250,
          }),
          Animated.timing(lastSort[1], {
            toValue: 0.3,
            useNativeDriver: true,
            duration: 250,
            delay: 60,
          }),
          Animated.timing(lastSort[2], {
            toValue: 0.3,
            useNativeDriver: true,
            duration: 250,
            delay: 120,
          }),
          Animated.timing(lastSort[3], {
            toValue: 0.3,
            useNativeDriver: true,
            duration: 250,
            delay: 180,
          }),
          Animated.timing(lastSort[4], {
            toValue: 0.3,
            useNativeDriver: true,
            duration: 250,
            delay: 240,
          }),
          Animated.timing(lastSort[5], {
            toValue: 0.3,
            useNativeDriver: true,
            duration: 250,
            delay: 300,
          }),
          Animated.timing(lastSort[6], {
            toValue: 0.3,
            useNativeDriver: true,
            duration: 250,
            delay: 360,
          }),
          Animated.timing(lastSort[7], {
            toValue: 0.3,
            useNativeDriver: true,
            duration: 250,
            delay: 420,
          }),
          Animated.timing(lastSort[8], {
            toValue: 0.3,
            useNativeDriver: true,
            duration: 250,
            delay: 480,
          }),
        ]),
        Animated.parallel([
          Animated.timing(lastSort[0], {
            toValue: 1,
            useNativeDriver: true,
            duration: 250,
          }),
          Animated.timing(lastSort[1], {
            toValue: 1,
            useNativeDriver: true,
            duration: 250,
            delay: 60,
          }),
          Animated.timing(lastSort[2], {
            toValue: 1,
            useNativeDriver: true,
            duration: 250,
            delay: 120,
          }),
          Animated.timing(lastSort[3], {
            toValue: 1,
            useNativeDriver: true,
            duration: 250,
            delay: 180,
          }),
          Animated.timing(lastSort[4], {
            toValue: 1,
            useNativeDriver: true,
            duration: 250,
            delay: 240,
          }),
          Animated.timing(lastSort[5], {
            toValue: 1,
            useNativeDriver: true,
            duration: 250,
            delay: 300,
          }),
          Animated.timing(lastSort[6], {
            toValue: 1,
            useNativeDriver: true,
            duration: 250,
            delay: 360,
          }),
          Animated.timing(lastSort[7], {
            toValue: 1,
            useNativeDriver: true,
            duration: 250,
            delay: 420,
          }),
          Animated.timing(lastSort[8], {
            toValue: 1,
            useNativeDriver: true,
            duration: 250,
            delay: 480,
          }),
        ]),
      ]),
      Animated.parallel([
        Animated.timing(lastSort[0], {
          toValue: 1,
          useNativeDriver: true,
          duration: 1,
        }),
        Animated.timing(lastSort[1], {
          toValue: 1,
          useNativeDriver: true,
          duration: 1,
        }),
        Animated.timing(lastSort[2], {
          toValue: 1,
          useNativeDriver: true,
          duration: 1,
        }),
        Animated.timing(lastSort[3], {
          toValue: 1,
          useNativeDriver: true,
          duration: 1,
        }),
        Animated.timing(lastSort[4], {
          toValue: 1,
          useNativeDriver: true,
          duration: 1,
        }),
        Animated.timing(lastSort[5], {
          toValue: 1,
          useNativeDriver: true,
          duration: 1,
        }),
        Animated.timing(lastSort[6], {
          toValue: 1,
          useNativeDriver: true,
          duration: 1,
        }),
        Animated.timing(lastSort[7], {
          toValue: 1,
          useNativeDriver: true,
          duration: 1,
        }),
        Animated.timing(lastSort[8], {
          toValue: 1,
          useNativeDriver: true,
          duration: 1,
        }),
      ]),
    ]).start();
  };

  const sortAnimation = (arr, type) => {
    let finalArr = [];
    let startIndex = 0;
    if (type === "row") {
      startIndex = choosenNum % 9;
      if (startIndex > 0) {
        startIndex--;
      } else {
        startIndex = 8;
      }
    } else if (type === "col") {
      startIndex = Math.floor(choosenNum / 9);
      console.log("start index in row", startIndex);
    } else if (type === "squ") {
      if (
        choosenNum === 1 ||
        choosenNum === 4 ||
        choosenNum === 7 ||
        choosenNum === 28 ||
        choosenNum === 31 ||
        choosenNum === 34 ||
        choosenNum === 55 ||
        choosenNum === 58 ||
        choosenNum === 61
      ) {
        startIndex = 0;
      } else if (
        choosenNum === 2 ||
        choosenNum === 5 ||
        choosenNum === 8 ||
        choosenNum === 29 ||
        choosenNum === 32 ||
        choosenNum === 35 ||
        choosenNum === 56 ||
        choosenNum === 59 ||
        choosenNum === 62
      ) {
        startIndex = 1;
      } else if (
        choosenNum === 3 ||
        choosenNum === 6 ||
        choosenNum === 9 ||
        choosenNum === 30 ||
        choosenNum === 33 ||
        choosenNum === 36 ||
        choosenNum === 57 ||
        choosenNum === 60 ||
        choosenNum === 63
      ) {
        startIndex = 2;
      } else if (
        choosenNum === 10 ||
        choosenNum === 13 ||
        choosenNum === 16 ||
        choosenNum === 37 ||
        choosenNum === 40 ||
        choosenNum === 43 ||
        choosenNum === 64 ||
        choosenNum === 67 ||
        choosenNum === 70
      ) {
        startIndex = 3;
      } else if (
        choosenNum === 11 ||
        choosenNum === 14 ||
        choosenNum === 17 ||
        choosenNum === 38 ||
        choosenNum === 41 ||
        choosenNum === 44 ||
        choosenNum === 65 ||
        choosenNum === 68 ||
        choosenNum === 71
      ) {
        startIndex = 4;
      } else if (
        choosenNum === 12 ||
        choosenNum === 15 ||
        choosenNum === 18 ||
        choosenNum === 39 ||
        choosenNum === 42 ||
        choosenNum === 45 ||
        choosenNum === 66 ||
        choosenNum === 69 ||
        choosenNum === 72
      ) {
        startIndex = 5;
      } else if (
        choosenNum === 19 ||
        choosenNum === 22 ||
        choosenNum === 25 ||
        choosenNum === 46 ||
        choosenNum === 49 ||
        choosenNum === 52 ||
        choosenNum === 73 ||
        choosenNum === 76 ||
        choosenNum === 79
      ) {
        startIndex = 6;
      } else if (
        choosenNum === 20 ||
        choosenNum === 23 ||
        choosenNum === 26 ||
        choosenNum === 47 ||
        choosenNum === 50 ||
        choosenNum === 53 ||
        choosenNum === 74 ||
        choosenNum === 77 ||
        choosenNum === 80
      ) {
        startIndex = 7;
      } else if (
        choosenNum === 21 ||
        choosenNum === 24 ||
        choosenNum === 27 ||
        choosenNum === 48 ||
        choosenNum === 51 ||
        choosenNum === 54 ||
        choosenNum === 75 ||
        choosenNum === 78 ||
        choosenNum === 81
      ) {
        startIndex = 8;
      }
      gameEnd();
    }

    let frontPart = arr.slice(0, startIndex);
    let backPart = arr.slice(startIndex);
    frontPart.reverse();

    for (let i = 0; i < 10; i++) {
      if (backPart[i]) {
        finalArr.push(backPart[i]);
      }
      if (frontPart[i]) {
        finalArr.push(frontPart[i]);
      }
    }

    return finalArr;
  };

  const runAnimation = () => {
    let row = [];
    let col = [];
    let squ = [];
    let counterRow = 0;
    let counterCol = 0;
    let counterSqu = 0;
    let animationDelayCol = 0;
    let animationDelaySqu = 0;

    if (choosenNum === 1) {
      row = r1;
      col = c1;
      squ = s1;
    } else if (choosenNum === 2) {
      row = r1;
      col = c2;
      squ = s1;
    } else if (choosenNum === 3) {
      row = r1;
      col = c3;
      squ = s1;
    } else if (choosenNum === 4) {
      row = r1;
      col = c4;
      squ = s2;
    } else if (choosenNum === 5) {
      row = r1;
      col = c5;
      squ = s2;
    } else if (choosenNum === 6) {
      row = r1;
      col = c6;
      squ = s2;
    } else if (choosenNum === 7) {
      row = r1;
      col = c7;
      squ = s3;
    } else if (choosenNum === 8) {
      row = r1;
      col = c8;
      squ = s3;
    } else if (choosenNum === 9) {
      row = r1;
      col = c9;
      squ = s3;
    } else if (choosenNum === 10) {
      row = r2;
      col = c1;
      squ = s1;
    } else if (choosenNum === 11) {
      row = r2;
      col = c2;
      squ = s1;
    } else if (choosenNum === 12) {
      row = r2;
      col = c3;
      squ = s1;
    } else if (choosenNum === 13) {
      row = r2;
      col = c4;
      squ = s2;
    } else if (choosenNum === 14) {
      row = r2;
      col = c5;
      squ = s2;
    } else if (choosenNum === 15) {
      row = r2;
      col = c6;
      squ = s2;
    } else if (choosenNum === 16) {
      row = r2;
      col = c7;
      squ = s3;
    } else if (choosenNum === 17) {
      row = r2;
      col = c8;
      squ = s3;
    } else if (choosenNum === 18) {
      row = r2;
      col = c9;
      squ = s3;
    } else if (choosenNum === 19) {
      row = r3;
      col = c1;
      squ = s1;
    } else if (choosenNum === 20) {
      row = r3;
      col = c2;
      squ = s1;
    } else if (choosenNum === 21) {
      row = r3;
      col = c3;
      squ = s1;
    } else if (choosenNum === 22) {
      row = r3;
      col = c4;
      squ = s2;
    } else if (choosenNum === 23) {
      row = r3;
      col = c5;
      squ = s2;
    } else if (choosenNum === 24) {
      row = r3;
      col = c6;
      squ = s2;
    } else if (choosenNum === 25) {
      row = r3;
      col = c7;
      squ = s3;
    } else if (choosenNum === 26) {
      row = r3;
      col = c8;
      squ = s3;
    } else if (choosenNum === 27) {
      row = r3;
      col = c9;
      squ = s3;
    } else if (choosenNum === 28) {
      row = r4;
      col = c1;
      squ = s4;
    } else if (choosenNum === 29) {
      row = r4;
      col = c2;
      squ = s4;
    } else if (choosenNum === 30) {
      row = r4;
      col = c3;
      squ = s4;
    } else if (choosenNum === 31) {
      row = r4;
      col = c4;
      squ = s5;
    } else if (choosenNum === 32) {
      row = r4;
      col = c5;
      squ = s5;
    } else if (choosenNum === 33) {
      row = r4;
      col = c6;
      squ = s5;
    } else if (choosenNum === 34) {
      row = r4;
      col = c7;
      squ = s6;
    } else if (choosenNum === 35) {
      row = r4;
      col = c8;
      squ = s6;
    } else if (choosenNum === 36) {
      row = r4;
      col = c9;
      squ = s6;
    } else if (choosenNum === 37) {
      row = r5;
      col = c1;
      squ = s4;
    } else if (choosenNum === 38) {
      row = r5;
      col = c2;
      squ = s4;
    } else if (choosenNum === 39) {
      row = r5;
      col = c3;
      squ = s4;
    } else if (choosenNum === 40) {
      row = r5;
      col = c4;
      squ = s5;
    } else if (choosenNum === 41) {
      row = r5;
      col = c5;
      squ = s5;
    } else if (choosenNum === 42) {
      row = r5;
      col = c6;
      squ = s5;
    } else if (choosenNum === 43) {
      row = r5;
      col = c7;
      squ = s6;
    } else if (choosenNum === 44) {
      row = r5;
      col = c8;
      squ = s6;
    } else if (choosenNum === 45) {
      row = r5;
      col = c9;
      squ = s6;
    } else if (choosenNum === 46) {
      row = r6;
      col = c1;
      squ = s4;
    } else if (choosenNum === 47) {
      row = r6;
      col = c2;
      squ = s4;
    } else if (choosenNum === 48) {
      row = r6;
      col = c3;
      squ = s4;
    } else if (choosenNum === 49) {
      row = r6;
      col = c4;
      squ = s5;
    } else if (choosenNum === 50) {
      row = r6;
      col = c5;
      squ = s5;
    } else if (choosenNum === 51) {
      row = r6;
      col = c6;
      squ = s5;
    } else if (choosenNum === 52) {
      row = r6;
      col = c7;
      squ = s6;
    } else if (choosenNum === 53) {
      row = r6;
      col = c8;
      squ = s6;
    } else if (choosenNum === 54) {
      row = r6;
      col = c9;
      squ = s6;
    } else if (choosenNum === 55) {
      row = r7;
      col = c1;
      squ = s7;
    } else if (choosenNum === 56) {
      row = r7;
      col = c2;
      squ = s7;
    } else if (choosenNum === 57) {
      row = r7;
      col = c3;
      squ = s7;
    } else if (choosenNum === 58) {
      row = r7;
      col = c4;
      squ = s8;
    } else if (choosenNum === 59) {
      row = r7;
      col = c5;
      squ = s8;
    } else if (choosenNum === 60) {
      row = r7;
      col = c6;
      squ = s8;
    } else if (choosenNum === 61) {
      row = r7;
      col = c7;
      squ = s9;
    } else if (choosenNum === 62) {
      row = r7;
      col = c8;
      squ = s9;
    } else if (choosenNum === 63) {
      row = r7;
      col = c9;
      squ = s9;
    } else if (choosenNum === 64) {
      row = r8;
      col = c1;
      squ = s7;
    } else if (choosenNum === 65) {
      row = r8;
      col = c2;
      squ = s7;
    } else if (choosenNum === 66) {
      row = r8;
      col = c3;
      squ = s7;
    } else if (choosenNum === 67) {
      row = r8;
      col = c4;
      squ = s8;
    } else if (choosenNum === 68) {
      row = r8;
      col = c5;
      squ = s8;
    } else if (choosenNum === 69) {
      row = r8;
      col = c6;
      squ = s8;
    } else if (choosenNum === 70) {
      row = r8;
      col = c7;
      squ = s9;
    } else if (choosenNum === 71) {
      row = r8;
      col = c8;
      squ = s9;
    } else if (choosenNum === 72) {
      row = r8;
      col = c9;
      squ = s9;
    } else if (choosenNum === 73) {
      row = r9;
      col = c1;
      squ = s7;
    } else if (choosenNum === 74) {
      row = r9;
      col = c2;
      squ = s7;
    } else if (choosenNum === 75) {
      row = r9;
      col = c3;
      squ = s7;
    } else if (choosenNum === 76) {
      row = r9;
      col = c4;
      squ = s8;
    } else if (choosenNum === 77) {
      row = r9;
      col = c5;
      squ = s8;
    } else if (choosenNum === 78) {
      row = r9;
      col = c6;
      squ = s8;
    } else if (choosenNum === 79) {
      row = r9;
      col = c7;
      squ = s9;
    } else if (choosenNum === 80) {
      row = r9;
      col = c8;
      squ = s9;
    } else if (choosenNum === 81) {
      row = r9;
      col = c9;
      squ = s9;
    }

    for (let i = 0; i <= 8; i++) {
      if (row[i] === true) {
        counterRow++;
      }
    }
    for (let i = 0; i <= 8; i++) {
      if (col[i] === true) {
        counterCol++;
      }
    }
    for (let i = 0; i <= 8; i++) {
      if (squ[i] === true) {
        counterSqu++;
      }
    }
    if (counterRow === 8) {
      animationDelayCol = 1750;
      animationDelaySqu = 1850;
    }
    if (counterCol === 8) {
      animationDelaySqu = 1850;
    }
    if (counterRow === 8 && counterCol === 8) {
      animationDelayCol = 1750;
      animationDelaySqu = 3800;
    }
    if (counterRow === 8 && choosenNum < 10) {
      runEndAnimation(
        [
          endOpacity1,
          endOpacity2,
          endOpacity3,
          endOpacity4,
          endOpacity5,
          endOpacity6,
          endOpacity7,
          endOpacity8,
          endOpacity9,
        ],
        "row"
      );
    }
    if (counterRow === 8 && choosenNum > 9 && choosenNum < 19) {
      runEndAnimation(
        [
          endOpacity10,
          endOpacity11,
          endOpacity12,
          endOpacity13,
          endOpacity14,
          endOpacity15,
          endOpacity16,
          endOpacity17,
          endOpacity18,
        ],
        "row"
      );
    }
    if (counterRow === 8 && choosenNum > 18 && choosenNum < 28) {
      runEndAnimation(
        [
          endOpacity19,
          endOpacity20,
          endOpacity21,
          endOpacity22,
          endOpacity23,
          endOpacity24,
          endOpacity25,
          endOpacity26,
          endOpacity27,
        ],
        "row"
      );
    }
    if (counterRow === 8 && choosenNum > 27 && choosenNum < 37) {
      runEndAnimation(
        [
          endOpacity28,
          endOpacity29,
          endOpacity30,
          endOpacity31,
          endOpacity32,
          endOpacity33,
          endOpacity34,
          endOpacity35,
          endOpacity36,
        ],
        "row"
      );
    }
    if (counterRow === 8 && choosenNum > 36 && choosenNum < 46) {
      runEndAnimation(
        [
          endOpacity37,
          endOpacity38,
          endOpacity39,
          endOpacity40,
          endOpacity41,
          endOpacity42,
          endOpacity43,
          endOpacity44,
          endOpacity45,
        ],
        "row"
      );
    }
    if (counterRow === 8 && choosenNum > 45 && choosenNum < 55) {
      runEndAnimation(
        [
          endOpacity46,
          endOpacity47,
          endOpacity48,
          endOpacity49,
          endOpacity50,
          endOpacity51,
          endOpacity52,
          endOpacity53,
          endOpacity54,
        ],
        "row"
      );
    }
    if (counterRow === 8 && choosenNum > 54 && choosenNum < 64) {
      runEndAnimation(
        [
          endOpacity55,
          endOpacity56,
          endOpacity57,
          endOpacity58,
          endOpacity59,
          endOpacity60,
          endOpacity61,
          endOpacity62,
          endOpacity63,
        ],
        "row"
      );
    }
    if (counterRow === 8 && choosenNum > 63 && choosenNum < 73) {
      runEndAnimation(
        [
          endOpacity64,
          endOpacity65,
          endOpacity66,
          endOpacity67,
          endOpacity68,
          endOpacity69,
          endOpacity70,
          endOpacity71,
          endOpacity72,
        ],
        "row"
      );
    }
    if (counterRow === 8 && choosenNum > 72 && choosenNum < 82) {
      runEndAnimation(
        [
          endOpacity73,
          endOpacity74,
          endOpacity75,
          endOpacity76,
          endOpacity77,
          endOpacity78,
          endOpacity79,
          endOpacity80,
          endOpacity81,
        ],
        "row"
      );
    }
    if (
      counterCol === 8 &&
      (choosenNum === 1 ||
        choosenNum === 10 ||
        choosenNum === 19 ||
        choosenNum === 28 ||
        choosenNum === 37 ||
        choosenNum === 46 ||
        choosenNum === 55 ||
        choosenNum === 64 ||
        choosenNum === 73)
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity1,
            endOpacity10,
            endOpacity19,
            endOpacity28,
            endOpacity37,
            endOpacity46,
            endOpacity55,
            endOpacity64,
            endOpacity73,
          ],
          "col"
        );
      }, animationDelayCol);
    }
    if (
      counterCol === 8 &&
      (choosenNum === 2 ||
        choosenNum === 11 ||
        choosenNum === 20 ||
        choosenNum === 29 ||
        choosenNum === 38 ||
        choosenNum === 47 ||
        choosenNum === 56 ||
        choosenNum === 65 ||
        choosenNum === 74)
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity2,
            endOpacity11,
            endOpacity20,
            endOpacity29,
            endOpacity38,
            endOpacity47,
            endOpacity56,
            endOpacity65,
            endOpacity74,
          ],
          "col"
        );
      }, animationDelayCol);
    }
    if (
      counterCol === 8 &&
      (choosenNum === 3 ||
        choosenNum === 12 ||
        choosenNum === 21 ||
        choosenNum === 30 ||
        choosenNum === 39 ||
        choosenNum === 48 ||
        choosenNum === 57 ||
        choosenNum === 66 ||
        choosenNum === 75)
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity3,
            endOpacity12,
            endOpacity21,
            endOpacity30,
            endOpacity39,
            endOpacity48,
            endOpacity57,
            endOpacity66,
            endOpacity75,
          ],
          "col"
        );
      }, animationDelayCol);
    }
    if (
      counterCol === 8 &&
      (choosenNum === 4 ||
        choosenNum === 13 ||
        choosenNum === 22 ||
        choosenNum === 31 ||
        choosenNum === 40 ||
        choosenNum === 49 ||
        choosenNum === 58 ||
        choosenNum === 67 ||
        choosenNum === 76)
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity4,
            endOpacity13,
            endOpacity22,
            endOpacity31,
            endOpacity40,
            endOpacity49,
            endOpacity58,
            endOpacity67,
            endOpacity76,
          ],
          "col"
        );
      }, animationDelayCol);
    }
    if (
      counterCol === 8 &&
      (choosenNum === 5 ||
        choosenNum === 14 ||
        choosenNum === 23 ||
        choosenNum === 32 ||
        choosenNum === 41 ||
        choosenNum === 50 ||
        choosenNum === 59 ||
        choosenNum === 68 ||
        choosenNum === 77)
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity5,
            endOpacity14,
            endOpacity23,
            endOpacity32,
            endOpacity41,
            endOpacity50,
            endOpacity59,
            endOpacity68,
            endOpacity77,
          ],
          "col"
        );
      }, animationDelayCol);
    }
    if (
      counterCol === 8 &&
      (choosenNum === 6 ||
        choosenNum === 15 ||
        choosenNum === 24 ||
        choosenNum === 33 ||
        choosenNum === 42 ||
        choosenNum === 51 ||
        choosenNum === 60 ||
        choosenNum === 69 ||
        choosenNum === 78)
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity6,
            endOpacity15,
            endOpacity24,
            endOpacity33,
            endOpacity42,
            endOpacity51,
            endOpacity60,
            endOpacity69,
            endOpacity78,
          ],
          "col"
        );
      }, animationDelayCol);
    }
    if (
      counterCol === 8 &&
      (choosenNum === 7 ||
        choosenNum === 16 ||
        choosenNum === 25 ||
        choosenNum === 34 ||
        choosenNum === 43 ||
        choosenNum === 52 ||
        choosenNum === 61 ||
        choosenNum === 70 ||
        choosenNum === 79)
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity7,
            endOpacity16,
            endOpacity25,
            endOpacity34,
            endOpacity43,
            endOpacity52,
            endOpacity61,
            endOpacity70,
            endOpacity79,
          ],
          "col"
        );
      }, animationDelayCol);
    }
    if (
      counterCol === 8 &&
      (choosenNum === 8 ||
        choosenNum === 17 ||
        choosenNum === 26 ||
        choosenNum === 35 ||
        choosenNum === 44 ||
        choosenNum === 53 ||
        choosenNum === 62 ||
        choosenNum === 71 ||
        choosenNum === 80)
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity8,
            endOpacity17,
            endOpacity26,
            endOpacity35,
            endOpacity44,
            endOpacity53,
            endOpacity62,
            endOpacity71,
            endOpacity80,
          ],
          "col"
        );
      }, animationDelayCol);
    }
    if (
      counterCol === 8 &&
      (choosenNum === 9 ||
        choosenNum === 18 ||
        choosenNum === 27 ||
        choosenNum === 36 ||
        choosenNum === 45 ||
        choosenNum === 54 ||
        choosenNum === 63 ||
        choosenNum === 72 ||
        choosenNum === 81)
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity9,
            endOpacity18,
            endOpacity27,
            endOpacity36,
            endOpacity45,
            endOpacity54,
            endOpacity63,
            endOpacity72,
            endOpacity81,
          ],
          "col"
        );
      }, animationDelayCol);
    }
    if (
      counterSqu === 8 &&
      (choosenNum < 4 ||
        (choosenNum > 9 && choosenNum < 13) ||
        (choosenNum > 18 && choosenNum < 22))
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity1,
            endOpacity2,
            endOpacity3,
            endOpacity10,
            endOpacity11,
            endOpacity12,
            endOpacity19,
            endOpacity20,
            endOpacity21,
          ],
          "squ"
        );
      }, animationDelaySqu);
    }
    if (
      counterSqu === 8 &&
      ((choosenNum > 3 && choosenNum < 7) ||
        (choosenNum > 12 && choosenNum < 16) ||
        (choosenNum > 21 && choosenNum < 25))
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity4,
            endOpacity5,
            endOpacity6,
            endOpacity13,
            endOpacity14,
            endOpacity15,
            endOpacity22,
            endOpacity23,
            endOpacity24,
          ],
          "squ"
        );
      }, animationDelaySqu);
    }
    if (
      counterSqu === 8 &&
      ((choosenNum > 6 && choosenNum < 10) ||
        (choosenNum > 15 && choosenNum < 19) ||
        (choosenNum > 24 && choosenNum < 28))
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity7,
            endOpacity8,
            endOpacity9,
            endOpacity16,
            endOpacity17,
            endOpacity18,
            endOpacity25,
            endOpacity26,
            endOpacity27,
          ],
          "squ"
        );
      }, animationDelaySqu);
    }
    if (
      counterSqu === 8 &&
      ((choosenNum > 27 && choosenNum < 31) ||
        (choosenNum > 36 && choosenNum < 40) ||
        (choosenNum > 45 && choosenNum < 49))
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity28,
            endOpacity29,
            endOpacity30,
            endOpacity37,
            endOpacity38,
            endOpacity39,
            endOpacity46,
            endOpacity47,
            endOpacity48,
          ],
          "squ"
        );
      }, animationDelaySqu);
    }
    if (
      counterSqu === 8 &&
      ((choosenNum > 30 && choosenNum < 34) ||
        (choosenNum > 39 && choosenNum < 43) ||
        (choosenNum > 48 && choosenNum < 52))
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity31,
            endOpacity32,
            endOpacity33,
            endOpacity40,
            endOpacity41,
            endOpacity42,
            endOpacity49,
            endOpacity50,
            endOpacity51,
          ],
          "squ"
        );
      }, animationDelaySqu);
    }
    if (
      counterSqu === 8 &&
      ((choosenNum > 33 && choosenNum < 37) ||
        (choosenNum > 42 && choosenNum < 46) ||
        (choosenNum > 51 && choosenNum < 55))
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity34,
            endOpacity35,
            endOpacity36,
            endOpacity43,
            endOpacity44,
            endOpacity45,
            endOpacity52,
            endOpacity53,
            endOpacity54,
          ],
          "squ"
        );
      }, animationDelaySqu);
    }
    if (
      counterSqu === 8 &&
      ((choosenNum > 54 && choosenNum < 58) ||
        (choosenNum > 63 && choosenNum < 67) ||
        (choosenNum > 72 && choosenNum < 76))
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity55,
            endOpacity56,
            endOpacity57,
            endOpacity64,
            endOpacity65,
            endOpacity66,
            endOpacity73,
            endOpacity74,
            endOpacity75,
          ],
          "squ"
        );
      }, animationDelaySqu);
    }
    if (
      counterSqu === 8 &&
      ((choosenNum > 57 && choosenNum < 61) ||
        (choosenNum > 66 && choosenNum < 70) ||
        (choosenNum > 75 && choosenNum < 79))
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity58,
            endOpacity59,
            endOpacity60,
            endOpacity67,
            endOpacity68,
            endOpacity69,
            endOpacity76,
            endOpacity77,
            endOpacity78,
          ],
          "squ"
        );
      }, animationDelaySqu);
    }
    if (
      counterSqu === 8 &&
      ((choosenNum > 60 && choosenNum < 64) ||
        (choosenNum > 69 && choosenNum < 73) ||
        choosenNum > 78)
    ) {
      setTimeout(() => {
        runEndAnimation(
          [
            endOpacity61,
            endOpacity62,
            endOpacity63,
            endOpacity70,
            endOpacity71,
            endOpacity72,
            endOpacity79,
            endOpacity80,
            endOpacity81,
          ],
          "squ"
        );
      }, animationDelaySqu);
    }
  };

  const runFinishAnimation = () => {
    Animated.stagger(1200, [
      Animated.parallel([
        Animated.timing(endOpacity41, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 200,
        }),
        Animated.timing(endOpacity31, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 200,
          delay: 100,
        }),
        Animated.timing(endOpacity33, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 200,
          delay: 100,
        }),
        Animated.timing(endOpacity49, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 200,
          delay: 100,
        }),
        Animated.timing(endOpacity51, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 200,
          delay: 100,
        }),
        Animated.timing(endOpacity32, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 300,
          delay: 100,
        }),
        Animated.timing(endOpacity40, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 300,
          delay: 100,
        }),
        Animated.timing(endOpacity42, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 300,
          delay: 100,
        }),
        Animated.timing(endOpacity50, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 300,
          delay: 100,
        }),
        Animated.timing(endOpacity21, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 400,
          delay: 100,
        }),
        Animated.timing(endOpacity23, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 400,
          delay: 100,
        }),
        Animated.timing(endOpacity25, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 400,
          delay: 100,
        }),
        Animated.timing(endOpacity39, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 400,
          delay: 100,
        }),
        Animated.timing(endOpacity43, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 400,
          delay: 100,
        }),
        Animated.timing(endOpacity57, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 400,
          delay: 100,
        }),
        Animated.timing(endOpacity59, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 400,
          delay: 100,
        }),
        Animated.timing(endOpacity61, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 400,
          delay: 100,
        }),
        Animated.timing(endOpacity22, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 500,
          delay: 100,
        }),
        Animated.timing(endOpacity24, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 500,
          delay: 100,
        }),
        Animated.timing(endOpacity30, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 500,
          delay: 100,
        }),
        Animated.timing(endOpacity34, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 500,
          delay: 100,
        }),
        Animated.timing(endOpacity48, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 500,
          delay: 100,
        }),
        Animated.timing(endOpacity52, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 500,
          delay: 100,
        }),
        Animated.timing(endOpacity58, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 500,
          delay: 100,
        }),
        Animated.timing(endOpacity60, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 500,
          delay: 100,
        }),
        Animated.timing(endOpacity11, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 600,
          delay: 100,
        }),
        Animated.timing(endOpacity13, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 600,
          delay: 100,
        }),
        Animated.timing(endOpacity15, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 600,
          delay: 100,
        }),
        Animated.timing(endOpacity17, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 600,
          delay: 100,
        }),
        Animated.timing(endOpacity29, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 600,
          delay: 100,
        }),
        Animated.timing(endOpacity35, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 600,
          delay: 100,
        }),
        Animated.timing(endOpacity47, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 600,
          delay: 100,
        }),
        Animated.timing(endOpacity53, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 600,
          delay: 100,
        }),
        Animated.timing(endOpacity65, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 600,
          delay: 100,
        }),
        Animated.timing(endOpacity67, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 600,
          delay: 100,
        }),
        Animated.timing(endOpacity69, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 600,
          delay: 100,
        }),
        Animated.timing(endOpacity71, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 600,
          delay: 100,
        }),
        Animated.timing(endOpacity12, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 700,
          delay: 100,
        }),
        Animated.timing(endOpacity14, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 700,
          delay: 100,
        }),
        Animated.timing(endOpacity16, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 700,
          delay: 100,
        }),
        Animated.timing(endOpacity20, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 700,
          delay: 100,
        }),
        Animated.timing(endOpacity26, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 700,
          delay: 100,
        }),
        Animated.timing(endOpacity38, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 700,
          delay: 100,
        }),
        Animated.timing(endOpacity44, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 700,
          delay: 100,
        }),
        Animated.timing(endOpacity56, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 700,
          delay: 100,
        }),
        Animated.timing(endOpacity62, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 700,
          delay: 100,
        }),
        Animated.timing(endOpacity66, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 700,
          delay: 100,
        }),
        Animated.timing(endOpacity68, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 700,
          delay: 100,
        }),
        Animated.timing(endOpacity70, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 700,
          delay: 100,
        }),
        Animated.timing(endOpacity1, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity3, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity5, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity7, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity9, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity19, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity27, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity37, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity45, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity55, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity63, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity73, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity75, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity77, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity79, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity81, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
          delay: 100,
        }),
        Animated.timing(endOpacity2, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity4, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity6, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity8, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity10, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity18, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity28, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity36, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity46, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity54, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity64, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity72, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity74, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity76, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity78, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
        Animated.timing(endOpacity80, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
          delay: 100,
        }),
      ]),
      Animated.parallel([
        Animated.timing(endOpacity41, {
          toValue: 1,
          useNativeDriver: true,
          duration: 200,
        }),
        Animated.timing(endOpacity31, {
          toValue: 1,
          useNativeDriver: true,
          duration: 200,
        }),
        Animated.timing(endOpacity33, {
          toValue: 1,
          useNativeDriver: true,
          duration: 200,
        }),
        Animated.timing(endOpacity49, {
          toValue: 1,
          useNativeDriver: true,
          duration: 200,
        }),
        Animated.timing(endOpacity51, {
          toValue: 1,
          useNativeDriver: true,
          duration: 200,
        }),
        Animated.timing(endOpacity32, {
          toValue: 1,
          useNativeDriver: true,
          duration: 300,
        }),
        Animated.timing(endOpacity40, {
          toValue: 1,
          useNativeDriver: true,
          duration: 300,
        }),
        Animated.timing(endOpacity42, {
          toValue: 1,
          useNativeDriver: true,
          duration: 300,
        }),
        Animated.timing(endOpacity50, {
          toValue: 1,
          useNativeDriver: true,
          duration: 300,
        }),
        Animated.timing(endOpacity21, {
          toValue: 1,
          useNativeDriver: true,
          duration: 400,
        }),
        Animated.timing(endOpacity23, {
          toValue: 1,
          useNativeDriver: true,
          duration: 400,
        }),
        Animated.timing(endOpacity25, {
          toValue: 1,
          useNativeDriver: true,
          duration: 400,
        }),
        Animated.timing(endOpacity39, {
          toValue: 1,
          useNativeDriver: true,
          duration: 400,
        }),
        Animated.timing(endOpacity43, {
          toValue: 1,
          useNativeDriver: true,
          duration: 400,
        }),
        Animated.timing(endOpacity57, {
          toValue: 1,
          useNativeDriver: true,
          duration: 400,
        }),
        Animated.timing(endOpacity59, {
          toValue: 1,
          useNativeDriver: true,
          duration: 400,
        }),
        Animated.timing(endOpacity61, {
          toValue: 1,
          useNativeDriver: true,
          duration: 400,
        }),
        Animated.timing(endOpacity22, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(endOpacity24, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(endOpacity30, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(endOpacity34, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(endOpacity48, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(endOpacity52, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(endOpacity58, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(endOpacity60, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(endOpacity11, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),
        Animated.timing(endOpacity13, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),
        Animated.timing(endOpacity15, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),

        Animated.timing(endOpacity17, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),
        Animated.timing(endOpacity29, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),
        Animated.timing(endOpacity35, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),
        Animated.timing(endOpacity47, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),
        Animated.timing(endOpacity53, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),
        Animated.timing(endOpacity65, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),
        Animated.timing(endOpacity67, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),
        Animated.timing(endOpacity69, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),
        Animated.timing(endOpacity71, {
          toValue: 1,
          useNativeDriver: true,
          duration: 600,
        }),
        Animated.timing(endOpacity12, {
          toValue: 1,
          useNativeDriver: true,
          duration: 700,
        }),
        Animated.timing(endOpacity14, {
          toValue: 1,
          useNativeDriver: true,
          duration: 700,
        }),
        Animated.timing(endOpacity16, {
          toValue: 1,
          useNativeDriver: true,
          duration: 700,
        }),
        Animated.timing(endOpacity20, {
          toValue: 1,
          useNativeDriver: true,
          duration: 700,
        }),
        Animated.timing(endOpacity26, {
          toValue: 1,
          useNativeDriver: true,
          duration: 700,
        }),
        Animated.timing(endOpacity38, {
          toValue: 1,
          useNativeDriver: true,
          duration: 700,
        }),
        Animated.timing(endOpacity44, {
          toValue: 1,
          useNativeDriver: true,
          duration: 700,
        }),
        Animated.timing(endOpacity56, {
          toValue: 1,
          useNativeDriver: true,
          duration: 700,
        }),
        Animated.timing(endOpacity62, {
          toValue: 1,
          useNativeDriver: true,
          duration: 700,
        }),
        Animated.timing(endOpacity66, {
          toValue: 1,
          useNativeDriver: true,
          duration: 700,
        }),
        Animated.timing(endOpacity68, {
          toValue: 1,
          useNativeDriver: true,
          duration: 700,
        }),
        Animated.timing(endOpacity70, {
          toValue: 1,
          useNativeDriver: true,
          duration: 700,
        }),
        Animated.timing(endOpacity1, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity3, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity5, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity7, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity9, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity19, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity27, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity37, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity45, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity55, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity63, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity73, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity75, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity77, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity79, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity81, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(endOpacity2, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity4, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity6, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity8, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity10, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity18, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity28, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity36, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity46, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity54, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity64, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity72, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity74, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity76, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity78, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
        Animated.timing(endOpacity80, {
          toValue: 1,
          useNativeDriver: true,
          duration: 900,
        }),
      ]),
    ]).start();
  };

  const gameEnd = () => {
    let finalCounter = 0;
    for (let i = 0; i <= 81; i++) {
      if (arrOfFixed1[i]) {
        finalCounter++;
      }
    }
    if (finalCounter === 80) {
      setTimeout(() => {
        runFinishAnimation();
      }, 2000);
      setTimeout(() => {
        switchPause();
        setGameWon(true);
      }, 5000);
      //send time to firebase
      // db.collection("usersData")
      //   .doc(auth.currentUser.uid)
      //   .update({
      //     numberOfFinishedGames: numberOfFinishedGames + 1,
      //   })
      //   .then(() => {
      //     console.log("number of fished games is updated");
      //   })
      //   .catch((err) => console.log(err));
    }
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/cameraClick.wav")
    );
    setSound(sound);
    await sound.playAsync();
  };

  const playSoundPebbel = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sounds/pebbelsClick.wav")
    );
    setSound(sound);
    await sound.playAsync();
    console.log("play sound");
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(urlLink);
      const res = await result.json();

      setValue1(res.row1[0]);
      setValue2(res.row1[1]);
      setValue3(res.row1[2]);
      setValue4(res.row1[3]);
      setValue5(res.row1[4]);
      setValue6(res.row1[5]);
      setValue7(res.row1[6]);
      setValue8(res.row1[7]);
      setValue9(res.row1[8]);
      setValue10(res.row2[0]);
      setValue11(res.row2[1]);
      setValue12(res.row2[2]);
      setValue13(res.row2[3]);
      setValue14(res.row2[4]);
      setValue15(res.row2[5]);
      setValue16(res.row2[6]);
      setValue17(res.row2[7]);
      setValue18(res.row2[8]);
      setValue19(res.row3[0]);
      setValue20(res.row3[1]);
      setValue21(res.row3[2]);
      setValue22(res.row3[3]);
      setValue23(res.row3[4]);
      setValue24(res.row3[5]);
      setValue25(res.row3[6]);
      setValue26(res.row3[7]);
      setValue27(res.row3[8]);
      setValue28(res.row4[0]);
      setValue29(res.row4[1]);
      setValue30(res.row4[2]);
      setValue31(res.row4[3]);
      setValue32(res.row4[4]);
      setValue33(res.row4[5]);
      setValue34(res.row4[6]);
      setValue35(res.row4[7]);
      setValue36(res.row4[8]);
      setValue37(res.row5[0]);
      setValue38(res.row5[1]);
      setValue39(res.row5[2]);
      setValue40(res.row5[3]);
      setValue41(res.row5[4]);
      setValue42(res.row5[5]);
      setValue43(res.row5[6]);
      setValue44(res.row5[7]);
      setValue45(res.row5[8]);
      setValue46(res.row6[0]);
      setValue47(res.row6[1]);
      setValue48(res.row6[2]);
      setValue49(res.row6[3]);
      setValue50(res.row6[4]);
      setValue51(res.row6[5]);
      setValue52(res.row6[6]);
      setValue53(res.row6[7]);
      setValue54(res.row6[8]);
      setValue55(res.row7[0]);
      setValue56(res.row7[1]);
      setValue57(res.row7[2]);
      setValue58(res.row7[3]);
      setValue59(res.row7[4]);
      setValue60(res.row7[5]);
      setValue61(res.row7[6]);
      setValue62(res.row7[7]);
      setValue63(res.row7[8]);
      setValue64(res.row8[0]);
      setValue65(res.row8[1]);
      setValue66(res.row8[2]);
      setValue67(res.row8[3]);
      setValue68(res.row8[4]);
      setValue69(res.row8[5]);
      setValue70(res.row8[6]);
      setValue71(res.row8[7]);
      setValue72(res.row8[8]);
      setValue73(res.row9[0]);
      setValue74(res.row9[1]);
      setValue75(res.row9[2]);
      setValue76(res.row9[3]);
      setValue77(res.row9[4]);
      setValue78(res.row9[5]);
      setValue79(res.row9[6]);
      setValue80(res.row9[7]);
      setValue81(res.row9[8]);
      setShowContent(true);
    };

    fetchData();

    return () => {
      fetchData;
    };
  }, []);

  // useEffect(() => {
  //   const updateGameNumber = () => {
  //     db.collection("usersData")
  //       .doc(auth.currentUser.uid)
  //       .update({
  //         numberOfGames: numberOfGames + 1,
  //       })
  //       .then(() => {
  //         console.log("game number updated 15 sec after start");
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   setTimeout(() => {
  //     updateGameNumber();
  //   }, 15000);
  //   return updateGameNumber;
  // }, []);

  useEffect(() => {
    const run = () => {
      updateClock();
      setInterv(setInterval(updateClock, 1000));
    };
    if (showContent) {
      run();
    }
    return run;
  }, [showContent]);

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
    const setOpacity = () => {
      Animated.sequence([
        Animated.timing(infoOpacity, {
          toValue: 1,
          useNativeDriver: true,
          delay: 2000,
          duration: 1000,
        }),
        Animated.timing(infoOpacity, {
          toValue: 0,
          useNativeDriver: true,
          delay: 5000,
          duration: 1000,
        }),
      ]).start();
    };
    setOpacity();
    return () => {
      setOpacity;
    };
  }, []);

  useEffect(() => {
    const setAnim = () => {
      if (mistakes !== 0) {
        Animated.stagger(2000, [
          Animated.timing(moveMessage, {
            toValue: 0,
            useNativeDriver: true,
            duration: 1000,
          }),
          Animated.timing(moveMessage, {
            toValue: -screenWidth,
            useNativeDriver: true,
          }),
        ]).start();
        return setAnim;
      }
    };
    setAnim();
    return setAnim;
  }, [mistakes]);

  return showContent ? (
    <View style={darkMode ? styles.containerDarkMode : styles.container}>
      <Animated.View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 80,
          width: screenWidth * 0.8,
          borderWidth: 3,
          borderTopColor: "black",
          position: "absolute",
          top: 200,
          backgroundColor: "white",
          opacity: 0.97,
          borderRadius: 40,
          transform: [{ translateX: moveMessage }],
          zIndex: 1,
        }}
      >
        <Text>{message}</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.blurContainer,
          { opacity: blurIntensity, zIndex: blurLayer },
        ]}
      >
        <BlurView tint="light" intensity={85} style={styles.blurContainer2}>
          {gameWon ? (
            <View style={styles.containerEnd}>
              <Text style={styles.textEnd}>
                Congratulations!!! You won the {route.params.gameType} game!
              </Text>
              <Text style={styles.textEnd}>Your time is:</Text>
              <Timer time={time} gameWon={gameWon} />
            </View>
          ) : (
            <View></View>
          )}
          <TouchableOpacity onPress={() => navigation.replace("Home")}>
            <View style={styles.playButton}>
              <ImageBackground
                source={require("../../../assets/buttonBackground.png")}
                style={styles.buttonImg}
                imageStyle={{ borderRadius: 10 }}
                resizeMode="cover"
              >
                <Text
                  style={{
                    fontFamily: "CaveatBold",
                    fontSize: 40,
                    color: "#003645",
                  }}
                >
                  <Text> </Text> Menu <Text> </Text>
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.replace("Choose")}>
            <View style={styles.playButton}>
              <ImageBackground
                source={require("../../../assets/buttonBackground.png")}
                style={styles.buttonImg}
                imageStyle={{ borderRadius: 10 }}
                resizeMode="cover"
              >
                <Text
                  style={{
                    fontFamily: "CaveatBold",
                    fontSize: 40,
                    color: "#003645",
                  }}
                >
                  <Text> </Text> New Game <Text> </Text>
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </BlurView>
      </Animated.View>
      <View style={styles.topContainer}>
        <View style={styles.buttonHolderTop}>
          <View
            style={
              darkMode
                ? styles.buttonContainerTimeDarkMode
                : styles.buttonContainerTop
            }
          >
            <View style={styles.button}>
              <Text
                style={darkMode ? styles.infoTextDownDark : styles.infoTextDown}
              >
                Mistake {mistakes}/3
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonHolderTop}>
          <View
            style={
              darkMode
                ? styles.buttonContainerTimeDarkMode
                : styles.buttonContainerTop
            }
          >
            <View style={styles.button}>
              <Text
                style={darkMode ? styles.infoTextDownDark : styles.infoTextDown}
              >
                Game: {route.params.gameType}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.bigSquare}>
          <View style={styles.bigRow}>
            <View style={styles.MediumSquare}>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(1)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity1 }]}
                  >
                    {fixed1 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed1}
                        fixed={fixed1}
                        value={value1}
                        position={1}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={1}
                        notes={notes}
                        pressed={pressed1}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(2)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity2 }]}
                  >
                    {fixed2 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed2}
                        fixed={fixed2}
                        value={value2}
                        position={2}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={2}
                        notes={notes}
                        pressed={pressed2}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(3)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity3 }]}
                  >
                    {fixed3 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed3}
                        fixed={fixed3}
                        value={value3}
                        position={3}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={3}
                        notes={notes}
                        pressed={pressed3}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(10)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity10 }]}
                  >
                    {fixed10 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed10}
                        fixed={fixed10}
                        value={value10}
                        position={10}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={10}
                        notes={notes}
                        pressed={pressed10}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(11)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity11 }]}
                  >
                    {fixed11 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed11}
                        fixed={fixed11}
                        value={value11}
                        position={11}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={11}
                        notes={notes}
                        pressed={pressed11}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(12)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity12 }]}
                  >
                    {fixed12 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed12}
                        fixed={fixed12}
                        value={value12}
                        position={12}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={12}
                        notes={notes}
                        pressed={pressed12}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(19)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity19 }]}
                  >
                    {fixed19 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed19}
                        fixed={fixed19}
                        value={value19}
                        position={19}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={19}
                        notes={notes}
                        pressed={pressed19}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(20)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity20 }]}
                  >
                    {fixed20 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed20}
                        fixed={fixed20}
                        value={value20}
                        position={20}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={20}
                        notes={notes}
                        pressed={pressed20}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(21)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity21 }]}
                  >
                    {fixed21 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed21}
                        fixed={fixed21}
                        value={value21}
                        position={21}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={21}
                        notes={notes}
                        pressed={pressed21}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.MediumSquare}>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(4)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity4 }]}
                  >
                    {fixed4 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed4}
                        fixed={fixed4}
                        value={value4}
                        position={4}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={4}
                        notes={notes}
                        pressed={pressed4}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(5)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity5 }]}
                  >
                    {fixed5 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed5}
                        fixed={fixed5}
                        value={value5}
                        position={5}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={5}
                        notes={notes}
                        pressed={pressed5}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(6)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity6 }]}
                  >
                    {fixed6 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed6}
                        fixed={fixed6}
                        value={value6}
                        position={6}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={6}
                        notes={notes}
                        pressed={pressed6}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(13)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity13 }]}
                  >
                    {fixed13 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed13}
                        fixed={fixed13}
                        value={value13}
                        position={13}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={13}
                        notes={notes}
                        pressed={pressed13}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(14)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity14 }]}
                  >
                    {fixed14 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed14}
                        fixed={fixed14}
                        value={value14}
                        position={14}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={14}
                        notes={notes}
                        pressed={pressed14}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(15)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity15 }]}
                  >
                    {fixed15 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed15}
                        fixed={fixed15}
                        value={value15}
                        position={15}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={15}
                        notes={notes}
                        pressed={pressed15}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(22)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity22 }]}
                  >
                    {fixed22 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed22}
                        fixed={fixed22}
                        value={value22}
                        position={22}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={22}
                        notes={notes}
                        pressed={pressed22}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(23)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity23 }]}
                  >
                    {fixed23 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed23}
                        fixed={fixed23}
                        value={value23}
                        position={23}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={23}
                        notes={notes}
                        pressed={pressed23}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(24)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity24 }]}
                  >
                    {fixed24 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed24}
                        fixed={fixed24}
                        value={value24}
                        position={24}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={24}
                        notes={notes}
                        pressed={pressed24}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.MediumSquare}>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(7)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity7 }]}
                  >
                    {fixed7 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed7}
                        fixed={fixed7}
                        value={value7}
                        position={7}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={7}
                        notes={notes}
                        pressed={pressed7}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(8)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity8 }]}
                  >
                    {fixed8 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed8}
                        fixed={fixed8}
                        value={value8}
                        position={8}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={8}
                        notes={notes}
                        pressed={pressed8}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(9)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity9 }]}
                  >
                    {fixed9 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed9}
                        fixed={fixed9}
                        value={value9}
                        position={9}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={9}
                        notes={notes}
                        pressed={pressed9}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(16)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity16 }]}
                  >
                    {fixed16 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed16}
                        fixed={fixed16}
                        value={value16}
                        position={16}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={16}
                        notes={notes}
                        pressed={pressed16}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(17)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity17 }]}
                  >
                    {fixed17 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed17}
                        fixed={fixed17}
                        value={value17}
                        position={17}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={17}
                        notes={notes}
                        pressed={pressed17}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(18)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity18 }]}
                  >
                    {fixed18 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed18}
                        fixed={fixed18}
                        value={value18}
                        position={18}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={18}
                        notes={notes}
                        pressed={pressed18}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(25)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity25 }]}
                  >
                    {fixed25 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed25}
                        fixed={fixed25}
                        value={value25}
                        position={25}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={25}
                        notes={notes}
                        pressed={pressed25}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(26)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity26 }]}
                  >
                    {fixed26 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed26}
                        fixed={fixed26}
                        value={value26}
                        position={26}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={26}
                        notes={notes}
                        pressed={pressed26}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(27)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity27 }]}
                  >
                    {fixed27 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed27}
                        fixed={fixed27}
                        value={value27}
                        position={27}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={27}
                        notes={notes}
                        pressed={pressed27}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bigRow}>
            <View style={styles.MediumSquare}>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(28)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity28 }]}
                  >
                    {fixed28 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed28}
                        fixed={fixed28}
                        value={value28}
                        position={28}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={28}
                        notes={notes}
                        pressed={pressed28}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(29)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity29 }]}
                  >
                    {fixed29 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed29}
                        fixed={fixed29}
                        value={value29}
                        position={29}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={29}
                        notes={notes}
                        pressed={pressed29}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(30)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity30 }]}
                  >
                    {fixed30 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed30}
                        fixed={fixed30}
                        value={value30}
                        position={30}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={30}
                        notes={notes}
                        pressed={pressed30}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(37)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity37 }]}
                  >
                    {fixed37 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed37}
                        fixed={fixed37}
                        value={value37}
                        position={37}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={37}
                        notes={notes}
                        pressed={pressed37}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(38)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity38 }]}
                  >
                    {fixed38 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed38}
                        fixed={fixed38}
                        value={value38}
                        position={38}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={38}
                        notes={notes}
                        pressed={pressed38}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(39)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity39 }]}
                  >
                    {fixed39 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed39}
                        fixed={fixed39}
                        value={value39}
                        position={39}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={39}
                        notes={notes}
                        pressed={pressed39}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(46)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity46 }]}
                  >
                    {fixed46 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed46}
                        fixed={fixed46}
                        value={value46}
                        position={46}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={46}
                        notes={notes}
                        pressed={pressed46}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(47)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity47 }]}
                  >
                    {fixed47 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed47}
                        fixed={fixed47}
                        value={value47}
                        position={47}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={47}
                        notes={notes}
                        pressed={pressed47}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(48)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity48 }]}
                  >
                    {fixed48 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed48}
                        fixed={fixed48}
                        value={value48}
                        position={48}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={48}
                        notes={notes}
                        pressed={pressed48}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.MediumSquare}>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(31)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity31 }]}
                  >
                    {fixed31 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed31}
                        fixed={fixed31}
                        value={value31}
                        position={31}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={31}
                        notes={notes}
                        pressed={pressed31}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(32)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity32 }]}
                  >
                    {fixed32 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed32}
                        fixed={fixed32}
                        value={value32}
                        position={32}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={32}
                        notes={notes}
                        pressed={pressed32}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(33)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity33 }]}
                  >
                    {fixed33 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed33}
                        fixed={fixed33}
                        value={value33}
                        position={33}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={33}
                        notes={notes}
                        pressed={pressed33}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(40)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity40 }]}
                  >
                    {fixed40 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed40}
                        fixed={fixed40}
                        value={value40}
                        position={40}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={40}
                        notes={notes}
                        pressed={pressed40}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(41)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity41 }]}
                  >
                    {fixed41 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed41}
                        fixed={fixed41}
                        value={value41}
                        position={41}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={41}
                        notes={notes}
                        pressed={pressed41}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(42)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity42 }]}
                  >
                    {fixed42 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed42}
                        fixed={fixed42}
                        value={value42}
                        position={42}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={42}
                        notes={notes}
                        pressed={pressed42}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(49)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity49 }]}
                  >
                    {fixed49 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed49}
                        fixed={fixed49}
                        value={value49}
                        position={49}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={49}
                        notes={notes}
                        pressed={pressed49}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(50)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity50 }]}
                  >
                    {fixed50 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed50}
                        fixed={fixed50}
                        value={value50}
                        position={50}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={50}
                        notes={notes}
                        pressed={pressed50}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(51)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity51 }]}
                  >
                    {fixed51 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed51}
                        fixed={fixed51}
                        value={value51}
                        position={51}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={51}
                        notes={notes}
                        pressed={pressed51}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.MediumSquare}>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(34)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity34 }]}
                  >
                    {fixed34 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed34}
                        fixed={fixed34}
                        value={value34}
                        position={34}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={34}
                        notes={notes}
                        pressed={pressed34}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(35)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity35 }]}
                  >
                    {fixed35 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed35}
                        fixed={fixed35}
                        value={value35}
                        position={35}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={35}
                        notes={notes}
                        pressed={pressed35}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(36)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity36 }]}
                  >
                    {fixed36 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed36}
                        fixed={fixed36}
                        value={value36}
                        position={36}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={36}
                        notes={notes}
                        pressed={pressed36}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(43)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity43 }]}
                  >
                    {fixed43 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed43}
                        fixed={fixed43}
                        value={value43}
                        position={43}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={43}
                        notes={notes}
                        pressed={pressed43}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(44)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity44 }]}
                  >
                    {fixed44 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed44}
                        fixed={fixed44}
                        value={value44}
                        position={44}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={44}
                        notes={notes}
                        pressed={pressed44}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(45)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity45 }]}
                  >
                    {fixed45 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed45}
                        fixed={fixed45}
                        value={value45}
                        position={45}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={45}
                        notes={notes}
                        pressed={pressed45}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(52)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity52 }]}
                  >
                    {fixed52 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed52}
                        fixed={fixed52}
                        value={value52}
                        position={52}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={52}
                        notes={notes}
                        pressed={pressed52}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(53)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity53 }]}
                  >
                    {fixed53 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed53}
                        fixed={fixed53}
                        value={value53}
                        position={53}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={53}
                        notes={notes}
                        pressed={pressed53}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(54)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity54 }]}
                  >
                    {fixed54 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed54}
                        fixed={fixed54}
                        value={value54}
                        position={54}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={54}
                        notes={notes}
                        pressed={pressed54}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bigRow}>
            <View style={styles.MediumSquare}>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(55)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity55 }]}
                  >
                    {fixed55 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed55}
                        fixed={fixed55}
                        value={value55}
                        position={55}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={55}
                        notes={notes}
                        pressed={pressed55}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(56)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity56 }]}
                  >
                    {fixed56 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed56}
                        fixed={fixed56}
                        value={value56}
                        position={56}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={56}
                        notes={notes}
                        pressed={pressed56}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(57)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity57 }]}
                  >
                    {fixed57 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed57}
                        fixed={fixed57}
                        value={value57}
                        position={57}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={57}
                        notes={notes}
                        pressed={pressed57}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(64)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity64 }]}
                  >
                    {fixed64 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed64}
                        fixed={fixed64}
                        value={value64}
                        position={64}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={64}
                        notes={notes}
                        pressed={pressed64}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(65)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity65 }]}
                  >
                    {fixed65 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed65}
                        fixed={fixed65}
                        value={value65}
                        position={65}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={65}
                        notes={notes}
                        pressed={pressed65}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(66)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity66 }]}
                  >
                    {fixed66 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed66}
                        fixed={fixed66}
                        value={value66}
                        position={66}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={66}
                        notes={notes}
                        pressed={pressed66}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(73)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity73 }]}
                  >
                    {fixed73 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed73}
                        fixed={fixed73}
                        value={value73}
                        position={73}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={73}
                        notes={notes}
                        pressed={pressed73}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(74)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity74 }]}
                  >
                    {fixed74 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed74}
                        fixed={fixed74}
                        value={value74}
                        position={74}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={74}
                        notes={notes}
                        pressed={pressed74}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(75)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity75 }]}
                  >
                    {fixed75 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed75}
                        fixed={fixed75}
                        value={value75}
                        position={75}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={75}
                        notes={notes}
                        pressed={pressed75}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.MediumSquare}>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(58)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity58 }]}
                  >
                    {fixed58 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed58}
                        fixed={fixed58}
                        value={value58}
                        position={58}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={58}
                        notes={notes}
                        pressed={pressed58}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(59)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity59 }]}
                  >
                    {fixed59 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed59}
                        fixed={fixed59}
                        value={value59}
                        position={59}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={59}
                        notes={notes}
                        pressed={pressed59}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(60)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity60 }]}
                  >
                    {fixed60 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed60}
                        fixed={fixed60}
                        value={value60}
                        position={60}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={60}
                        notes={notes}
                        pressed={pressed60}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(67)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity67 }]}
                  >
                    {fixed67 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed67}
                        fixed={fixed67}
                        value={value67}
                        position={67}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={67}
                        notes={notes}
                        pressed={pressed67}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(68)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity68 }]}
                  >
                    {fixed68 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed68}
                        fixed={fixed68}
                        value={value68}
                        position={68}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={68}
                        notes={notes}
                        pressed={pressed68}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(69)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity69 }]}
                  >
                    {fixed69 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed69}
                        fixed={fixed69}
                        value={value69}
                        position={69}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={69}
                        notes={notes}
                        pressed={pressed69}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(76)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity76 }]}
                  >
                    {fixed76 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed76}
                        fixed={fixed76}
                        value={value76}
                        position={76}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={76}
                        notes={notes}
                        pressed={pressed76}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(77)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity77 }]}
                  >
                    {fixed77 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed77}
                        fixed={fixed77}
                        value={value77}
                        position={77}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={77}
                        notes={notes}
                        pressed={pressed77}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(78)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity78 }]}
                  >
                    {fixed78 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed78}
                        fixed={fixed78}
                        value={value78}
                        position={78}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={78}
                        notes={notes}
                        pressed={pressed78}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.MediumSquare}>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(61)}
                >
                  <Animated.View
                    style={
                      darkMode
                        ? [
                            styles.animatedWrapperDarkMode,
                            { opacity: endOpacity61 },
                          ]
                        : [styles.animatedWrapper, { opacity: endOpacity61 }]
                    }
                  >
                    {fixed61 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed61}
                        fixed={fixed61}
                        value={value61}
                        position={61}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={61}
                        notes={notes}
                        pressed={pressed61}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(62)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity62 }]}
                  >
                    {fixed62 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed62}
                        fixed={fixed62}
                        value={value62}
                        position={62}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={62}
                        notes={notes}
                        pressed={pressed62}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(63)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity63 }]}
                  >
                    {fixed63 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed63}
                        fixed={fixed63}
                        value={value63}
                        position={63}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={63}
                        notes={notes}
                        pressed={pressed63}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(70)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity70 }]}
                  >
                    {fixed70 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed70}
                        fixed={fixed70}
                        value={value70}
                        position={70}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={70}
                        notes={notes}
                        pressed={pressed70}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(71)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity71 }]}
                  >
                    {fixed71 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed71}
                        fixed={fixed71}
                        value={value71}
                        position={71}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={71}
                        notes={notes}
                        pressed={pressed71}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(72)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity72 }]}
                  >
                    {fixed72 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed72}
                        fixed={fixed72}
                        value={value72}
                        position={72}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={72}
                        notes={notes}
                        pressed={pressed72}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
              <View style={styles.SmallRow}>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(79)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity79 }]}
                  >
                    {fixed79 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed79}
                        fixed={fixed79}
                        value={value79}
                        position={79}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={79}
                        notes={notes}
                        pressed={pressed79}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(80)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity80 }]}
                  >
                    {fixed80 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed80}
                        fixed={fixed80}
                        value={value80}
                        position={80}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={80}
                        notes={notes}
                        pressed={pressed80}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(81)}
                >
                  <Animated.View
                    style={[styles.animatedWrapper, { opacity: endOpacity81 }]}
                  >
                    {fixed81 ? (
                      <NumField
                        darkMode={darkMode}
                        pressed={pressed81}
                        fixed={fixed81}
                        value={value81}
                        position={81}
                        notes={notes}
                      />
                    ) : (
                      <NoteFiled
                        position={81}
                        notes={notes}
                        pressed={pressed81}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View
        style={
          darkMode ? styles.numberContainerDarkMode : styles.numberContainer
        }
      >
        <TouchableOpacity
          onPress={() => {
            chooseNumber(1);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(2);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(3);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(4);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(5);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(6);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>6</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(7);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>7</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(8);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>8</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(9);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>9</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonHolder}>
          <Animated.View
            style={
              darkMode
                ? notesOn
                  ? [
                      styles.buttonContainerDarkModeOn,
                      {
                        borderRadius: infoOpacity.interpolate({
                          inputRange: [0, 1],
                          outputRange: [25, 15],
                        }),
                        transform: [
                          {
                            translateY: infoOpacity.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0, -10],
                            }),
                          },
                        ],
                      },
                    ]
                  : [
                      styles.buttonContainerDarkMode,
                      {
                        borderRadius: infoOpacity.interpolate({
                          inputRange: [0, 1],
                          outputRange: [25, 15],
                        }),
                        transform: [
                          {
                            translateY: infoOpacity.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0, -10],
                            }),
                          },
                        ],
                      },
                    ]
                : notesOn
                ? [
                    styles.buttonContainerOn,
                    {
                      borderRadius: infoOpacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [25, 15],
                      }),
                      transform: [
                        {
                          translateY: infoOpacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -10],
                          }),
                        },
                      ],
                    },
                  ]
                : [
                    styles.buttonContainer,
                    {
                      borderRadius: infoOpacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [25, 15],
                      }),
                      transform: [
                        {
                          translateY: infoOpacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -10],
                          }),
                        },
                      ],
                    },
                  ]
            }
          >
            <TouchableOpacity style={styles.button} onPress={switchNotes}>
              {notesOn ? (
                <FontAwesomeIcon
                  color={darkMode ? "white" : "black"}
                  icon={faStickyNote}
                />
              ) : (
                <FontAwesomeIcon color="grey" icon={faStickyNote} />
              )}
            </TouchableOpacity>
          </Animated.View>
        </View>
        <View style={styles.buttonHolder}>
          <View
            style={
              darkMode
                ? styles.buttonContainerTimeDarkMode
                : styles.buttonContainerTime
            }
          >
            <TouchableOpacity style={styles.button}>
              <View>
                {showTime ? (
                  <Timer time={time} darkMode={darkMode} />
                ) : (
                  <View></View>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonHolder}>
          <View
            style={
              darkMode
                ? pauseOn
                  ? styles.buttonContainerDarkModeOn
                  : styles.buttonContainerDarkMode
                : pauseOn
                ? styles.buttonContainerOn
                : styles.buttonContainer
            }
          >
            <TouchableOpacity style={styles.button} onPress={switchPause}>
              {pauseOn ? (
                <FontAwesomeIcon color="grey" icon={faPlay} />
              ) : (
                <FontAwesomeIcon
                  color={darkMode ? "white" : "black"}
                  icon={faPause}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Animated.View style={[styles.infoViewDown, { opacity: infoOpacity }]}>
        <Text style={styles.infoTextDown}>Press to make notes</Text>
      </Animated.View>
    </View>
  ) : (
    <AnimatedTest></AnimatedTest>
  );
};

export default GameScreen3;
