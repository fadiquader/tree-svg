import React from 'react';
import { View, Dimensions } from 'react-native';
import App from './App';
import ZoomableSvg from './ZoomSVG';

const { width, height } = Dimensions.get('window');

class Root extends React.Component{
    x = 0;
    y = 0;
    onZoom = (val) => {
        console.log('val ', val)
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <ZoomableSvg ref={c => this.component = c}
                             // max={this.props.max}
                             width={height}
                             height={width}
                             onZoom={this.onZoom}
                             svgRoot={App}
                             initialLeft={-this.x + width / 2}
                             initialTop={-this.y + height / 2}
                             // childProps={{
                             //     data: this.loadLevelComponent()
                             // }}
                             constrain={{
                                 combine: 'intersect',
                                 scaleExtent: [0, 2],
                             }}
                />
            </View>
        )
    }
}

export default Root;
