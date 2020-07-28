import React, {useState} from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CheckBox } from 'react-native-elements';

import colors from '../../constants/Colors'
import Svg, { Path,G,Text } from 'react-native-svg';
import { setStateFocus } from '../../actions';
import { cos } from 'react-native-reanimated';

function setAreaFocus(area, dispatch){
  dispatch(setStateFocus(area));
}

function setTextColor(area, focusedArea){
  if(area==focusedArea){
    return colors.map.focused
  }else{
    return '#5B5B5B'
  }
}
function setTextSize(area, focusedArea){
  if(area==focusedArea){
    return '11'
  }else{
    return '6'
  }
}
function setDataText(area, areaData, status){
    if(status){
      return areaData[area]["전일대비"]
    }else{
      return areaData[area]["확진자수"]
    }
}

function setFillColor(area, areaData, status){
  if(status){
    if(areaData[area]["전일대비"]===0){
      return `rgba(157,0,0,${0})`
    }else if(areaData[area]["전일대비"]<5){
      return `rgba(157,0,0,${0.1})`
    }else if(areaData[area]["전일대비"]<10){
      return `rgba(157,0,0,${0.2})`
    }else if(areaData[area]["전일대비"]<15){
      return `rgba(157,0,0,${0.3})`
    }else if(areaData[area]["전일대비"]<20){
      return `rgba(157,0,0,${0.4})`
    }else if(areaData[area]["전일대비"]<25){
      return `rgba(157,0,0,${0.5})`
    }else if(areaData[area]["전일대비"]<30){
      return `rgba(157,0,0,${0.6})`
    }else if(areaData[area]["전일대비"]<35){
      return `rgba(157,0,0,${0.7})`
    }else if(areaData[area]["전일대비"]<40){
      return `rgba(157,0,0,${0.8})`
    }else{
      return `rgba(157,0,0,${0.9})`
    }
  }else{
    return `rgba(157,0,0,${areaData[area]["지역별확진자비율"]/25})`
  }
}

export default function MapSVG(props) {
  const [status, setStatus] = useState(true);
  const dispatch = useDispatch();
  const stateFocus = useSelector(state => state.stateFocus);
  const areaData = useSelector(state => state.areaData);

  return (
    <View style={styles.svgContainer}>
      <View style={styles.CheckBoxContainer}>
        <View>
          <CheckBox
            title='추가 확진자'
            checked={status}
            onPress={() => setStatus(true)}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            containerStyle={{backgroundColor:'rgba(0,0,0,0)', borderWidth:0}}
          />
          </View>
          <View>
          <CheckBox
            center
            title='총 확진자'
            checked={!status}
            onPress={() => setStatus(false)}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            containerStyle={{backgroundColor:'rgba(0,0,0,0)', borderWidth:0}}
          />
        </View>
      </View>
      <Svg height="410" width="320" viewBox="0 0 130 204" {...props}>
        <G id="shape">
          <Path 
            fill="white"
            stroke={colors.map.maxColor}
            d="M31.1,51c0.3-3.5-1.3-5.5-3.8-5.6
            c-2.5-0.2-2.2,5.2-6.6,0c-4.4-5.2-0.8-4.9-1.5-6.2c-0.7-1.3-3.7-0.7-4.6-1.3c-0.8-0.7-2-1.5-0.7-3c1.4-1.5,1.7-2.5,3-3.9
            c1.4-1.3,2.4,0.6,4-0.7c0.6-0.5,1-3,2.7-2.2s2.6,2.4,3.2,3.2c0,0,0.7,1.4,3,0.9l0,0l0.2-0.1c4.2-2,4.5-3.7,2.9-5.5
            c-1.6-1.8-1.1,0,2.9-2.7c4-2.7,1.6-3.5-1.2-4.8s-0.7-2.1,0-2.2c0.9-0.2,3.3-1.8,3.9-2.2s9-2.5,9-2.5l0.2-0.1
            c2.4-1.3,3.8-2.8,4.7-1.6c0.8,1.2,2.7,2.4,4.7,0.5c2-1.9,5.1-1.8,5.2-0.8c0.2,1,0.8,2.2,3.5,2c2.7-0.2,11.3,0.4,11.3-2.7
            c0-3.1,4.7-3.2,5.6-2.4c0.8,0.8,1.3,4.5,2-0.4c0.7-5,2.7-8.2,5.1-2.4c2.4,5.7,1.7,6.2,2.9,7.4c1.2,1.2,1.9,3.2,1.9,5.2
            c0,2,4.6,6.1,6.2,8.6c1.7,2.5,6.4,7.1,7.8,8.8c1,1.2,2.2,7.4,4.2,10.3c2,2.9,4.3,3.4,5.9,9.1c0.7,2.6,0.8,2.8,0.8,2.8l0.1,0.1
            c0,0,1.3,2.9,2.6,4c1.3,1.1,0.1,6.2,0,6.9c-0.1,0.7-1,1.6,0.2,2.7c1.5,1.4,0.3,6.2,0,8.9c-0.3,2.7,1.7,6.8,0.7,8.6
            c-1,1.9-2.3-0.5-2,4c0.3,4.6,0.8,6.3,1.2,7.6c0.3,1.3-0.2,2.7,0.3,3.7c0.5,1,3.2-0.5,3.4-1.7c0.2-1.2,2.5-1.3,2.2,1
            c-0.3,2.4,1.2,3.4,0,5.7c-1.2,2.4-0.9,3.5-1.9,5.4c-1,1.9-1.9,1.4-0.8,3.2c0,0,0.3,0.8,0.2,1.4c-0.2,3-0.4,6.9-1.8,8.2
            c-2,1.8-2.3,2.1-2,2.8c0.7,1.4-1.5,4.2-1.5,4.2l-0.3,0.8c-1.1,2.7-1.9,4.1-1.9,4.1c-1.6,4.1-3.7,3.6-4,3.1c-0.4-0.5-3-0.7-3,0.6
            c0,1.3-1.6,2.2-1.6,2.2c-5.4,1.5-6.6,3.1-6.6,3.1l-0.2,0.2c-0.6,0.6-0.6,3.4-0.6,3.4c-0.2,5.2-3.4,9.3-5.9,9.2s-7.2-0.1-7.8-3.7
            s-2.5-1.9-3.2-1.3c-0.8,0.6-3.9,1.2-4.8,1c-0.9-0.1-1.9,0.6-2.1,2.5c0,0,0.7,1.9-1.7,0.8c-2.4-1.1-4.1-1-5.8-0.6v0l-0.2,1
            c-0.7,1.4-0.7,5.2-7.6,3c-6.9-2.2-2.5,2-2.7,4.6c-0.2,2.5-1.3,3.7-4.9,2.4c-3.5-1.3-2,2-3.7,2c-1.7,0-4.6-0.3-5.1,0.5
            c-0.5,0.8,0.2,3.4-1.3,4.2c-1.5,0.8-2.5,0.7-6.1,0.5c-3.5-0.2-8.9-0.2-8.9-0.2l-5.4-2c0,0-3.4-1.7-4.4-1.5c-1,0.2-4.9,1.3-6.1,1.3
            c-1.2,0,5.4,6.3-3.7,5.6c-4.9,4.6-6.5,1.8-6.8,0c-0.2-0.8-3.3,1-1.9-2.5c1.4-3.5,3.4-7.9,5.7-9.1c0.8-0.4,3.7-1.9-0.5-3.2
            c-4.2-1.3-1.7-2-1.7-3.9c0-1.9-0.8-1.5-1.5-3c-0.7-1.5-0.2-2.4,0.7-3.2c0.9-0.8,2.9,0.3,2.4-4.4c-0.2-1.4,0.5-1.1,2.2-1.5
            c2.8-0.7,3.4-2.7,0.7-4.2c-2.7-1.5-4.2-4-0.7-4.4c3.5-0.3,5.1,0.5,7.1,0c2-0.5,4.6-1,3-4.2c-1.5-3.2,1.9-4.2,2-5.2s-0.9-0.8,0-2.5
            c0.2-0.3,0.7-0.6,0.7-0.6s0.2-2.2,0.8-2.8c0.7-0.6,1.4-0.4,0.9-2.5c-0.5-2.2,2.6-4,2.8-4.1c0.1-0.1,5.3-3.8,1.5-8.8
            c0,0-4.4-3.8-1.3-4.2l3.5-0.8l0,0L27,101c-3.9-3.6-2.4-4.1-1.2-4.9c1.2-0.8,1-5.4-2.7-5.7c-3.7-0.3-5.9-4.2-4.6-7.3
            c1.4-3-0.7-5.7-3.2-4.1c-2.5,1.7-2.5-1.7-2.2-4c0.3-2.4-0.2-4.9,1-6.1c0.7-0.7,7.3-6.1,7.9-6.4c0.7-0.3,1.9-1.3,5.2,0
            c3.4,1.3,4.1,1.6,4.4,1.7c0,0,1,0.3,1.9,0.1c0.3-0.1,0-0.5,0-0.5c-0.1-0.4-3.5-4.1-4.6-5.8c-1.2-1.7-0.5-3.1,0.9-3.6
            C31.2,53.9,31.1,51,31.1,51z"/>
          <Path 
            fill="white"
            stroke={colors.map.maxColor}
            d="M21.5,189.2c0,0-2.2,3.3-6.1,3.9
            c-3.9,0.6-2.5,5.8-0.3,7.2c2.2,1.4,3,3.7,6.1,1.6c1.6-1.1,4.8,0.1,8.8-0.3c1.6-0.1,11.5-4.8,10.8-8.9c-0.8-4.1-2.7-6.6-7-5.3
            c-4.3,1.3-7.5,1.1-8.7,1.1C23.8,188.6,22.8,188.3,21.5,189.2z"/>
        </G>
        <G id="layer_1">
        <TouchableWithoutFeedback onPress={() => setAreaFocus('제주',dispatch)}>
        <Path
          fill={setFillColor('제주',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="39" d="M21.5,188.9c0,0-2.2,3.3-6.1,3.9c-3.9,0.6-2.5,5.8-0.3,7.2
          c2.2,1.4,3,3.7,6.1,1.6c1.6-1.1,4.8,0.1,8.8-0.3c1.6-0.1,11.5-4.8,10.8-8.9c-0.8-4.1-2.7-6.6-7-5.3c-4.3,1.3-7.5,1.1-8.7,1.1
          C23.8,188.4,22.8,188.1,21.5,188.9z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('경남',dispatch)}>
        <Path
          fill={setFillColor('경남',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="38" d="M106.3,136.8c-2.1,0.9-1.9,2.7-1.9,2.7c-1.5,4.1-3.7,2.6-4.8,1.8
          c-1.1-0.8-2.7-1.8-2.9-0.6c-0.2,1.2-3.3,2.7-3.3,2.7c-3.9,1.7-1.1,3.7-1.1,3.7c3.4,3.7,3.6,1.6,6-1.3c2.4-2.8,4.9,1.6,4.9,1.6
          c-0.6,0.6-0.7,3.5-0.7,3.5c-0.2,5.2-3.4,9.3-5.9,9.2c-2.5-0.1-7.2-0.1-7.8-3.7c-0.7-3.6-2.5-1.9-3.2-1.3c-0.8,0.6-3.9,1.2-4.8,1
          c-0.9-0.1-1.9,0.6-2.1,2.5c0,0,0.7,1.9-1.7,0.8c-2.4-1.1-4.1-1-5.8-0.6c0,0-0.4-0.8-0.4-4.2l0,0.1c0.4-4.6-0.8-3.3-1.3-4.5
          c-0.4-1.2-0.5-3.9-0.8-4.4c-0.3-0.5-3.8-2.3-4.5-5.1c-0.5-1.9-1.4-4.3-1.5-6.4l-0.1-0.3l0-0.5c-0.1-0.5,1.5-3.3,1.5-3.3
          c1-2.3-0.4-2.7-0.8-3.7c-0.4-1-1.1-4.1-0.2-4.8c0.9-0.7,1.3-2.3,1.3-2.3c0.6-7.4,8.4-8.6,8.4-8.6s8.4,3,9.2,3.5
          c0.8,0.5,2.3,2.4,1.5,4.1c0,0-0.4,2.2,4,1.9l0.3-0.1c0,0,5.3-0.4,7.4,1.2l0.4,0.4c0.9,1.1,6.4,1.9,9,1.5c2.6-0.3,2.9-1.8,4.7-2.3
          l1-0.5c0,0,0.4,2-0.9,3.2c-1.3,1.3,0.1,2,1.7,2.7c1.6,0.7,5.1,1.3,5.7,2.9C116.7,129.3,113.8,133.4,106.3,136.8z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('부산',dispatch)}>
        <Path
          fill={setFillColor('부산',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="21" d="M118.5,138.1c-1.6,4.1-3.7,3.6-4,3.1c-0.4-0.5-3-0.7-3,0.6
          c0,1.3-1.6,2.2-1.6,2.2c-5.4,1.5-6.7,3.3-6.7,3.3s-2.5-4.4-4.9-1.6c-2.4,2.9-2.6,5-6,1.3c0,0-2.8-2,1.1-3.7c0,0,3.1-1.4,3.3-2.7
          c0.2-1.2,1.8-0.2,2.9,0.6c1.1,0.8,3.4,2.4,4.8-1.8c0,0-0.1-1.8,1.9-2.7c7.5-3.4,10.3-7.7,10.4-7.5c0.2,0.5-0.1,4.8,3.8,4
          C121.1,133.2,118.5,138.1,118.5,138.1z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('울산',dispatch)}>
        <Path
          fill={setFillColor('울산',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="26" d="M122.2,129c-0.3-0.7-0.1-1.1,2-2.8c2-1.8,1.7-8.8,1.7-8.8
          c0,1.2-5.7,2-7.1,1.2c-1.5-0.9-2.3-1.7-4.7-1.2c-1,0.2-3.9,3.1-3.9,3.1s0.4,2-0.9,3.2c-1.3,1.3,0.1,2,1.7,2.7
          c1.6,0.7,5.1,1.3,5.7,2.9c0,0,0.1,4.4,3,4l0.8,0C120.5,133.3,122.8,130.4,122.2,129z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('전남',dispatch)}>
        <Path
          fill={setFillColor('전남',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="36" d="M70.6,154.5c0.4-4.6-0.8-3.3-1.3-4.5c-0.4-1.2-0.5-3.9-0.8-4.4c-0.3-0.5-3.8-2.3-4.5-5.1
          c-0.5-1.9-1.4-4.3-1.5-6.4l-0.1-0.3c-0.2-1.5-2.8-2.7-3.9-1.5c-0.7,0.7-3.9,2.5-5.3,1.9c-1.4-0.6-3-0.5-5.1,0.3
          c-2.1,0.8-4.2-3.5-5.5-4.4c-1.3-0.8-6-4.1-7.4-1.5c-1.4,2.6-5.6,5.2-5.6,5.2c-1.1,0-2.6-0.7-2.6-0.7c-1.5-1.2-4.1-4.9-4.1-4.9
          s-0.5-1.1-1.3,0.2c-1,1.6,0.2,1.5,0,2.5c-0.2,1-3.5,2-2,5.2c1.5,3.2-1,3.7-3,4.2c-2,0.5-3.5-0.3-7.1,0c-3.5,0.3-2,2.9,0.7,4.4
          c2.7,1.5,2.1,3.5-0.7,4.2c-1.7,0.4-2.4,0.1-2.2,1.5c0.6,4.7-1.5,3.5-2.4,4.4c-0.9,0.8-1.3,1.7-0.7,3.2c0.7,1.5,1.5,1.2,1.5,3
          c0,1.9-2.5,2.5,1.7,3.9c4.2,1.4,1.3,2.8,0.5,3.2c-2.4,1.2-4.4,5.6-5.7,9.1c-1.3,3.5,1.8,1.7,1.9,2.5c0.4,1.8,1.9,4.6,6.8,0
          c9.1,0.8,2.5-5.6,3.7-5.6c1.2,0,5.1-1.2,6.1-1.3c1-0.2,4.4,1.5,4.4,1.5l5.4,2c0,0,5.4,0,8.9,0.2c3.5,0.2,4.6,0.3,6.1-0.5
          c1.5-0.8,0.8-3.4,1.3-4.2c0.5-0.8,3.4-0.5,5.1-0.5c1.7,0,0.2-3.4,3.7-2c3.5,1.3,4.7,0.2,4.9-2.4c0.2-2.5-4.2-6.7,2.7-4.6
          c6.9,2.2,6.8-1.6,7.6-3l0.2-1C70.9,158.6,70.5,157.7,70.6,154.5"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('전북',dispatch)}>
        <Path
          fill={setFillColor('전북',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="35" d="M27,105.6c-3.1,0.3,1.3,4.2,1.3,4.2c3.8,5-1.4,8.7-1.5,8.8c-0.1,0.1-3.2,2-2.8,4.1
          c0.5,2.3-0.5,2-0.9,2.5c-1.5,2.2-0.3,3.2-0.3,3.2s2.6,3.7,4.1,4.9c0,0,1.4,0.7,2.6,0.7c0,0,4.2-2.6,5.6-5.2
          c1.4-2.6,6.1,0.7,7.4,1.5c1.3,0.8,3.4,5.1,5.5,4.4c2.1-0.8,3.7-0.8,5.1-0.3c1.4,0.6,4.5-1.2,5.3-1.9c2.2-1.8,4.1,1.5,4,1
          c-0.1-0.5,1.5-3.3,1.5-3.3c1-2.3-0.4-2.7-0.8-3.7c-0.4-1-1.1-4.1-0.2-4.8c0.9-0.7,1.3-2.3,1.3-2.3c0.6-7.4,8.4-8.6,8.4-8.6
          c0-0.8-0.5-3.2-0.8-4.4c-0.3-1.2-6.8-1.9-6.8-1.9c0.6,2.5-6.2,2.1-7.9,1.6c-1.7-0.5-1.9-3.1-3.4-4.8c-1.4-1.7-4.1,1-5.5,2.1
          c-1.3,1.1-4,0.9-4-0.8c0.1-1.7-1.1-4.1-2.6-4.3c-1.5-0.3-2.9,1.7-4.3,5.1c-1.4,3.5-6.8,1.5-6.8,1.5L27,105.6z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('충북',dispatch)}>
        <Path
          fill={setFillColor('충북',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="33" d="M92.3,64.4c-1.1,1.9-0.7,4.1-0.7,4.1s1.4,5.6-4.8,3.1
          c-6.2-2.4-5.2,0-7.1,0.6c-1.9,0.6-3.6,3.5-5.4,5c-1.8,1.5-5.2,2.4-3.8,4.1c1.4,1.8,2.5,3.4,2,5.3c-0.4,1.9-3.1,3.5-2.4,5.1
          c0.8,1.6,2.8,2,5,2c2.2-0.1,2.6,1.8,0.9,4.4c-1.7,2.6-1.9,5.7-2.5,6.2l-1.7,1.6c-2.9-1.5-7-1.6-7-1.6l-0.2-1.1
          c-1.4-4-1.7-6.4-2.1-7.2c-1-2-3-1.2-3-1.2l0.6-1.3c0.1-0.3,0.4-2.5,0.6-3.4c0.2-0.9,0.2-2.7-0.1-3.4c-0.3-0.7-0.8-0.6-1.5-0.8
          c-0.7-0.2-3.3-2.3-3.3-2.3s-1.6-2.9-2.6-4.2c-3.2-4,0.7-4.9,0.7-4.9s7.2-1.4,1-6.6c0,0,2.2-4.2,3.1-4.7c0.9-0.5,3.3-0.9,4.5-1.6
          c1.2-0.7,4.2-3.3,4.2-3.3l0.6-0.5l0.3-0.3c0,0,5.6,1.7,7.1-3.2c0,0,1.1-2.6,1.9,0.5c0.8,3.1,4-0.8,4-0.8s1.7-1.7,3.7,1.3
          c1.9,3.1,0.6,2.3,6.4,3.7c0,0,2.8-0.2,3.5,3.4C94.3,62.7,93,63.3,92.3,64.4z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('충남',dispatch)}>
        <Path
          fill={setFillColor('충남',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="34" d="M54,74.8c7.2-2.1,1.1-6.4,1.1-6.4l-0.2-0.1c0,0-0.8,0.1-5-1.4
          c-4.2-1.5-7,0-7,0c-7.4,2.4-9.1-2.7-9.5-2.5c-0.4,0.2-1.9-0.1-1.9-0.1c-0.3-0.1-1-0.3-4.4-1.7c-3.4-1.3-4.6-0.3-5.2,0
          c-0.7,0.3-7.2,5.8-7.9,6.4c-1.2,1.2-0.7,3.7-1,6.1c-0.3,2.4-0.3,5.7,2.2,4c2.5-1.7,4.6,1,3.2,4c-1.3,3,0.8,6.9,4.6,7.3
          c3.7,0.3,3.9,4.9,2.7,5.7c-1.2,0.8-2.7,1.3,1.2,4.9l3.5,3.7c0,0,5.4,2,6.8-1.5c1.4-3.5,2.8-5.4,4.3-5.1s2.7,2.6,2.6,4.3
          c-0.1,1.7,2.6,1.9,4,0.8c1.4-1.1,4-3.9,5.5-2.1c1.4,1.7,1.7,4.3,3.4,4.8c1.7,0.5,9.1,1.4,7.7-2.5c-1.4-4-1.8-6.4-2.1-7.2
          c-0.8-1.8-2.4-1.4-3-1.1l-0.3,0.4c-0.9,1.3-0.8,1.1-1.1,1.4s-1.5,1.1-2.7,0.4c-1.3-0.7-3.6-0.1-4.1-5.7c-0.1-1.3,0.4-3.3,0.4-3.3
          s0-0.1-1.5-0.4c-1.3-0.2-1.6-1.6-2-4.6c-0.4-2.9,0.5-2.8-0.5-2.9c-1-0.1-0.4-1.1-0.1-2.2c0.3-1-0.6-1.9-0.9-3.3
          c-0.3-1.4,1.6-2.4,2.3-1.1c0.6,1.3,2.2,2,3.2,1.8C52.7,75.5,53.5,74.9,54,74.8z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('경북',dispatch)}>
        <Path
          fill={setFillColor('경북',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="37" d="M95.4,121.7c0.9,1.1,6.4,1.9,9,1.5c2.6-0.3,2.9-1.8,4.7-2.3
          c1.9-0.5,3.1-3.2,5.1-3.6c1.9-0.4,3.2,0.4,4.6,1.3c1.3,0.8,7.2,0,7.2-1.2c0-0.2-0.2-0.6-0.2-0.6c-1-1.9-0.2-1.3,0.8-3.2
          c1-1.9,0.7-3,1.9-5.4c1.2-2.4-0.4-3.4,0-5.7c0.3-2.4-2-2.2-2.2-1c-0.2,1.2-2.9,2.7-3.4,1.7c-0.5-1,0-2.4-0.3-3.7
          c-0.3-1.3-0.8-3-1.2-7.6c-0.3-4.6,1-2.2,2-4c1-1.9-1-5.9-0.7-8.6c0.3-2.7,1.5-7.6,0-8.9c-1.2-1.1-0.4-2.1-0.2-2.7
          c0.1-0.6,1.2-5.8,0-6.9c-1.3-1.1-2.7-4.2-2.7-4.2s-2.8,4.9-5.1,4.8c-2.3-0.1-5.2-1.2-5.7-1.2c-0.5,0-1.4,0.3-1.8,1.2
          c-0.4,0.9-2.4,0.8-3.5,0c-1.2-0.8-1.8-0.1-3.5,0.3c-1.7,0.3-6.1,0.3-7.8,3c-1.1,1.8-0.7,4.1-0.7,4.1s1.4,5.6-4.8,3.1
          c-6.2-2.4-5.2,0-7.1,0.6c-1.9,0.6-3.6,3.5-5.4,5c-1.8,1.5-5.2,2.4-3.8,4.1c1.4,1.8,2.5,3.4,2,5.3c-0.4,1.9-3.1,3.5-2.4,5.1
          c0.8,1.6,2.8,2,5,2c2.2-0.1,2.6,1.8,0.9,4.4s-1.9,5.7-2.5,6.2c-1,0.9-1.9,1.8-1.9,1.8s0.8,2.8,0.8,4.4c0,0,8.4,3,9.2,3.5
          c0.8,0.5,2.3,2.4,1.5,4.1c0,0-0.4,2.2,4,1.9c0,0,3.6-4.7,1.1-7.8c0,0-2.3-2.2,1-3.5c3.3-1.4,2-3.4,4.7-3.5c2.7-0.2,4.9-1.5,5.7-0.8
          c0.8,0.8,4.6,4.2,3.1,5.7c-1.5,1.5-4.7,6.8-5.8,7.4c-1.1,0.6-2.7,0.5-2.6,1.5c0,0.2,0.5,2.1,0.5,2.1L95.4,121.7z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('강원',dispatch)}>
        <Path
          fill={setFillColor('강원',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="32" d="M119.7,56.3c0,0-2.8,4.9-5.1,4.8c-2.3-0.1-5.2-1.2-5.7-1.2
          c-0.5,0-1.4,0.3-1.8,1.2c-0.4,0.9-2.3,0.7-3.5,0c-1.5-0.9-1.8,0.2-3.7,0.3c-4.1,0.3-5.6,1.2-5.6,1.2c-0.7-3.7-3.5-3.4-3.5-3.4
          c-5.8-1.4-4.5-0.6-6.4-3.7c-1.9-3.1-3.7-1.4-3.7-1.4s-3.2,3.9-4,0.8c-0.8-3.1-1.9-0.5-1.9-0.5c-1.5,4.9-7.1,3.2-7.1,3.2l0-0.3
          c0,0,0.4-5.1,0.8-6.6c0.4-1.5,0.1-3.9-0.3-4.8c-0.3-0.8,0.1-1.5,0.1-1.5c2.8-6.1-1.8-4.4-3.4-4.8c-0.9-0.2-3.4-0.8-3.7-2
          c-0.3-1.3-1.1-3.8-1.1-5.8s1-2.7,1-3.7c0-1,1.4-4.4-7.1-8.9c-8.5-4.4-6.1-7.4-6.1-7.4c2.4-1.3,3.8-2.8,4.7-1.6
          c0.8,1.2,2.7,2.4,4.7,0.5c2-1.9,5.1-1.8,5.2-0.8c0.2,1,0.8,2.2,3.5,2c2.7-0.2,11.3,0.4,11.3-2.7c0-3.1,4.7-3.2,5.6-2.4
          c0.8,0.8,1.3,4.5,2-0.4c0.7-5,2.7-8.2,5.1-2.4c2.4,5.7,1.7,6.2,2.9,7.4c1.2,1.2,1.9,3.2,1.9,5.2c0,2,4.6,6.1,6.2,8.6
          c1.7,2.5,6.4,7.1,7.8,8.8c1,1.2,2.2,7.4,4.2,10.3c2,2.9,4.3,3.4,5.9,9.1c0.7,2.6,0.8,2.9,0.8,2.9"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('대구',dispatch)}>
        <Path
          fill={setFillColor('대구',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="22" d="M95,121.2c0,0-0.5-1.8-0.5-2.1c-0.1-1,1.5-0.9,2.6-1.5
          c1.1-0.6,4.3-5.9,5.8-7.4c1.5-1.5-2.4-5-3.1-5.7c-0.8-0.8-3,0.6-5.7,0.8c-2.7,0.2-1.4,2.2-4.7,3.5c-3.3,1.3-1,3.5-1,3.5
          c2.6,2.7-0.8,7.7-0.8,7.7S92.8,119.6,95,121.2z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('경기',dispatch)}>
        <Path
          fill={setFillColor('경기',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="31" d="M67.7,57.8l0-0.3c0,0,0.4-5.1,0.8-6.6c0.4-1.5,0.1-3.9-0.3-4.8
          c-0.3-0.8,0.1-1.5,0.1-1.5c2.8-6.1-1.8-4.4-3.4-4.8c-0.9-0.2-3.4-0.8-3.7-2c-0.3-1.3-1.1-3.8-1.1-5.8s1-2.7,1-3.7
          c0-1,1.4-4.4-7.1-8.9c-8.5-4.4-6.1-7.4-6.1-7.4s-8.6,2.1-9.2,2.5s-3,2-3.9,2.2c-0.7,0.2-2.8,1,0,2.2s5.2,2.1,1.2,4.8
          c-4,2.7-4.5,0.9-2.9,2.7c1.6,1.8,1.2,3.5-3,5.5c0,0-4.1,3.3-1.9,4.9c0,0,0.8-0.3,0.8,3.1c0,0-0.3,0.8,1.9,0.2
          c2.3-0.6,4.4-0.6,5.1,0.5c0.7,1.1,2.5,3.9-2.2,7.6l-2.6,2.8c0,0,0.1,2.8-1.3,3.3c-1.5,0.5-2.1,1.9-0.9,3.6c1.2,1.7,4.5,5.4,4.6,5.8
          c0.1,0.5,2.3,5.4,9.4,3.1c0,0,2.7-1.6,7,0s5.1,1.3,5.1,1.3s2.2-4.2,3.1-4.7c0.9-0.5,3.3-0.9,4.5-1.6c1.2-0.7,4.2-3.3,4.2-3.3
          l0.6-0.5L67.7,57.8z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('대전',dispatch)}>
        <Path
          fill={setFillColor('대전',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="25" d="M59.6,95l-0.3,0.4c-0.9,1.3-0.8,1.1-1.1,1.4c-0.3,0.3-1.5,1.1-2.7,0.4
          c-1.3-0.7-3.7,0-4.1-5.7c-0.4-5.8,3.9-5,4.4-6.2c0,0,0.3-0.9,0.2-1.4s2.6,2.1,3.2,2.3c0.7,0.2,1.1,0.1,1.5,0.8
          c0.3,0.7,0.3,2.5,0.1,3.4c-0.2,0.9-0.5,3.1-0.6,3.4L59.6,95z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('인천',dispatch)}>
        <Path
          fill={setFillColor('인천',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="23" d="M31.1,51.1c0.3-3.5-1.3-5.5-3.8-5.7c-2.5-0.2-2.2,5.2-6.6,0
          c-4.4-5.2-0.8-4.9-1.5-6.2c-0.7-1.3-3.7-0.7-4.6-1.3c-0.8-0.7-2-1.5-0.7-3c1.4-1.5,1.7-2.5,3-3.9c1.4-1.3,2.4,0.6,4-0.7
          c0.6-0.5,1-3,2.7-2.2s2.6,2.4,3.2,3.2c0,0,0.7,1.4,3,0.9l0,0c0,0-4,3.2-1.8,4.8c0,0,0.8-0.3,0.8,3.1c0,0-0.3,0.8,1.9,0.2
          c2.3-0.6,4.4-0.6,5.1,0.5c0.7,1.1,2.5,3.9-2.2,7.6L31.2,51L31.1,51.1z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('서울',dispatch)}>
        <Path
          fill={setFillColor('서울',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="11" d="M36.5,45.3c0,0,4.6,0.6,5.5,1.3c0.9,0.7,3.3,0.3,3.7-1
          c0.4-1.3,2-0.5,2.8-1.3s0.8-1.9,0.4-2.9c-0.3-1-0.8-0.7-0.8-2.1c-0.1-1.3-1.3-3.1-2.6-4c-1.3-0.8-3,0-3.5,0.7
          c-0.6,0.7-5.6,5.2-5.6,5.2S37.3,42.6,36.5,45.3z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('세종',dispatch)}>
        <Path
          fill={setFillColor('세종',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" d="M52.4,75.8c-0.5,0.7-0.6,1.8,1,3.8c1,1.3,2.7,4.4,2.7,4.4l0,0
          c0.2,0.4-0.3,1.3-0.3,1.3C55.3,86.1,53,86,51.9,88l-0.3,0c0,0,0,0-1.3-0.3c-1.3-0.3-1.6-1.6-2-4.6c-0.4-2.9,0.5-2.8-0.5-2.9
          c-1-0.1-0.4-1.1-0.1-2.2c0.3-1-0.6-1.9-0.9-3.3c-0.3-1.4,1.7-2.4,2.3-1.1c0.8,1.8,3.4,1.9,3.4,1.9S52.5,75.8,52.4,75.8z"/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAreaFocus('광주',dispatch)}>
        <Path
          fill={setFillColor('광주',areaData,status)} 
          stroke={colors.map.maxColor}
          class="region" data-region_id="24" d="M31.5,136.6c0.2-0.5,0.7,0.2,2-0.1c1.3-0.3,2.9-1.1,4.9-0.7c2,0.4,4.6,2.8,4,6.8
          c-0.7,4-5.9,3.4-7.3,2.4c-1.1-0.8-0.1-1.3-2.8-2.2c-2.7-0.9-2-2.6-1.1-4C31.2,138.8,31.2,137.4,31.5,136.6z"/>
        </TouchableWithoutFeedback>
        </G>
        <G id="layer_2">
          <Text x="75" y="35" stroke="rgba(0,0,0,0)"  fontWeight="600" fill={setTextColor("강원",stateFocus)} fontSize={setTextSize("강원",stateFocus)} >강원도</Text>
          <Text x="78" y="45" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("강원",stateFocus)} fontSize={setTextSize("강원",stateFocus)} >{setDataText("강원", areaData, status)} 명</Text>

          <Text x="90" y="97" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("경북",stateFocus)} fontSize={setTextSize("경북",stateFocus)} >{setDataText("경북", areaData, status)} 명</Text>
          <Text x="90" y="87" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("경북",stateFocus)} fontSize={setTextSize("경북",stateFocus)} >경북</Text>

          <Text x="72" y="145" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("경남",stateFocus)} fontSize={setTextSize("경남",stateFocus)} >{setDataText("경남", areaData, status)} 명</Text>
          <Text x="72" y="135" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("경남",stateFocus)} fontSize={setTextSize("경남",stateFocus)} >경남</Text>
          
          <Text x="38" y="125" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("전북",stateFocus)} fontSize={setTextSize("전북",stateFocus)} >{setDataText("전북", areaData, status)} 명</Text>
          <Text x="38" y="115" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("전북",stateFocus)} fontSize={setTextSize("전북",stateFocus)} >전북</Text>
          
          <Text x="23" y="170" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("전남",stateFocus)} fontSize={setTextSize("전남",stateFocus)} >{setDataText("전남", areaData, status)} 명</Text>
          <Text x="23" y="160" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("전남",stateFocus)} fontSize={setTextSize("전남",stateFocus)} >전남</Text>
          
          <Text x="20" y="200" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("제주",stateFocus)} fontSize={setTextSize("제주",stateFocus)} >{setDataText("제주", areaData, status)} 명</Text>
          <Text x="20" y="190" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("제주",stateFocus)} fontSize={setTextSize("제주",stateFocus)} >제주</Text>
          
          <Text x="21" y="94" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("충남",stateFocus)} fontSize={setTextSize("충남",stateFocus)} >{setDataText("충남", areaData, status)} 명</Text>
          <Text x="21" y="84" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("충남",stateFocus)} fontSize={setTextSize("충남",stateFocus)} >충남</Text>

          <Text x="61" y="81" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("충북",stateFocus)} fontSize={setTextSize("충북",stateFocus)} >{setDataText("충북", areaData, status)} 명</Text>
          <Text x="61" y="71" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("충북",stateFocus)} fontSize={setTextSize("충북",stateFocus)} >충북</Text>

          <Text x="37" y="29" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("경기",stateFocus)} fontSize={setTextSize("경기",stateFocus)} >{setDataText("경기", areaData, status)} 명</Text>
          <Text x="34" y="20" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("경기",stateFocus)} fontSize={setTextSize("경기",stateFocus)} >경기도</Text>
          
          <Text x="37" y="50" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("서울",stateFocus)} fontSize={setTextSize("서울",stateFocus)} >{setDataText("서울", areaData, status)} 명</Text>
          <Text x="37" y="40" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("서울",stateFocus)} fontSize={setTextSize("서울",stateFocus)} >서울</Text>
          
          <Text x="89" y="122" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("대구",stateFocus)} fontSize={setTextSize("대구",stateFocus)} >{setDataText("대구", areaData, status)} 명</Text>
          <Text x="89" y="112" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("대구",stateFocus)} fontSize={setTextSize("대구",stateFocus)} >대구</Text>
          
          <Text x="42" y="83" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("세종",stateFocus)} fontSize={setTextSize("세종",stateFocus)} >{setDataText("세종", areaData, status)} 명</Text>
          <Text x="42" y="73" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("세종",stateFocus)} fontSize={setTextSize("세종",stateFocus)} >세종</Text>
          
          <Text x="32" y="149" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("광주",stateFocus)} fontSize={setTextSize("광주",stateFocus)} >{setDataText("광주", areaData, status)} 명</Text>
          <Text x="32" y="139" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("광주",stateFocus)} fontSize={setTextSize("광주",stateFocus)} >광주</Text>
          
          <Text x="110" y="134" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("울산",stateFocus)} fontSize={setTextSize("울산",stateFocus)} >{setDataText("울산", areaData, status)} 명</Text>
          <Text x="110" y="124" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("울산",stateFocus)} fontSize={setTextSize("울산",stateFocus)} >울산</Text>
          
          <Text x="96" y="150" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("부산",stateFocus)} fontSize={setTextSize("부산",stateFocus)} >{setDataText("부산", areaData, status)} 명</Text>
          <Text x="96" y="140" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("부산",stateFocus)} fontSize={setTextSize("부산",stateFocus)} >부산</Text>
          
          <Text x="50" y="104" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("대전",stateFocus)} fontSize={setTextSize("대전",stateFocus)} >{setDataText("대전", areaData, status)} 명</Text>
          <Text x="50" y="94" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("대전",stateFocus)} fontSize={setTextSize("대전",stateFocus)} >대전</Text>
          
          <Text x="16" y="47" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("인천",stateFocus)} fontSize={setTextSize("인천",stateFocus)} >{setDataText("인천", areaData, status)} 명</Text>
          <Text x="16" y="37" stroke="rgba(0,0,0,0)" fontWeight="600" fill={setTextColor("인천",stateFocus)} fontSize={setTextSize("인천",stateFocus)} >인천</Text>
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  svgContainer:{
    alignItems: 'center',
    marginTop: 20,
  },
  CheckBoxContainer:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: '-7%',
    marginBottom: '-4%',
  }
});