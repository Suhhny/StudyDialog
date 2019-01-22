React-Native
==================

***Component***

* 상단바

```jsx
<SafeAreaView>
	<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
</SafeAreaView>
```

```jsx
<TouchableHighlight onPress={this.onPress}>
	<View>
		<Text>TouchableHighlight</Text>
	</View>
</TouchableHighlight>
```

```jsx
<FlatList data={[ {key: 'Devin'},
				{key: 'Jackson'},
				{key: 'James'},
				{key: 'Joel'},
				{key: 'John'},
				{key: 'Jillian'},
				{key: 'Jimmy'},
				{key: 'Julie'} ]} renderItem={({item}) => <Text>{item.key}</Text>}
/>
```

```jsx
<SectionList sections={[ {title: 'A', data: ['Devin']},
						{title: 'B', data: ['Jackson', 'James', 'Joel', 'John']},
						{title: 'C', data: ['Jillian', 'Jimmy', 'Julie']} ]}
						renderItem={({item, index}) => <Text key={index}>{item}</Text>}
						renderSectionHeader={({section}) => <Text style={{fontWeight: 'bold'}}>{section.title}</Text>}
						keyExtractor={(item, index) => item+index}
/>
```


***API***

* AsyncStorage

```javascript
import { AsyncStorage } from 'react-native';

const user = await AsyncStorage.getItem('KEY');
if(user){
	goToHome();
}else{
	goToAuth();
}
```

***Screen LifeCycle***

```javascript
componentDidAppear() {
	this.setState({
		text: 'component did appear!'
	});
}

componentDidDisappear() {
	this.setState({
		text: 'component did disappear'
	});
}
```

***react-native-licalization***

* Localized String

```javascript
import LocalizedStrings from 'react-native-localization';

const STRING = new LocalizedStrings({
 	kr: {
		title: '공지사항',
	},
  	en: {
    		title: 'Notice',
  	},
});
```

***native-base***

* Anatomy

```jsx
<Container>
	<Header>
		<Body></Body>
	</Header>
	<Content>

	</Content>
	<Footer />
</Container>
```

***react-native-elements***

* Icon
* Slider
* CheckBox

```javascript
<View style={ style.slider }>
	<Slider
		value={ birth }
                minimumValue={1900}
                maximumValue={2019}
                step={1}
                minimumTrackTintColor={'#f56c50'}
                maximumTrackTintColor={'#d0d0d4'}
                thumbStyle={ style.sliderThumb }
                thumbTintColor={'#f56c50'}
                onValueChange={ this._birth_picker_value }
	/>
        <Text>{ STRING.birth }: { birth }</Text>
</View>
```

***react-native-navigation***

* First screen once the app is lauched

```javascript
Navigation.events().registerAppLaunchedListener( () => {
	Navigation.setRoot({
		root: {
			component: {
				name: 'Initial'
			}
		}
	})
})
```

* Register all screens

```javascript
export const registerScreens = () => {
	Navigation.registerComponent('Home', () => Home)
	Navigation.registerComponent('Initial', () => Initial)
	Navigation.registerComponent('SignUp', () => SignUp)
	Navigation.registerComponent('SignIn', () => SignIn)
}
```

* Bottom Tabbar

```javascript
export const goToAuth = () => Navigation.setRoot({
	root: {
		bottomTabs: {
			children: [
				{	component: {
						name: 'SignIn',
						options: {
							bottomTab: {
								text: '야옹'
							}
						}
					}
				},
				{	component: {
						name: 'SignUp',
						options: {
							bottomTab: {
								text: '멍멍'
							}
						}
					}
				}
			]
		}
	}
})
```

* method

```
나중에,,
```


